import { capitalizeFirstLetter } from "./general";

export const getMediaName = (unparsedUrl: string) => {
  let url = unparsedUrl.substr(1 + unparsedUrl.lastIndexOf("/"));
  const splittedUrl = url.split("-");
  url = splittedUrl.length > 3 ? url.split("-").slice(3).join(" ") : url;

  return capitalizeFirstLetter(url);
};
