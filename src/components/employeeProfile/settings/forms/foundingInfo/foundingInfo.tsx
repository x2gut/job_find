import Select from "react-select";
import {
  industryTypes,
  organizationTypes,
  teamSize,
} from "../../../../../constants/react-select-options";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendar } from "react-icons/ci";
import Input from "../../../../ui/input";
import { RiLinkM } from "react-icons/ri";
import Button from "../../../../ui/button";
import TextEditor from "../../../../ui/textEditor";
import useFoundingInfoForm from "../../../../../hooks/forms/employer/useFoundingInfoForm";

const FoundingInfo = () => {
  const {
    handleChangeOrgType,
    handleChangeTeamSize,
    handleChangeIndustryType,
    handleChangeEstablishment,
    setCompanyVision,
    handleChangeWebsite,
    establishment,
    handleSubmit,
  } = useFoundingInfoForm();

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
        className="flex flex-col gap-[18px]"
        action=""
      >
        <div className="flex w-full justify-between gap-[18px]">
          <div className="w-full flex flex-col gap-2">
            <label className="body-small-400" htmlFor="orgType">
              Organization Type
            </label>
            <Select
              onChange={handleChangeOrgType}
              options={organizationTypes}
              classNames={{
                indicatorSeparator: () => "hidden",
              }}
              id="orgType"
              className="w-full"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="body-small-400" htmlFor="IndType">
              Industry Types
            </label>
            <Select
              onChange={handleChangeIndustryType}
              options={industryTypes}
              classNames={{
                indicatorSeparator: () => "hidden",
              }}
              id="IndType"
              className="w-full"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="body-small-400" htmlFor="teamSize">
              Team Size
            </label>
            <Select
              onChange={handleChangeTeamSize}
              options={teamSize}
              classNames={{
                indicatorSeparator: () => "hidden",
              }}
              id="teamSize"
              className="w-full"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-[18px]">
            <div className="flex flex-col gap-2 max-w-[316px]">
              <label className="body-small-400" htmlFor="">
                Year of Establishment
              </label>
              <DatePicker
                onChange={handleChangeEstablishment}
                dateFormat="dd/MM/yyyy"
                className="border rounded-md h-12 px-[18px] max-w-[316px]"
                calendarClassName="bg-white border border-gray-300 rounded-lg shadow-lg p-2"
                customInput={
                  <div className="flex items-center justify-between">
                    <input
                      placeholder="dd/mm/yyyy"
                      className="outline-none"
                      value={establishment ? establishment : ""}
                    />
                    <CiCalendar size={22} />
                  </div>
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="body-small-400" htmlFor="">
                Company Website
              </label>
              <Input
                onChange={handleChangeWebsite}
                icon={<RiLinkM size={24} color="#0A65CC" />}
                placeholder="Website url..."
                className="border h-12"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label
            className={"flex gap-2 items-center body-small-400"}
            htmlFor=""
          >
            Company Vision
          </label>
          <TextEditor
            placeholder="Tell us what Vision of your company..."
            setValueOnUpdate={setCompanyVision}
          />
        </div>
        <Button
          type="submit"
          primary={true}
          children="Save changes"
          className="max-w-[175px]"
        />
      </form>
    </div>
  );
};

export default FoundingInfo;
