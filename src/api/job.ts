import { JobAddData, JobFilters } from "../types/types";
import axiosClient from "./axios";

export const addJob = async (jobData: JobAddData) => {
  const response = await axiosClient.post("/job", {
    company_id: jobData.companyId,
    employer_id: jobData.employerId,
    title: jobData.title,
    tags: jobData.tags,
    job_role: jobData.jobRole.label,
    min_salary: jobData.minSalery,
    max_salary: jobData.maxSalery,
    salary_type: jobData.saleryType.label,
    education: jobData.education.label,
    experience: jobData.experience.label,
    job_type: jobData.jobType.label,
    vacancies: jobData.vacancies.label,
    expiration_date: jobData.expirationDate,
    job_level: jobData.jobLevel.label,
    job_apply_on: jobData.jobApplyOn,
    description: jobData.description,
    responsibilities: jobData.responsibilities,
  });
  return response.data;
};

export const getAllJobs = async (relevantOnly: boolean = false) => {
  const response = await axiosClient.get("/job/all", {
    params: { relevant_only: relevantOnly },
  });
  return response.data;
};

export const getAllJobsByCompanyid = async (
  company_id: number,
  relevantOnly: boolean = false
) => {
  const response = await axiosClient.get(`/job/all/${company_id}`, {
    params: { relevant_only: relevantOnly },
  });
  return response.data;
};

export const getJobById = async (jobId: number) => {
  const response = await axiosClient.get(`/job/${jobId}`);
  return response.data;
};

export const getFilteredJobs = async (filters: JobFilters) => {
  const response = await axiosClient.get("/job/filtered", { params: filters });
  return response.data;
};

export const expireJob = async ({
  jobId,
  userId,
}: {
  jobId: number;
  userId: number;
}) => {
  const response = await axiosClient.put("/job/expire", {
    job_id: jobId,
    user_id: userId,
  });
  return response.data;
};
