import { onShowMenu} from "./menu.js";
import {services} from "./consts.js";

const createItem = (item) => {
  const templateItem = document.querySelector(".js-template-item");
  const cloneItem = templateItem.content.cloneNode(true);
  const itemCardList = cloneItem.querySelector(".js-modal-card-item");
  itemCardList.innerHTML = item;
  return cloneItem;
};

const teplateList = (title, listItem, description, description2) => {
  const teplate = document.querySelector(".js-teplate");
  const cloneItem = teplate.content.cloneNode(true);
  const itemTitle = cloneItem.querySelector(".js-title-card-modal");
  const cardModalList = cloneItem.querySelector(".js-modal-card-list");
  const cardModalDescription = cloneItem.querySelector(
    ".js-modal-card-description"
  );
  const cardModalDescription2 = cloneItem.querySelector(".js-modal-card-text");
  listItem.forEach((item) => {
    const itemCard = createItem(item);
    cardModalList.append(itemCard);
  });

  itemTitle.innerHTML = title;
  cardModalDescription.innerHTML = description;
  if (description2) {
    cardModalDescription2.innerHTML = description2;
  }

  return cloneItem;
};

export const updateModalContant = (modalId) => {
  const modal = document.querySelector(".js-modal");
  const modalFirstTitle = document.querySelector(".js-first-title");

  const modalTitle = modal.querySelector(".js-modal-title");
  const modalLIst = modal.querySelector(".js-list-modal");

  const content = services.find((service) => service.id === modalId);
  modalLIst.innerHTML = "";
  for (let listItem of content.cardlist) {
    modalLIst.appendChild(
      teplateList(
        listItem.title,
        listItem.listCard,
        listItem.description,
        listItem.description2
      )
    );
  }

  modalFirstTitle.textContent = content.firstTitle;
  modalTitle.textContent = content.title;

  onShowMenu(modal, modal.querySelector(".js-close-btn"));
};

export const modalCardHandler = () => {
  document
    .querySelector(".services__wrap")
    .addEventListener("click", (event) => {
      const modalId = event.target.getAttribute("data-modal");
      updateModalContant(modalId);
    });
};
