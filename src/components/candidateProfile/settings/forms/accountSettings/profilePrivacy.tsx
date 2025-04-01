import { useState } from "react";
import InputBlock from "../../../../ui/inputBlock";
import Toggle from "../../../../ui/toggle";

const ProfilePrivacy = () => {
  const [isResumeChecked, setIsResumeChecked] = useState<boolean>(false);
  const [isProfileChecked, setIsProfileChecked] = useState<boolean>(false);
  return (
    <div className="flex gap-6 w-full">
      <div className="w-full">
      <h5 className="text-gray-900 font-medium text-base mb-4">Profile Privacy</h5>
        <InputBlock className="h-12 pl-4">
          <Toggle
            onClick={() => {
              setIsProfileChecked((prev) => !prev);
              console.log("Clicked");
            }}
            label={isProfileChecked ? "YES" : "NO"}
            isChecked={isProfileChecked}
          />
          <span className="ml-3 w-[2px] h-8 bg-gray-100"></span>
          <p className="ml-3 body-small-400">{`Your profile is ${
            isProfileChecked ? "public" : "private"
          } now`}</p>
        </InputBlock>
      </div>
      <div className="w-full">
        <h5 className="text-gray-900 font-medium text-base mb-4">Resume Privacy</h5>
        <InputBlock className="h-12 pl-4">
          <Toggle
            onClick={() => setIsResumeChecked((prev) => !prev)}
            label={isResumeChecked ? "YES" : "NO"}
            isChecked={isResumeChecked}
          />
          <span className="ml-3 w-[2px] h-8 bg-gray-100"></span>
          <p className="ml-3 body-small-400">{`Your resume is ${
            isResumeChecked ? "public" : "private"
          } now`}</p>{" "}
        </InputBlock>
      </div>
    </div>
  );
};

export default ProfilePrivacy;
