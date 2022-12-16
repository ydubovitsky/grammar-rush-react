// Прячем/Показываем полосу прокрутки
const toggleOverflowVisibleHandler = (): void => {
  const bodyEl = document.querySelector("body");
  bodyEl!.style.overflow =
    bodyEl!.style.overflow === "hidden" ? "visible" : "hidden";
};

export default toggleOverflowVisibleHandler;
