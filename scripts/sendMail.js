import { onShowMenu } from "./menu.js";
import { popup } from "./router.js";

export const sendMail = () => {
  document
    .querySelector(".js-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Получаем данные из формы
      const name = document.querySelector(".js-name").value.trim();
      const phone = document.querySelector(".js-phone").value.trim();
      const message = document.querySelector(".js-message").value.trim();

      let errors = [];

      // Проверка на пустые поля
      //   if (!name) {
      //     errors.push("Пожалуйста, введите ваше имя.");
      //   }

      if (!phone) {
        errors.push("Пожалуйста, введите телефон.");
      } else if (!/^\+?[0-9]{1,15}$/.test(phone)) {
        errors.push(
          `Неверный формат телефона. Используйте только цифры.
		  Верный форма: 8 (___) ___-__-__`
        );
      }
      //   // Если есть ошибки, выводим их и не отправляем форму
      //   if (errors.length > 0) {
      //     const errorMessages = errors.join("<br>");
      //     document.getElementById("response-message").innerHTML =
      //       `<p style="color: red;">${errorMessages}</p>`;
      //     document.getElementById("response-message").style.display = "block";
      //     return;
      //   }

      // Если ошибок нет, отправляем данные на сервер
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("message", message);

      fetch("/inc/send_form.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            // console.log("True", data.message);
            // document.getElementById("response-message").innerHTML =
            //   `<p style="color: green;">${data.message}</p>`;
            onShowMenu(popup);
            document.querySelector(".js-form").reset();
          } else {
            console.log("Else", data.message);
            document.getElementById("response-message").innerHTML =
              `<p style="color: red;">${data.message}</p>`;
          }
          document.getElementById("response-message").style.display = "block";
        })
        .catch((error) => {
          console.log("error", error);
          document.getElementById("response-message").innerHTML =
            `<p style="color: red;">Произошла ошибка. Пожалуйста, попробуйте позже.</p>`;
          document.getElementById("response-message").style.display = "block";
        });
    });
};
