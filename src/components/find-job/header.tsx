import { SlMagnifier } from "react-icons/sl";
import Input from "../ui/input";
import InputBlock from "../ui/inputBlock";
import { CiLocationOn } from "react-icons/ci";
import Select from "react-select";
import { selectCustomStyles } from "../../constants/react-select-styles";
import { FiLayers } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import Button from "../ui/button";
import Container from "../common/Container";
import { Dispatch, SetStateAction } from "react";
import { JobFilters } from "../../types/types";
import useDebounce from "../../hooks/common/useDebounce";

interface FindJobHeaderProps {
  setFilters: Dispatch<SetStateAction<JobFilters>>;
}

const FindJobHeader: React.FC<FindJobHeaderProps> = ({ setFilters }) => {
  const debouncedSetFilters = useDebounce(setFilters, 500);

  const categoryOptions = [
    {
      value: "design",
      label: "Design",
    },
    {
      value: "programming",
      label: "Programming",
    },
  ];

  return (
    <div className="bg-gray-50">
      <Container>
        <div className="pt-6 pb-8">
          <span className="text-gray-900 text-lg font-medium block mb-6">
            Find Job
          </span>
          <InputBlock className="py-3">
            <Input
              icon={<SlMagnifier size={24} color="#0A65CC" />}
              placeholder="Job tittle, Keyword..."
              onChange={(event) =>
                debouncedSetFilters((prev) => ({
                  ...prev,
                  keyword: event.target.value,
                }))
              }
            />
            <span className="w-[2px] h-8 bg-[#E4E5E8] block"></span>
            <Input
              icon={<CiLocationOn color="#0066FF" size={28} />}
              placeholder="Location"
              onChange={(event) =>
                debouncedSetFilters((prev) => ({
                  ...prev,
                  location: event.target.value,
                }))
              }
            />
            <span className="w-[2px] h-8 bg-[#E4E5E8] block"></span>
            <FiLayers size={24} color="#0A65CC" className="ml-4" />
            <Select
              classNames={{
                control: () => "w-[300px]",
              }}
              options={categoryOptions}
              styles={selectCustomStyles}
              placeholder="Select Category..."
            />
            <span className="w-[2px] h-8 bg-[#E4E5E8] block ml-4"></span>
            <button className="flex items-center gap-4 ml-3 text-[#767E94] w-56">
              Advance Filters <RiArrowDropDownLine color="" size={36} />
            </button>
            <Button primary={true} children="Find Job" />
          </InputBlock>
        </div>
      </Container>
    </div>
  );
};

export default FindJobHeader;
