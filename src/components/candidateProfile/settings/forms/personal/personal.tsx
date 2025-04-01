import usePersonalInfoForm from "../../../../../hooks/forms/candidate/usePersonalInfoForm";
import Button from "../../../../ui/button";
import CandidateInfo from "./candidateInfo";
import CvUploader from "./cvUploader";
import ProfilePictureUploader from "./profilePictureUploader";

const PersonalForm = () => {
  const {
    handleSubmit,
    image,
    setImage,
    handleChangeCandidateInfo,
    candidateInfo,
  } = usePersonalInfoForm();

  return (
    <div>
      <h5 className="body-large-500 mb-[18px]">Basic Information</h5>
      <form className="flex flex-col mb-8" onSubmit={handleSubmit}>
        <div className="flex gap-12">
          <div className="flex flex-col gap-1">
            <label className="body-small-400" htmlFor="profilePictureUploader">
              Profile Picture
            </label>
            <ProfilePictureUploader setImage={setImage} image={image} />
          </div>
          <div className="flex flex-col gap-8 w-full">
            <CandidateInfo
              candidateInfo={candidateInfo}
              handleChangeCandidateInfo={handleChangeCandidateInfo}
            />
            <Button type="submit" className="max-w-[175px]" primary={true}>
              Save changes
            </Button>
          </div>
        </div>
      </form>
      <CvUploader />
    </div>
  );
};

export default PersonalForm;
