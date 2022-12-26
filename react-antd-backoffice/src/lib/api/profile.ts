import request from "configs/request";
import { APIPromiseResponse } from "types/api";

const PROFILE_URL = "/profile";

const getProfile = (): APIPromiseResponse => {
  return request.get(`${PROFILE_URL}`);
};

interface UpdatePasswordParams {
  password: string;
  newPassword: string;
  confirmPassword: string;
}
const updatePassword = ({
  password,
  newPassword,
  confirmPassword,
}: UpdatePasswordParams): APIPromiseResponse => {
  return request.post(`${PROFILE_URL}/reset-password`, {
    password,
    new_password: newPassword,
    confirm_password: confirmPassword,
  });
};

export default {
  getProfile,
  updatePassword,
};
