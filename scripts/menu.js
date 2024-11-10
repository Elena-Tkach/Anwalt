export const onShowMenu = (contain, btnClose) => {
  contain.classList.add("js-active");

  setTimeout(() => {
    btnClose.focus();
  }, 100);
};
export const onHideMenu = (contain) => {
  contain.classList.remove("js-active");
};
