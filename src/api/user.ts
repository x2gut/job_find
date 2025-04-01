import { LoginData, PasswordChangeData, RegisterData } from "../types/types";
import axiosClient from "./axios";

export const registerUser = async (data: RegisterData) => {
  const response = await axiosClient.post("/user/register", data);
  return response.data;
};

export const loginUser = async (data: LoginData) => {
  const response = await axiosClient.post("/user/login", data);
  return response.data;
};

export const getUserData = async () => {
  const response = await axiosClient.get("/user/me");
  return response.data;
};

export const logoutUser = async () => {
  const response = await axiosClient.get("/user/logout");
  return response;
};

export const changePassword = async (data: PasswordChangeData) => {
  const response = await axiosClient.post("/user/change-password", {
    user_id: data.user_id,
    new_password: data.new_password,
    current_password: data.current_password,
  });
  return response.data;
};

export const deleteUser = async (userId: number) => {
  const response = await axiosClient.delete(`/user/${userId}`);
  return response.data;
};

export const sendVerificationEmail = async (email: string) => {
  const response = await axiosClient.post("/user/send-verification-code", {
    email,
  });
  return response.data;
};

export const verifyUserEmail = async ({
  email,
  code,
}: {
  email: string;
  code: number;
}) => {
  const response = await axiosClient.post("/user/verify-email", {
    email: email,
    code: code,
  });
  return response.data;
};
