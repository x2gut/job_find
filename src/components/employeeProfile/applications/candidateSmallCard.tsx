import { MdOutlineFileDownload } from "react-icons/md";
import Avatar from "../../common/avatar";
import { AppliedJob, CandidateDetails } from "../../../types/types";
import convertDate from "../../../helpers/convertDate";
import { useQuery } from "@tanstack/react-query";
import { getCandidateProfilePictureById } from "../../../api/candidate";
import CandidateProfileModal from "../../modal/candidateProfileModal/candidateProfileModal";
import { useState } from "react";

const CandidateSmallCard = ({
  data,
}: {
  data: AppliedJob<CandidateDetails>;
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { data: profilePicData } = useQuery({
    queryKey: ["candidateProfilePicture", data.candidate_id],
    queryFn: async () => {
      if (!data.candidate_id) return;
      return getCandidateProfilePictureById(data.candidate_id);
    },
    enabled: !!data.candidate_id,
  });

  return (
    <div
      onClick={() => setIsModalOpen(!isModalOpen)}
      className="h-full w-full max-h-[218px] max-w-[272px] bg-white border border-gray-200 rounded-lg hover:border-blue-500 transition-all duration-300 cursor-pointer"
    >
      <div className="p-4">
        <div className="flex gap-3 border-b border-gray-200 pb-[18px]">
          <Avatar profilePicture={profilePicData} />
          <div>
            <p className="font-medium text-sm text-gray-900">
              {data.details.full_name || "Not provided"}
            </p>
            <p className="body-small-400">
              {data.details.title_headline || "Not provided"}
            </p>
          </div>
        </div>
        <div className="pt-[18px] mb-4">
          <ul className="body-small-400 flex flex-col gap-[5px] list-disc pl-4 truncate">
            <li>Experience: {data.details.experience || "Not provided"}</li>
            <li>Education: {data.details.education || "Not provided"}</li>
            <li>Applied: {convertDate(data.applied_at) || "Not provided"}</li>
          </ul>
        </div>
        <button className="flex items-center text-blue-500 gap-[6px]">
          <MdOutlineFileDownload size={20} />
          Download Cv
        </button>
      </div>
      <CandidateProfileModal
        candidateId={data.candidate_id}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(!isModalOpen)}
        coverLetter={data.cover_letter}
        profilePicture={profilePicData || ""}
      />
    </div>
  );
};

export default CandidateSmallCard;
