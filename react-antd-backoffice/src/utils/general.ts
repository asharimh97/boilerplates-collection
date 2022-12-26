import { colors } from "constants/variants";
import { theme } from "configs/stitches.config";

export const capitalizeFirstLetter = (string: string) => {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export const capitalizeWords = (str: string) => {
  if (!str) return str;
  return str
    .split(" ")
    .map((word) => capitalizeFirstLetter(word))
    .join(" ");
};

export const getColor = (color: string = "primary") => {
  // @ts-ignore
  const col = theme.colors[color] || theme.colors["primary"];

  return col.value;
};

export const getRandomColor = () => {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

export const convertToFormData = (
  data: Record<string, any>,
  staticKey?: string,
) => {
  let convertedData = new FormData();

  // eslint-disable-next-line guard-for-in
  for (let key in data) {
    // If given static key, thus the data is array of the key
    const dataKey = staticKey ? staticKey : key;

    convertedData.append(dataKey, data[key]);
  }

  return convertedData;
};
