import { RiLink } from "react-icons/ri";
import Input from "../../../../ui/input";
import Select from "react-select";
import {
  educationOptions,
  experienceOptions,
} from "../../../../../constants/react-select-options";

const CandidateInfo = ({
  handleChangeCandidateInfo,
  candidateInfo,
}: {
  handleChangeCandidateInfo: (valueToUpdate: string, newValue: string) => void;
  candidateInfo: { [key: string]: string };
}) => {
  return (
    <div className="w-full grid grid-cols-2 gap-[18px]">
      <div className="w-full flex flex-col gap-2">
        <label className="body-small-400" htmlFor="fullName">
          Full name
        </label>
        <Input
          id="fullName"
          className="border"
          value={candidateInfo.full_name || ""}
          onChange={(event) =>
            handleChangeCandidateInfo("full_name", event.target.value)
          }
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="body-small-400" htmlFor="titleHeadline">
          Title/headline
        </label>
        <Input
          id="titleHeadline"
          className="border"
          value={candidateInfo.title_headline || ""}
          onChange={(event) =>
            handleChangeCandidateInfo("title_headline", event.target.value)
          }
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="body-small-400" htmlFor="experience">
          Experience
        </label>
        <Select
          id="experience"
          onChange={(event) =>
            handleChangeCandidateInfo("experience", event?.label || "")
          }
          options={experienceOptions}
          value={experienceOptions.find(option => option.label === candidateInfo.experience) || null}
          classNames={{
            control: () => "h-12",
            indicatorSeparator: () => "hidden",
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="body-small-400" htmlFor="educations">
          Educations
        </label>
        <Select
          id="educations"
          onChange={(event) =>
            handleChangeCandidateInfo("educations", event?.label || "")
          }
          options={educationOptions}
          value={educationOptions.find(option => option.label === candidateInfo.educations) || null}
          classNames={{
            control: () => "h-12",
            indicatorSeparator: () => "hidden",
          }}
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label className="body-small-400" htmlFor="personalWebsite">
          Personal Website
        </label>
        <Input
          id="personalWebsite"
          placeholder="Website url..."
          className="border"
          icon={<RiLink size={24} color="#0A65CC" />}
          value={candidateInfo.personal_website || ""}
          onChange={(event) =>
            handleChangeCandidateInfo("personal_website", event.target.value)
          }
        />
      </div>
    </div>
  );
};

export default CandidateInfo;