import {
  CandidateUpdateProfileData,
  ContactInfo,
  SocialLinks,
} from "../types/types";
import axiosClient from "./axios";

export const getCandidateByUserId = async (userId: number) => {
  const response = await axiosClient.get(`/candidate/user_id/${userId}`);
  return response.data;
};

export const getCandidateById = async (candidateId: number) => {
  const response = await axiosClient.get(`/candidate/${candidateId}`);
  return response.data;
};

export const updateCandidatePersonalInfo = async (formData: FormData) => {
  const response = await axiosClient.post(
    "/candidate/personal_info",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

export const updateCandidateCv = async (formData: FormData) => {
  const response = await axiosClient.post("/candidate/personal_cv", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const getCandidateProfilePictureById = async (candidateId: number) => {
  const response = await axiosClient.get(
    `/candidate/profile_picture/${candidateId}`,
    {
      responseType: "blob",
    }
  );
  const blobImage = URL.createObjectURL(response.data);
  return blobImage;
};

export const updateCandidateProfile = async (
  data: CandidateUpdateProfileData
) => {
  const response = await axiosClient.post("/candidate/profile", data);
  return response.data;
};

export const updateCandidateSocialLinks = async (data: SocialLinks) => {
  const response = await axiosClient.post("/candidate/social-links", data);
  return response.data;
};

export const updateCandidateContactInfo = async (data: ContactInfo) => {
  const response = await axiosClient.post("/candidate/contact-info", data);
  return response.data;
};

export const getCandidateCv = async (candidateId: number) => {
  const response = await axiosClient.get(`/candidate/cv/${candidateId}`, {
    responseType: "blob",
  });

  const url = window.URL.createObjectURL(new Blob([response.data]));

  const contentDisposition = response.headers["content-disposition"];
  const filenameMatch = contentDisposition?.match(/filename="(.+)"/);
  const filename = filenameMatch
    ? filenameMatch[1]
    : `candidate_${candidateId}.pdf`;

  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();

  link.remove();
  URL.revokeObjectURL(url);
};
