import request from "configs/request";
import { APIPromiseResponse } from "types/api";

const LOCATION_URL = "/location";

const getLocation = (
  query?: string,
  type: string = "city",
): APIPromiseResponse => {
  return request.get(LOCATION_URL, {
    params: { query, type },
  });
};

export default {
  getLocation,
};
