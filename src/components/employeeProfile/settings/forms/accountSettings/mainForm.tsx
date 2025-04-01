import { useState } from "react";
import Input from "../../../../ui/input";
import { MdOutlineEmail } from "react-icons/md";
import Button from "../../../../ui/button";
import useAccountSettingsForm from "../../../../../hooks/forms/employer/useAccountSettingsForm";
import LocationInput from "../../../../ui/locationInput/locationInput";
import useCompanyInfoStore from "../../../../../stores/companyInfo";
import useLocationInput from "../../../../../hooks/common/useLocationInput";

const MainForm = () => {
  const [locationValue, setLocationValue] = useState<string>("");
  const [phoneValue, setPhoneValue] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");
  const { setContactInfo, handleSubmit, onSubmit } = useAccountSettingsForm();
  const { cities, debouncedRequest } = useLocationInput();
  const { location } = useCompanyInfoStore();

  const handleSelectCity = (city: string) => {
    setLocationValue(city);
    setContactInfo((prev) => ({ ...prev, location: city }));
  };

  const handleSelectPhone = (phone: string) => {
    setPhoneValue(phone);
    setContactInfo((prev) => ({ ...prev, phoneNumber: phone }));
  };

  const handleSelectEmail = (email: string) => {
    setEmailValue(email);
    setContactInfo((prev) => ({ ...prev, email }));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-[18px] pb-8 border-b"
    >
      <div className="flex gap-2 items-center w-full">
        <LocationInput
          className={{
            label: `${!location && "text-red-500"}`,
          }}
          value={locationValue}
          setValue={setLocationValue}
          onSelectCity={handleSelectCity}
          cities={cities}
          debouncedCitiesRequest={debouncedRequest}
        />
      </div>
      <div>
        <label className="body-small-400" htmlFor="">
          Phone Number
        </label>
        <Input
          value={phoneValue}
          onChange={(event) => handleSelectPhone(event.target.value)}
          placeholder="+1234567890..."
          className="border"
        />
      </div>
      <div>
        <label className="body-small-400" htmlFor="">
          Email
        </label>
        <Input
          type="email"
          value={emailValue}
          onChange={(event) => handleSelectEmail(event.target.value)}
          placeholder="Email address"
          className="border"
          icon={<MdOutlineEmail color="#0A65CC" size={24} />}
        />
      </div>
      <Button type="submit" className="mt-[15px] max-w-[175px]" primary={true}>
        Save Changes
      </Button>
    </form>
  );
};

export default MainForm;
