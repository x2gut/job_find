import { useState } from "react";
import Input from "../../../../ui/input";
import LocationInput from "../../../../ui/locationInput/locationInput";
import { BsBriefcase } from "react-icons/bs";
import Button from "../../../../ui/button";
import useLocationInput from "../../../../../hooks/common/useLocationInput";

const JobAlertsSettings = () => {
  const { cities, debouncedRequest } = useLocationInput();
  const [locationValue, setLocationValue] = useState("");

  return (
    <div className="mt-[18px]">
      <h5 className="mb-[18px] font-medium text-gray-900 text-lg">
        Job Alerts
      </h5>
      <div className="flex gap-[18px] mb-8">
        <div className="w-full">
          <p className="mb-2 body-small-400">Role</p>
          <Input
            icon={<BsBriefcase size={24} color="#0A65CC" />}
            className="border"
            placeholder="Your job role"
          />
        </div>
        <div className="w-full">
          <p className="body-small-400">Location</p>
          <LocationInput
            onSelectCity={setLocationValue}
            value={locationValue}
            setValue={setLocationValue}
            cities={cities}
            debouncedCitiesRequest={debouncedRequest}
          />
        </div>
      </div>
      <Button primary={true}>Save Changes</Button>
    </div>
  );
};

export default JobAlertsSettings;
