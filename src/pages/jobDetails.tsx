import Container from "../components/common/Container";
import JobDetailsHeader from "../components/jobDetails/header";
import JobTitle from "../components/jobDetails/jobTitle";
import ContactInfo from "../components/jobDetails/contactInfo";
import ActionButtons from "../components/jobDetails/actionBtns";
import JobOverview from "../components/jobDetails/jobOverview";
import JobDescription from "../components/jobDetails/jobDescription";
import CompanyCard from "../components/jobDetails/companyCard";
import MoreJobs from "../components/jobDetails/moreJobs";
import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getJobById } from "../api/job";
import { getCompanyById } from "../api/company";
import calculateDaysRemaining from "../helpers/calculateDaysRemain";
import { useGetCompanyImage } from "../hooks/common/useGetCompanyMedia";
import { AxiosError } from "axios";
import Spinner from "../components/common/spinner";
import JobNotFound from "../components/jobDetails/jobNotFound";
import { useState } from "react";
import ApplyJobModal from "../components/modal/applyJobModal";

const JobDetails = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { jobId } = useParams();
  const location = useLocation();
  const jobFromState = location.state?.job;

  const jobQuery = useQuery({
    queryKey: ["jobById", jobId],
    queryFn: () => getJobById(Number(jobId)),
    enabled: !jobFromState,
  });

  const jobData = jobFromState || jobQuery.data || {};

  const companyQuery = useQuery({
    queryKey: ["companyData", jobData?.company_id],
    queryFn: () => getCompanyById(jobData.company_id),
    enabled: !!jobData?.company_id,
  });

  const profilePicture = useGetCompanyImage(jobData.company_id);

  const companyData = companyQuery.data || {};

  if (!jobId) {
    return <div className="text-red-500">Error: Job ID is not provided</div>;
  }

  if (jobQuery.isLoading || companyQuery.isLoading) {
    return (
      <div className="py-80">
        <Spinner />
      </div>
    );
  }

  if (jobQuery.isError) {
    const error = jobQuery.error as AxiosError;
    const status = error.response?.status;

    return (
      <div className="text-red-500">
        {status === 404 && <JobNotFound />}
        {status === 500 && "Server error, try again later"}
        {!status && "Undefined error occured"}
      </div>
    );
  }

  return (
    <div>
      <JobDetailsHeader />
      <Container>
        <div className="flex justify-between items-center py-8 mb-8">
          <div className="flex">
            <img
              src={profilePicture.data || "/imgs/BaseCompanyImage.png"}
              alt="Company Logo"
              className="w-24 h-24 rounded-full"
            />
            <div className="ml-6 flex flex-col gap-3">
              <JobTitle
                title={jobData.title}
                isFeatured={false}
                jobType={jobData.job_type}
              />
              <ContactInfo
                website={companyData.website || "Not Provided"}
                phone={companyData.phone_number || "Not Provided"}
                email={companyData.email || "Not Provided"}
              />
            </div>
          </div>
          <ActionButtons
            setIsModalOpen={setIsModalVisible}
            expireIn={calculateDaysRemaining(jobData.expiration_date)}
          />
        </div>
        <div className="flex gap-[50px] pb-7 border-b">
          <div>
            <JobDescription
              description={jobData.description}
              responsibilities={jobData.responsibilities}
            />
          </div>
          <div className="relative flex flex-col gap-6">
            <JobOverview
              location={jobData.location}
              minSalary={jobData.min_salary}
              maxSalary={jobData.max_salary}
              education={jobData.education}
              experience={jobData.experience}
              jobExpire={jobData.expiration_date}
              jobPosted={jobData.created_at}
              jobType={jobData.job_type}
            />
            <CompanyCard
              logoImg={profilePicture.data || "/imgs/BaseCompanyImage.png"}
              foundedIn={companyData.year_of_establishment || "Not Provided"}
              companyName={companyData.company_name}
              website={companyData.website || ""}
              phone={companyData.phone_number || "Not Provided"}
              email={companyData.email || "Not Provided"}
              orgType={companyData.organization_type || "Not Provided"}
              employers={companyData.team_size || "Not Provided"}
              industryType={companyData.industry_type || "Not Provided"}
            />
          </div>
        </div>
        <MoreJobs companyId={jobData.company_id} currentJobId={Number(jobId)} />
      </Container>
      <ApplyJobModal
        jobId={Number(jobId)}
        jobTitle={jobData.title}
        isOpen={isModalVisible}
        setIsOpen={setIsModalVisible}
      />
    </div>
  );
};

export default JobDetails;
