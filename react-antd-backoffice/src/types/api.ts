import { AxiosResponse } from "axios";

export interface APIResponse<T = any> {
  data?: T;
  error?: string;
  message?: string;
}

export type APIPromiseResponse<T = any> = Promise<
  AxiosResponse<APIResponse<T>>
>;

export interface GetListParams {
  page?: number;
  limit?: number;
  query?: string;
}

export interface UserType {
  username: string;
  name: string;
  email: string;
  phone: string;
  user_province: any;
  user_city: any;
  user_district: any;
  user_subdistrict: any;
  address: string;
  latitude: number;
  longitude: number;
  website: string;
  instagram: string;
  facebook: string;
  twitter: string;
  tiktok: string;
  youtube: string;
  linkedin: string;
  verification_status: "approved" | "pending" | "denied";
  verification_message: string;
  map_name: string;
  map_address: string;
}
