import Select from "react-select";
import Input from "../../../../ui/input";
import DatePicker from "react-datepicker";
import TextEditor from "../../../../ui/textEditor";
import { useState } from "react";
import { FiCalendar } from "react-icons/fi";
import Button from "../../../../ui/button";
import {
  genderOptions,
  maritalStatusOptions,
} from "../../../../../constants/react-select-options";
import useUserDataStore from "../../../../../stores/userDataStore";
import useCandidateStore from "../../../../../stores/candidateStore";
import { CandidateUpdateProfileData } from "../../../../../types/types";
import convertDate from "../../../../../helpers/convertDate";
import { useMutation } from "@tanstack/react-query";
import { updateCandidateProfile } from "../../../../../api/candidate";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const Profile = () => {
  const { id } = useUserDataStore();
  const { id: candidateId } = useCandidateStore();
  const [profileData, setProfileData] = useState<CandidateUpdateProfileData>({
    nationality: null,
    experience: null,
    marital_status: null,
    date_of_birth: null,
    user_id: id ?? 0,
    candidate_id: candidateId ?? 0,
    gender: null,
    biography: null,
    educations: null,
  });

  const mutation = useMutation({
    mutationFn: updateCandidateProfile,
    onSuccess: () => toast.success("Profile updated successfully"),
    onError: (error: AxiosError) => {
      const errorDetails =
        (error.response?.data as { detail?: string }).detail ||
        error.message ||
        "Unexpected Error";
      toast.error(errorDetails);
    },
  });

  const onSelectChange = (
    value: string | undefined,
    valueToChange: keyof CandidateUpdateProfileData
  ) => {
    if (!value) return;
    setProfileData((prev) => ({ ...prev, [valueToChange]: value }));
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        mutation.mutate(profileData);
      }}
      className=""
    >
      <div className="flex gap-[18px] mb-[18px]">
        <div className="w-full flex flex-col gap-[18px]">
          <div className="flex flex-col gap-2">
            <label className="body-small-400" htmlFor="nationality">
              Nationality
            </label>
            <Input
              id="nationality"
              onChange={(event) =>
                onSelectChange(event.target.value, "nationality")
              }
              className="border"
            ></Input>
          </div>
          <div className="flex flex-col gap-2">
            <label className="body-small-400" htmlFor="gender">
              Gender
            </label>
            <Select
              id="gender"
              isSearchable={false}
              onChange={(event) => onSelectChange(event?.label, "gender")}
              options={genderOptions}
              classNames={{
                control: () => "h-12",
                indicatorSeparator: () => "hidden",
              }}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-[18px]">
          <div className="flex flex-col gap-2">
            <label className="body-small-400" htmlFor="date_of_birth">
              Date of Birth
            </label>
            <DatePicker
              id="date_of_birth"
              onChange={(date) => onSelectChange(String(date), "date_of_birth")}
              value={
                profileData.date_of_birth
                  ? convertDate(profileData.date_of_birth)
                  : ""
              }
              customInput={
                <Input
                  className="border"
                  icon={<FiCalendar size={22} />}
                  iconPosition="right"
                  value={""}
                />
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="body-small-400" htmlFor="marital_status">
              Marital Status
            </label>
            <Select
              id="marital_status"
              isSearchable={false}
              onChange={(option) =>
                onSelectChange(option?.label, "marital_status")
              }
              options={maritalStatusOptions}
              classNames={{
                control: () => "h-12",
                indicatorSeparator: () => "hidden",
              }}
            />
          </div>
        </div>
      </div>
      <div className="h-full min-h-60">
        <label className="body-small-400" htmlFor="biography">
          Biography
        </label>
        <TextEditor
          setValueOnUpdate={(value) => onSelectChange(value, "biography")}
        />
      </div>
      <Button type="submit" primary={true}>
        Save Changes
      </Button>
    </form>
  );
};

export default Profile;
