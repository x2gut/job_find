import { MdOutlineCake } from "react-icons/md";
import CandidateProfileModalDataCardItem from "./candidateProfileModalDataCardItem";
import { FaRegMap } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";

const CandidateProfileModalDataCard = () => {
  return (
    <div className="border rounded-md p-6">
      <div className="flex gap-10">
        <div className="flex flex-col gap-6">
          <CandidateProfileModalDataCardItem
            icon={MdOutlineCake}
            title="DATE OF BIRTH"
            value="14 June, 2021"
          />
          <CandidateProfileModalDataCardItem
            icon={CiHeart }
            title="MARITAL STATUS"
            value="14 June, 2021"
          />
          <CandidateProfileModalDataCardItem
            icon={FiLayers}
            title="EXPERIENCE"
            value="14 June, 2021"
          />
        </div>
        <div className="flex flex-col gap-6">
          <CandidateProfileModalDataCardItem
            icon={FaRegMap}
            title="NATIONALITY"
            value="14 June, 2021"
          />
          <CandidateProfileModalDataCardItem
            icon={FaRegCircleUser}
            title="DATE OF BIRTH"
            value="14 June, 2021"
          />
          <CandidateProfileModalDataCardItem
            icon={HiOutlineAcademicCap }
            title="EDUCATION"
            value="14 June, 2021"
          />
        </div>
      </div>
    </div>
  );
};

export default CandidateProfileModalDataCard;
