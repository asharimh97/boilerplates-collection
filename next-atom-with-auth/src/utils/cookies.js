const Cookie = require("js-cookie");

// Change APP_NAME to desired value
export const APP_COOKIE = "APP_NAME";
const COOKIE_EXPIRATION = 7; // in days

export const setCookie = (name, val) => {
  Cookie.set(name, val, {
    expires: COOKIE_EXPIRATION
  });
};

export const getCookie = name => {
  return Cookie.get(name) || null;
};

export const removeCookie = name => {
  Cookie.remove(name);
};
