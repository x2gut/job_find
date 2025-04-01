import { ApplyJobData } from "../types/types";
import axiosClient from "./axios";

export const applyJob = async (applyData: ApplyJobData) => {
  const response = await axiosClient.post("job_application/apply", {
    user_id: applyData.userId,
    cv_name: applyData.cvName,
    job_id: applyData.jobId,
    cover_letter: applyData.coverLetter,
  });
  return response.data;
};

export const getJobApplicationByUserId = async (userId: number) => {
  const response = await axiosClient.get(`job_application/${userId}`);
  return response.data;
};

export const getJobApplicationByJobId = async (jobId: number) => {
  const response = await axiosClient.get(`/job_application/job/${jobId}`);
  return response.data;
};

export const deleteJobApplicationById = async ({
  jobId,
  applicationId,
}: {
  jobId: number;
  applicationId: number;
}) => {
  const response = await axiosClient.delete("/job_application", {
    data: { job_id: jobId, application_id: applicationId },
  });
  return response.data;
};
