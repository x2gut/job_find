import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { BsArrowRight, BsThreeDotsVertical } from "react-icons/bs";
import Avatar from "../../common/avatar";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCandidateProfilePictureById } from "../../../api/candidate";
import { useState } from "react";
import { deleteCandidate, saveCandidate } from "../../../api/company";
import { SavedCandidate } from "../../../types/types";
import { toast } from "react-toastify";
import clsx from "clsx";
import CandidateProfileModal from "../../modal/candidateProfileModal/candidateProfileModal";
import SavedCandidateDropdown from "./savedCandidateDropdown";

type SavedCandidateItemProps = {
  candidate: SavedCandidate;
  candidateIds: number[];
};

const SavedCandidateItem: React.FC<SavedCandidateItemProps> = ({
  candidate,
  candidateIds,
}) => {
  const [ids, setIds] = useState<number[]>(candidateIds);
  const isSaved = ids.includes(candidate.candidate_id);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  // animations
  const [isBtnHovered, setIsBtnHovered] = useState(false);
  const [isBookmarkClicked, setIsBookmarkClicked] = useState(false);

  const { data: profilePicData } = useQuery({
    queryKey: ["candidateProfilePicture", candidate.candidate_id],
    queryFn: () => getCandidateProfilePictureById(candidate.candidate_id),
  });

  const removeMutation = useMutation({
    mutationFn: deleteCandidate,
    onSuccess: () =>
      toast.success(
        `${candidate.candidate.full_name} removed from saved candidates`
      ),
  });
  const saveMutation = useMutation({
    mutationFn: saveCandidate,
    onSuccess: () =>
      toast.success(
        `${candidate.candidate.full_name} saved back to your candidates`
      ),
  });

  const handleUpdateCandidate = () => {
    setIsBookmarkClicked(true);

    if (isSaved) {
      setIds(ids.filter((value) => value !== candidate.candidate_id));
      removeMutation.mutate(candidate.candidate_id);
    } else {
      setIds([...ids, candidate.candidate_id]);
      saveMutation.mutate(candidate.candidate_id);
    }

    setTimeout(() => setIsBookmarkClicked(false), 300);
  };

  return (
    <div className="border border-transparent hover:border-blue-500 rounded-md w-full flex justify-between p-5 transition-all">
      <div className="flex gap-3">
        <Avatar profilePicture={profilePicData} />
        <div>
          <p className="font-medium text-gray-900 text-base">
            {candidate.candidate.full_name}
          </p>
          <p className="body-small-400 text-gray-600">
            {candidate.candidate.title_headline}
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <button
          className="p-3 rounded-md hover:bg-gray-50 duration-300"
          onClick={handleUpdateCandidate}
        >
          <div
            className={clsx(
              "transition-all",
              isBookmarkClicked &&
                "transform scale-110 rotate-12 transition-all"
            )}
          >
            {isSaved ? (
              <FaBookmark size={24} color="#0A65CC" />
            ) : (
              <FaRegBookmark size={24} color="#0A65CC" />
            )}
          </div>
        </button>
        <button
          onClick={() => setIsModalVisible(true)}
          onMouseEnter={() => setIsBtnHovered(true)}
          onMouseLeave={() => setIsBtnHovered(false)}
          className={clsx(
            "px-6 py-3 duration-200 flex gap-3 items-center bg-blue-50 text-blue-500 font-semibold whitespace-nowrap",
            isBtnHovered && "text-white bg-blue-500"
          )}
        >
          View Profile
          <BsArrowRight
            className={clsx("duration-200", isBtnHovered && "translate-x-1")}
            size={24}
            color={isBtnHovered ? "white" : "#0A65CC"}
          />
        </button>
        <div className="relative">
          <button
            onClick={() => setIsDropdownVisible(true)}
            className="p-3 rounded-md hover:bg-gray-50 hover:text-gray-900 duration-200"
          >
            <BsThreeDotsVertical size={24} color="#767F8C" />
          </button>
          <SavedCandidateDropdown
            email={candidate.candidate.email}
            isVisible={isDropdownVisible}
            onClose={() => setIsDropdownVisible(false)}
            candidateId={candidate.candidate_id}
          />
        </div>
      </div>
      <CandidateProfileModal
        profilePicture={profilePicData || ""}
        isOpen={isModalVisible}
        candidateId={candidate.candidate_id}
        onClose={() => setIsModalVisible(false)}
      />
    </div>
  );
};

export default SavedCandidateItem;
