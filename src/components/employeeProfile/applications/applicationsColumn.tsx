import { BsThreeDots } from "react-icons/bs";
import CandidateSmallCard from "./candidateSmallCard";
import { AppliedJobList, CandidateDetails } from "../../../types/types";

const ApplicationsColumn = ({
  data,
}: {
  data: AppliedJobList<CandidateDetails>;
}) => {

  return (
    <div className="w-full max-h-[800px] max-w-[314px] bg-gray-100 py-4 px-5 rounded-lg border border-gray-200 overflow-hidden">
      <div className="flex justify-between mb-3">
        <h6 className="body-small-400 text-gray-900">All Applications</h6>
        <button>
          <BsThreeDots color="#767F8C" size={24} />
        </button>
      </div>

      <div className="flex flex-col gap-3 max-h-[600px] overflow-y-auto scrollbar-hide">
        {data.applications.map((item, index) => (
          <CandidateSmallCard
            key={index}
            data={item}
          />
        ))}
      </div>
    </div>
  );
};

export default ApplicationsColumn;
