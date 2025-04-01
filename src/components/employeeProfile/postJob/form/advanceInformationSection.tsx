import { Control, Controller, FieldErrors } from "react-hook-form";
import DatePicker from "react-datepicker";
import Select from "react-select";
import Input from "../../../ui/input";
import { JobAddData } from "../../../../types/types";

interface AdvanceInformationSectionProps {
  control: Control<JobAddData, any>;
  errors: FieldErrors<JobAddData>;
}

const AdvanceInformationSection: React.FC<AdvanceInformationSectionProps> = ({
  control,
  errors,
}) => {
  const educationOptions = [
    { value: "all", label: "All" },
    { value: "high school", label: "High School" },
    { value: "intermediate", label: "Intermediate" },
    { value: "graduation", label: "Graduation" },
    { value: "master", label: "Master Degree" },
    { value: "bachelor", label: "Bachelor Degree" },
  ];

  const experienceOptions = [
    { value: "0", label: "Freshers" },
    { value: "1-2", label: "1-2 years" },
    { value: "2-4", label: "2-4 years" },
    { value: "4-6", label: "4-6 years" },
    { value: "6-8", label: "6-8 years" },
    { value: "8-10", label: "8-10 years" },
    { value: "10+", label: "10+ years" },
  ];

  const jobTypeOptions = [
    { value: "fullTime", label: "Full Time" },
    { value: "partTime", label: "Part Time" },
    { value: "intership", label: "Intership" },
    { value: "remote", label: "Remote" },
    { value: "temporary", label: "Temporary" },
    { value: "contract", label: "Contract Base" },
  ];

  const vacanciesOptions = [
    { value: "1", label: "1 vacancy" },
    { value: "2", label: "2 vacancies" },
    { value: "multiple", label: "Multiple" },
  ];

  const jobLevelOptions = [
    { value: "junior", label: "Junior" },
    { value: "mid", label: "Mid" },
    { value: "senior", label: "Senior" },
  ];

  return (
    <div className="mt-8">
      <h4 className="body-large-500 mb-[18px]">Advance Information</h4>
      <div className="flex flex-col gap-[18px]">
        <div className="flex gap-[18px]">
          {/* Education */}
          <div className="w-full flex flex-col gap-2">
            <label className="body-small-400">Education</label>
            <Controller
              name="education"
              control={control}
              rules={{ required: "Please select the required education" }}
              render={({ field }) => (
                <Select
                  {...field}
                  //@ts-ignore
                  options={educationOptions}
                  classNames={{
                    control: () => "h-[42px]",
                    indicatorSeparator: () => "hidden",
                  }}
                />
              )}
            />
            {errors.education && (
              <p className="text-red-500 text-sm">{errors.education.message}</p>
            )}
          </div>

          {/* Experience */}
          <div className="w-full flex flex-col gap-2">
            <label className="body-small-400">Experience</label>
            <Controller
              name="experience"
              control={control}
              rules={{ required: "Please select the required experience" }}
              render={({ field }) => (
                <Select
                  {...field}
                  //@ts-ignore
                  options={experienceOptions}
                  classNames={{
                    control: () => "h-[42px]",
                    indicatorSeparator: () => "hidden",
                  }}
                />
              )}
            />
            {errors.experience && (
              <p className="text-red-500 text-sm">
                {errors.experience.message}
              </p>
            )}
          </div>

          {/* Job Type */}
          <div className="w-full flex flex-col gap-2">
            <label className="body-small-400">Job Type</label>
            <Controller
              name="jobType"
              control={control}
              rules={{ required: "Please select a job type" }}
              render={({ field }) => (
                <Select
                  {...field}
                  //@ts-ignore

                  options={jobTypeOptions}
                  classNames={{
                    control: () => "h-[42px]",
                    indicatorSeparator: () => "hidden",
                  }}
                />
              )}
            />
            {errors.jobType && (
              <p className="text-red-500 text-sm">{errors.jobType.message}</p>
            )}
          </div>
        </div>

        <div className="flex gap-[18px]">
          {/* Vacancies */}
          <div className="w-full flex flex-col gap-2">
            <label className="body-small-400">Vacancies</label>
            <Controller
              name="vacancies"
              control={control}
              rules={{ required: "Please select the number of vacancies" }}
              render={({ field }) => (
                <Select
                  {...field}
                  //@ts-ignore
                  options={vacanciesOptions}
                  classNames={{
                    control: () => "h-[42px]",
                    indicatorSeparator: () => "hidden",
                  }}
                />
              )}
            />
            {errors.vacancies && (
              <p className="text-red-500 text-sm">{errors.vacancies.message}</p>
            )}
          </div>

          {/* Expiration Date */}
          <div className="w-full flex flex-col gap-2">
            <label className="body-small-400">Expiration Date</label>
            <Controller
              name="expirationDate"
              control={control}
              rules={{ required: "Please select a expiration date" }}
              render={({ field }) => (
                //@ts-ignore
                <DatePicker
                  {...field}
                  placeholderText="DD/MM/YYYY"
                  onChange={(date: Date | null) => field.onChange(date)}
                  dateFormat="dd/MM/yyyy"
                  selected={field.value}
                  customInput={
                    <Input
                      className="border"
                      value={
                        field.value ? field.value.toLocaleDateString() : ""
                      }
                    />
                  }
                />
              )}
            />
            {errors.expirationDate && (
              <p className="text-red-500 text-sm">
                {errors.expirationDate.message}
              </p>
            )}
          </div>

          {/* Job Level */}
          <div className="w-full flex flex-col gap-2">
            <label className="body-small-400">Job Level</label>
            <Controller
              name="jobLevel"
              control={control}
              rules={{ required: "Please select a job level" }}
              render={({ field }) => (
                <Select
                  {...field}
                  //@ts-ignore
                  options={jobLevelOptions}
                  classNames={{
                    control: () => "h-[42px]",
                    indicatorSeparator: () => "hidden",
                  }}
                />
              )}
            />
            {errors.jobLevel && (
              <p className="text-red-500 text-sm">{errors.jobLevel.message}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceInformationSection;
