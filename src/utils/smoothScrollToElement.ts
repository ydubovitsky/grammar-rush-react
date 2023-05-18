// Плавный скролл на елемент помеченный якорем!
export const smoothScrollToElement = (elementId: string) => {
  const anchor : HTMLElement | null = document.getElementById(elementId);
  if (anchor != undefined) {
    anchor.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
