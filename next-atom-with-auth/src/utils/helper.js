/**
 * Add fallback to placeholder image
 * @param {Element} e - HTML Element target
 */
export const handleErrorImage = e => {
  e.target.onerror = null;
  e.target.src = "/static/images/placeholder.png";
};

export const convertNumberToPixel = size => {
  if (Number.isInteger(size)) return `${size}px`;

  return size;
};
