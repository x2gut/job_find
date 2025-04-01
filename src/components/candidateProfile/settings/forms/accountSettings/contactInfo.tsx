import { useState } from "react";
import Input from "../../../../ui/input";
import LocationInput from "../../../../ui/locationInput/locationInput";
import { MdOutlineMailOutline } from "react-icons/md";
import Button from "../../../../ui/button";
import useCandidateStore from "../../../../../stores/candidateStore";
import { useMutation } from "@tanstack/react-query";
import { updateCandidateContactInfo } from "../../../../../api/candidate";
import { ContactInfo } from "../../../../../types/types";
import { toast } from "react-toastify";
import useLocationInput from "../../../../../hooks/common/useLocationInput";

const CandidateContactInfo = () => {
  const { id } = useCandidateStore();
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    candidate_id: id || 0,
    location: null,
    email: null,
    phone_number: null,
  });
  const { cities, debouncedRequest } = useLocationInput();

  const mutation = useMutation({
    mutationFn: updateCandidateContactInfo,
    onSuccess: () => {
      toast.success("Candidate contact info updated successfully!");
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });
  const onSelectCity = (city: string) => {
    setContactInfo((prev) => ({ ...prev, location: city }));
  };

  const onLocationInputChange = (value: string) => {
    setContactInfo((prev) => ({ ...prev, location: value }));
  };

  return (
    <div>
      <h5 className="font-medium text-lg text-gray-900 mb-[18px]">
        Contact Info
      </h5>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          mutation.mutate(contactInfo);
        }}
        className="pb-8 border-b"
        action=""
      >
        <div className="mb-[18px]">
          <label className="body-small-400" htmlFor="">
            Map Location
          </label>
          <LocationInput
            setValue={onLocationInputChange}
            value={contactInfo.location || ""}
            cities={cities}
            debouncedCitiesRequest={debouncedRequest}
            onSelectCity={onSelectCity}
          />
        </div>
        <div className="mb-[18px]">
          <label className="body-small-400" htmlFor="">
            Phone
          </label>
          <Input
            className="border"
            placeholder="Phone number..."
            value={contactInfo.phone_number || ""}
            onChange={(event) =>
              setContactInfo((prev) => ({
                ...prev,
                phone_number: event.target.value,
              }))
            }
          />
        </div>
        <div className="mb-8">
          <label className="body-small-400" htmlFor="">
            Email
          </label>
          <Input
            className="border"
            placeholder="Email adress..."
            icon={<MdOutlineMailOutline size={24} color="#0A65CC" />}
            value={contactInfo.email || ""}
            onChange={(event) =>
              setContactInfo((prev) => ({ ...prev, email: event.target.value }))
            }
          />
        </div>
        <Button primary={true}>Save Changes</Button>
      </form>
    </div>
  );
};

export default CandidateContactInfo;
