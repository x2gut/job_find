export enum AccountTypeEnum {
  Candidate = "candidate",
  Employee = "employee",
}

export type ActiveStep =
  | "Company"
  | "Founding"
  | "Socials"
  | "Settings"
  | "Personal"
  | "Profile";

export type AccountType = {
  accType: AccountTypeEnum;
};

export type Candidate = {
  id: number;
  email: string | null;
  cv_name: string | null;
  full_name: string | null;
  title_headline: string | null;
  experience: string | null;
  educations: string | null;
  personal_website: string | null;
  nationality: string | null;
  date_of_birth: string | null;
  gender: string | null;
  marital_status: string | null;
  phone_number: string | null;
  location: string | null;
  biography: string | null;
  facebook: string | null;
  twitter: string | null;
  youtube: string | null;
  telegram: string | null;
};

export type RegisterData = {
  username: string;
  password: string;
  email: string;
  full_name?: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type PasswordChangeData = {
  user_id: number;
  current_password: string;
  new_password: string;
};

export type FoundingInfo = {
  company_id: number;
  organization_type: string | null;
  industry_type: string | null;
  team_size: string | null;
  year_of_establishment: string | null;
  website: string | null;
  company_vision: string | null;
};

export type SocialLinks =
  | {
      company_id: number;
      candidate_id?: never;
      facebook: string | null;
      twitter: string | null;
      telegram: string | null;
      youtube: string | null;
    }
  | {
      candidate_id: number;
      company_id?: never;
      facebook: string | null;
      twitter: string | null;
      telegram: string | null;
      youtube: string | null;
    };

export type ContactInfo =
  | {
      company_id: number;
      candidate_id?: never;
      location: string | null;
      phone_number: string | null;
      email: string | null;
    }
  | {
      company_id?: never;
      candidate_id: number;
      location: string | null;
      phone_number: string | null;
      email: string | null;
    };

export type JobAddData = {
  employerId: number;
  companyId: number;
  title: string;
  jobRole: { value: string; label: string };
  tags: string[];
  minSalery: string;
  maxSalery: string;
  saleryType: { value: string; label: string };
  education: { value: string; label: string };
  experience: { value: string; label: string };
  jobType: { value: string; label: string };
  vacancies: { value: string; label: string };
  expirationDate: Date;
  jobLevel: { value: string; label: string };
  jobApplyOn: string;
  description: string;
  responsibilities: string;
};

export type JobData = {
  id: number;
  company_id: number;
  title: string;
  company_name: string;
  is_promoted: boolean;
  job_role: string;
  min_salary: number;
  max_salary: number;
  salary_type: string;
  education: string;
  experience: string;
  job_type: string;
  expiration_date: string;
  job_level: string;
  description: string;
  responsibilities: string;
  location: string;
  created_at: string;
};

export type CompanyData = {
  id: number;
  company_name: string;
  about?: string;
  location?: string;
  phone_number?: string;
  email?: string;
  organization_type?: string;
  industry_type?: string;
  team_size?: string;
  year_of_establishment?: string;
  website?: string;
  company_vision?: string;
  facebook?: string;
  twitter?: string;
  youtube?: string;
  telegram?: string;
  user_id: number;
};

export type JobFilters = {
  location?: string;
  experience?: string;
  salary_range?: string;
  job_type?: string;
  education?: string;
  job_level?: string;
  keyword?: string;
  limit?: number;
  offset?: number;
};

export type ApplyJobData = {
  userId: number;
  cvName: string;
  jobId: number;
  coverLetter: string;
};

export type JobDetails = {
  title: string;
  min_salary: number;
  max_salary: number;
  job_type: string;
  company_id: number;
  location: string;
};

export type CandidateDetails = {
  full_name: string;
  title_headline: string;
  experience: string;
  education: string;
};

export type AppliedJob<T> = {
  id: number;
  job_id: number;
  candidate_id: number;
  applied_at: Date;
  status?: string;
  cover_letter: string;
  details: T;
};

export type AppliedJobList<T> = {
  applications: AppliedJob<T>[];
};

export type ChangePasswordFormData = {
  newPassword: string;
  newPasswordRepeat: string;
  currentPassword: string;
};

export type CandidateUpdateProfileData = {
  user_id: number;
  candidate_id: number;
  nationality: string | null;
  date_of_birth: string | null;
  gender: string | null;
  marital_status: string | null;
  educations: string | null;
  experience: string | null;
  biography: string | null;
};

export type SavedCandidate = {
  id: number;
  created_at: string;
  updated_at: string | null;
  candidate_id: number;
  company_id: number;
  candidate: {
    id: number;
    email: string;
    full_name: string;
    title_headline: string;
  };
};

export type SavedCandidateList = {
  candidates_data: SavedCandidate[];
  candidates_ids: number[];
};
