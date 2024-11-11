<?php
// Инициализация переменных
$response = array('success' => false, 'message' => 'Ошибка отправки данных');

// Проверка данных
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	$name = trim($_POST['name']);
	$phone = trim($_POST['phone']);
	$message = trim($_POST['message']);

	// Простейшая валидация
	if (empty($name) || empty($phone)) {
		$response['message'] = 'Поля с звездочкой обязательны для заполнения.';
	} elseif (!preg_match('/^\+7[0-9]{1,15}$/', $phone)) {
		$response['message'] = 'Неверный формат телефона. Верный форма: +7 (___) ___-__-__"';
	} else {
		// Обработка данных (например, отправка email)
		$to = "tcachelena@gmail.com"; // Укажите ваш email
		$subject = "Новое сообщение с сайта";
		$body = "Имя: $name\nТелефон: $phone\nСообщение:\n$message";
		$headers = "From: Anwalt@yourdomain.com";

		if (mail($to, $subject, $body, $headers)) {
			$response['success'] = true;
			$response['message'] = 'Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.';
		} else {
			$response['message'] = 'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже.';
		}
	}

	// Отправляем JSON-ответ
	echo json_encode($response);
}
?>