import {
  ACCESS_TOKEN_EXP,
  ACCESS_TOKEN_KEY,
  ACCESS_USER_KEY,
} from "constants/cookies";
import { encodeCookie, decodeCookie } from "./user";

interface SavedToken {
  access_token: string;
  access_token_exp: number;
  access_user: Record<string, any>;
}

const saveToken = ({
  access_token_exp: tokenExp,
  access_token: token,
  access_user: userAccess,
}: SavedToken) => {
  const accessToken = encodeCookie(token);
  const accessUser = encodeCookie(userAccess);

  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  localStorage.setItem(ACCESS_TOKEN_EXP, String(tokenExp));
  localStorage.setItem(ACCESS_USER_KEY, accessUser);
};

/**
 * Get the only access token from local storage
 */
const getToken = () => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);

  return token ? decodeCookie(token) : null;
};

const getUserAccess = () => {
  const userAccess = localStorage.getItem(ACCESS_USER_KEY);

  return userAccess ? decodeCookie(userAccess) : null;
};

const destroyToken = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(ACCESS_TOKEN_EXP);
  localStorage.removeItem(ACCESS_USER_KEY);
};

export { saveToken, getToken, getUserAccess, destroyToken };
