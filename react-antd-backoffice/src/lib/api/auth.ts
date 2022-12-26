// TODO: Implement auth with the right API routes

import request from "configs/request";
import { APIPromiseResponse } from "types/api";

const AUTH_URL = "/auth";

const login = (email: string, password: string) => {
  return request.post(`${AUTH_URL}/login`, { email, password });
};

const forgotPassword = (email: string): APIPromiseResponse => {
  return request.post(`${AUTH_URL}/forgot-password`, { email });
};

interface ResetPasswordParams {
  token: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const resetPassword = (params: ResetPasswordParams): APIPromiseResponse => {
  return request.post(`${AUTH_URL}/reset-password`, {
    ...params,
    confirm_password: params.confirmPassword,
  });
};

export default {
  forgotPassword,
  resetPassword,
  login,
};
