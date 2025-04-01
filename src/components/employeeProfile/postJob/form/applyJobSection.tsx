import { useState } from "react";
import clsx from "clsx";
import { UseFormRegister } from "react-hook-form";
import { JobAddData } from "../../../../types/types";

interface ApplyJobSectionProps {
  register: UseFormRegister<JobAddData>;
}

const ApplyJobSection: React.FC<ApplyJobSectionProps> = ({ register }) => {
  const [selectedOption, setSelectedOption] = useState<string>("On JobPilot");
  const [tooltip, setTooltip] = useState<string | null>(null);

  const options = [
    {
      label: "On JobPilot",
      description:
        "Candidate will apply job using jobpilot & all applications will show on your dashboard.",
      disabled: false,
    },
    {
      label: "External Platform",
      description:
        "Candidate applies for a job on your website, and all applications will be on your own website.",
      disabled: true,
    },
    {
      label: "On Your Email",
      description:
        "Candidate applies for a job via your email address, and all applications will be sent to your email.",
      disabled: true,
    },
  ];

  return (
    <div className="relative bg-gray-100 py-7 px-8 mt-8 rounded-lg">
      <h4 className="body-large-500 mb-4">Apply Job on:</h4>
      <div className="flex gap-4">
        {options.map((option) => (
          <div
            key={option.label}
            className="relative"
            onMouseEnter={() => option.disabled && setTooltip(option.label)}
            onMouseLeave={() => setTooltip(null)}
          >
            <label
              className={clsx(
                "flex items-center gap-3 p-4 rounded-lg transition w-[280px] border",
                option.disabled
                  ? "opacity-50 cursor-not-allowed border-gray-300 bg-gray-100"
                  : "cursor-pointer",
                selectedOption === option.label
                  ? "border-blue-500 bg-white shadow-sm"
                  : "border-gray-300 bg-gray-100 hover:bg-gray-200"
              )}
              onClick={() =>
                !option.disabled && setSelectedOption(option.label)
              }
            >
              <input
                {...register("jobApplyOn")}
                type="radio"
                name="applyJob"
                className="hidden"
                value={option.label}
                checked={selectedOption === option.label}
                readOnly
              />
              <div
                className={clsx(
                  "h-6 w-6 flex items-center justify-center flex-shrink-0 border-2 rounded-full",
                  selectedOption === option.label
                    ? "border-blue-500"
                    : "border-gray-400"
                )}
              >
                {/* Outer ring */}
                {selectedOption === option.label && (
                  <div className="h-2.5 w-2.5 bg-blue-500 rounded-full"></div>
                )}
              </div>
              <div>
                <h6 className="font-medium text-gray-900">{option.label}</h6>
                <p className="text-xs text-gray-600">{option.description}</p>
              </div>
            </label>

            {/* Tooltip */}
            {tooltip === option.label && option.disabled && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-gray-900 text-white text-xs rounded shadow-lg">
                Under development
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplyJobSection;
