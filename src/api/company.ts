import { ContactInfo, FoundingInfo, SocialLinks } from "../types/types";
import axiosClient from "./axios";

export const getCompanyByEmployerId = async (employerId: number) => {
  const response = await axiosClient.get(`/company/employee/${employerId}`);
  return response.data;
};

export const getCompanyImage = async (companyId: number) => {
  const response = await axiosClient.get(`/company/image/${companyId}`, {
    responseType: "blob",
  });
  const blobImage = URL.createObjectURL(response.data);
  return blobImage;
};

export const getBannerImage = async (companyId: number) => {
  const response = await axiosClient.get(`/company/banner/${companyId}`, {
    responseType: "blob",
  });
  const blobImage = URL.createObjectURL(response.data);
  return blobImage;
};

export const updateCompanyInfo = async (formData: FormData) => {
  const response = await axiosClient.post("/company/company-info", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const updateFoundingInfo = async (foundingInfo: FoundingInfo) => {
  const response = await axiosClient.post(
    "/company/founding-info",
    foundingInfo
  );
  return response.data;
};

export const updateSocialLinks = async (socialLinks: SocialLinks) => {
  const response = await axiosClient.post("/company/social-links", socialLinks);
  return response.data;
};

export const updateContactInfo = async (contactInfo: ContactInfo) => {
  const response = await axiosClient.post("/company/contact-info", contactInfo);
  return response.data;
};

export const getCompanyById = async (companyId: number) => {
  const response = await axiosClient.get(`/company/${companyId}`);
  return response.data;
};

export const saveCandidate = async (candidateId: number) => {
  const response = await axiosClient.post("/company/save-candidate", {
    candidate_id: candidateId,
  });
  return response.data;
};

export const deleteCandidate = async (candidateId: number) => {
  const response = await axiosClient.delete("/company/delete-candidate", {
    data: { candidate_id: candidateId },
  });
  return response.data;
};

export const getSavedCandidates = async (companyId: number) => {
  const response = await axiosClient.get(`/company/saved/${companyId}`);
  return response.data;
};
