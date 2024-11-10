export const years = () => {
  const year = new Date().getFullYear();
  document.querySelector(".js-year").textContent = year;
};

export const slowScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      targetElement.scrollIntoView({
        behavior: "smooth", // Плавный скроллинг
        block: "start", // Прокрутить к верхней части элемента
      });
    });
  });
};

export const checkVisibility = (stepLines) => {
  const windowHeight = window.innerHeight; // Высота окна
  const scrollY = window.scrollY; // Количество прокрученных пикселей

  stepLines.forEach((stepLine) => {
    const stepLineTop = stepLine.getBoundingClientRect().top + scrollY;

    if (stepLineTop < scrollY + windowHeight - 250) {
      stepLine.classList.add("js-visible");
    }
  });
};

export const checkWindowTop = (block) => {
  if (window.scrollY > 180) {
    block.classList.add("js-active");
  } else {
    block.classList.remove("js-active");
  }
};
