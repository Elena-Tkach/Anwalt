export const onShowMenu = (contain, btnClose) => {
  contain.classList.add("js-active");

  setTimeout(() => {
    btnClose.focus();
  }, 100);
};
export const onHideMenu = (contain) => {
  if (document.body.classList.contains("no-scroll")) {
    document.body.classList.remove("no-scroll");
  }

  contain.classList.remove("js-active");
};
