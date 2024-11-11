import { onShowMenu, onHideMenu } from "./menu.js";
import { checkWindowTop, checkVisibility } from "./utils.js";
export const popup = document.querySelector(".js-popup");

export const handleClick = () => {
  const menuContain = document.querySelector(".menu-container");
  const modalContant = document.querySelector(".js-modal");
  const btnCloseEl = document.querySelector(".js-close-btn");
  const blocks = document.querySelectorAll(".js-services");
  const stepLines = document.querySelectorAll(".js-step");
  const aside = document.querySelector(".js-aside");

  document.body.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("js-open-menu")) {
      onShowMenu(menuContain, btnCloseEl);
    }

    if (target.classList.contains("js-close-btn")) {
      onHideMenu(menuContain);
      if (popup) {
        onHideMenu(popup);
      }
      if (modalContant) {
        onHideMenu(modalContant);
      }
    }

    if (target.classList.contains("js-active")) {
      onHideMenu(menuContain);

      if (popup) {
        onHideMenu(popup);
      }
      if (modalContant) {
        onHideMenu(modalContant);
      }
    }

    if (target.classList.contains("menu__link")) {
      onHideMenu(menuContain);
    }

    if (target.classList.contains("js-btn-services")) {
      const buttons = document.querySelectorAll(".js-btn-services");
      const clickedButton = event.target;

      const index = Array.from(buttons).indexOf(clickedButton);

      buttons.forEach((btn) => btn.classList.remove("js-active"));
      blocks.forEach((block) => block.classList.remove("js-active"));

      clickedButton.classList.add("js-active");
      blocks[index].classList.add("js-active");
    }
  });

  window.addEventListener("scroll", () => {
    checkVisibility(stepLines);
    checkWindowTop(aside);
  });
};
