export const getIntersectionScroll = (
  element: HTMLElement,
  offset: number = 0,
  docHeight?: number,
  maxScroll?: number
) => {
  let dHeight = docHeight;
  let mScroll = maxScroll;

  if (dHeight === undefined || mScroll === undefined) {
    dHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    mScroll = dHeight - winHeight; // Total scrollable area
  }

  const bounds = element.getBoundingClientRect();

  // Posición absoluta del elemento desde el top del documento
  const absoluteTop = bounds.top + window.scrollY + offset;

  // Regla de tres para sincronizar con la línea de 0 a 100%
  // ScrollNeeded = (ElementTop / DocHeight) * MaxScroll
  // Note: The logic provided by the user: return absoluteTop * (maxScroll / docHeight);
  // This calculates the scroll position where the thread (which grows relative to document height)
  // touches the absoluteTop of the element.
  return absoluteTop * (mScroll / dHeight);
};
