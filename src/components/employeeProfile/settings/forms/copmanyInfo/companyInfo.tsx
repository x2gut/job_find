import clsx from "clsx";
import useCompanyInfoForm from "../../../../../hooks/forms/employer/useCompanyInfoForm";
import useCompanyInfoStore from "../../../../../stores/companyInfo";
import Button from "../../../../ui/button";
import Input from "../../../../ui/input";
import TextEditor from "../../../../ui/textEditor";

const CompanyInfo = () => {
  const {
    handleProfilePictureChange,
    handleProfileBannerChange,
    profilePictureSize,
    profileBannerSize,
    profilePicturePreview,
    profileBannerPreview,
    handleProfilePictureRemove,
    handleProfileBannerRemove,
    onSubmit,
    handleChangeName,
  } = useCompanyInfoForm();

  const { companyName, setAboutUs, aboutUs } = useCompanyInfoStore();

  return (
    <div className="">
      <h4 className="body-large-500 mt-3">Logo & Banner Image</h4>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit();
        }}
      >
        <div className="flex gap-6 border-b pb-4">
          <div>
            <label className="body-small-400" htmlFor="profilePicture">
              Upload Logo
            </label>
            <input
              id="profilePicture"
              className="hidden"
              type="file"
              onChange={handleProfilePictureChange}
            />
            <label htmlFor="profilePicture">
              <div
                className="w-60 h-60 bg-gray-500 rounded-md mt-2 bg-cover bg-center"
                style={{
                  backgroundImage: profilePicturePreview
                    ? `url(${profilePicturePreview})`
                    : "none",
                }}
              ></div>
            </label>
            <div className="flex gap-2 mt-2">
              <p className="body-small-400">{profilePictureSize} MB</p>
              <button
                onClick={handleProfilePictureRemove}
                className="body-small-400 text-gray-900"
              >
                Remove
              </button>
              <button className="body-small-500">Replace</button>
            </div>
          </div>
          <div>
            <label className="body-small-400" htmlFor="profileBanner">
              Banner Image
            </label>
            <input
              id="profileBanner"
              className="hidden"
              type="file"
              onChange={handleProfileBannerChange}
            />
            <label htmlFor="profileBanner">
              <div
                className="w-[720px] h-60 bg-gray-500 rounded-md mt-2 bg-cover bg-center"
                style={{
                  backgroundImage: profileBannerPreview
                    ? `url(${profileBannerPreview})`
                    : "none",
                }}
              ></div>
            </label>
            <div className="flex gap-2 mt-2">
              <p className="body-small-400">{profileBannerSize} MB</p>
              <button
                onClick={handleProfileBannerRemove}
                className="body-small-400 text-gray-900"
              >
                Remove
              </button>
              <button className="body-small-500">Replace</button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2 mt-2 mb-8">
            {/* COMPANY NAME FIELD */}
            <label
              className={clsx(
                "flex gap-2 items-center body-small-400",
                !companyName && "text-red-500"
              )}
              htmlFor="companyName"
            >
              Company name
            </label>
            <Input className="border" onChange={handleChangeName} />
            <label
              className={clsx("body-small-400", !aboutUs && "text-red-500")}
              htmlFor=""
            >
              About us
            </label>
            <TextEditor
              setValueOnUpdate={setAboutUs}
              placeholder="Write down about your company here. Let the candidate know who we are..."
            />
          </div>
          <Button type="submit" primary={true} children="Save changes" />
        </div>
      </form>
    </div>
  );
};

export default CompanyInfo;
