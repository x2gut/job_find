import { useMutation, useQueryClient } from "@tanstack/react-query";
import Avatar from "../../common/avatar";
import useCompanyInfoStore from "../../../stores/companyInfo";
import { deleteCandidate, saveCandidate } from "../../../api/company";
import { toast } from "react-toastify";
import { IoMailOutline } from "react-icons/io5";
import Button from "../../ui/button";
import { FaStar } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

interface CandidateProfileModalHeaderProps {
  candidateId: number;
  fullName: string;
  titleHeadline: string;
  profilePicture: string;
}

const CandidateProfileModalHeader: React.FC<
  CandidateProfileModalHeaderProps
> = ({ candidateId, fullName, titleHeadline, profilePicture }) => {
  const queryClient = useQueryClient();
  const { savedCandidates } = useCompanyInfoStore();

  const isSaved = savedCandidates.candidates_ids.includes(candidateId);

  const saveCandidateMutation = useMutation({
    mutationFn: saveCandidate,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["savedCandidates"] });
      toast.success("Candidate saved successfully");
    },
    onError: () => {
      toast.error("Failed to save candidate");
    },
  });

  const deleteCandidateMutation = useMutation({
    mutationFn: deleteCandidate,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["savedCandidates"] });
      toast.success("Candidate removed successfully");
    },
    onError: () => {
      toast.error("Failed to remove candidate");
    },
  });

  const handleToggleSave = () => {
    if (isSaved) {
      deleteCandidateMutation.mutate(candidateId);
    } else {
      saveCandidateMutation.mutate(candidateId);
    }
  };

  return (
    <div className="flex flex-wrap justify-between relative">
      <div className="flex gap-6 items-center mr-4">
        <Avatar profilePicture={profilePicture} size="5rem" />
        <div className="flex flex-col gap-[6px]">
          <h4 className="text-2xl text-gray-900 font-medium">{fullName}</h4>
          <p className="text-base text-gray-500">{titleHeadline}</p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <button
          className={`p-3 rounded-md transition-all duration-300 flex items-center justify-center ${
            isSaved
              ? "bg-blue-100 text-blue-700"
              : "bg-gray-50 hover:bg-blue-100 hover:text-blue-700"
          }`}
          onClick={handleToggleSave}
          title={isSaved ? "Remove from saved" : "Save candidate"}
          aria-label={isSaved ? "Remove from saved" : "Save candidate"}
        >
          <FaStar color={isSaved ? "#0A65CC" : "#BDBDBD"} size={24} />
        </button>
        <Button
          primary={false}
          className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-80"
        >
          <IoMailOutline size={24} color="#0A65CC" />
          Send Mail
        </Button>
        <Button
          primary={true}
          className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-80"
        >
          <GoArrowRight size={24} />
          Hire Candidate
        </Button>
      </div>

      {/* Loading indicators */}
      {(saveCandidateMutation.isPending ||
        deleteCandidateMutation.isPending) && (
        <div className="absolute top-0 right-0 p-2">
          <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default CandidateProfileModalHeader;
