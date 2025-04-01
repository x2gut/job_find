import { useQuery } from "@tanstack/react-query";
import Modal from "../../ui/modal/modal";
import CandidateProfileModalTextBlock from "./candidateProfileModalBiography";
import CandidateProfileModalDataCard from "./candidateProfileModalDataCard";
import CandidateProfileModalHeader from "./candidateProfileModalHeader";
import { getCandidateById } from "../../../api/candidate";
import CandidateProfileSkeletonHeader from "./skeletons/modalHeaderSkeleton";
import CandidateProfileTextBlockSkeleton from "./skeletons/modalTextBlockSkeleton";
import SkeletonCandidateProfileModalDataCard from "./skeletons/modalDataCardSkeleton";
import { Candidate } from "../../../types/types";
import CandidateProfileModalCvDownloader from "./candidateProfileModalCvDownloader";
import CandidateProfileModalContactInfo from "./candidateProfileModalContactInfo";
import CandidateProfileModalSocial from "./candidateProfileModalSocial";

interface CandidateProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  candidateId: number;
  coverLetter?: string;
  profilePicture: string;
}

const CandidateProfileModal: React.FC<CandidateProfileModalProps> = ({
  isOpen,
  onClose,
  candidateId,
  coverLetter,
  profilePicture,
}) => {
  const { data, isLoading } = useQuery<Candidate>({
    queryKey: ["candidateModalData", candidateId],
    queryFn: () => getCandidateById(candidateId),
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-12 w-full max-w-[1024px] cursor-auto max-h-[80vh] overflow-y-scroll">
        {isLoading ? (
          <CandidateProfileSkeletonHeader />
        ) : (
          <CandidateProfileModalHeader
            fullName={data?.full_name || "Not Provided"}
            titleHeadline={data?.title_headline || "Not Provided"}
            candidateId={candidateId}
            profilePicture={profilePicture}
          />
        )}
        <div className="flex gap-10 mt-10 flex-wrap">
          {/* Left column */}
          <div className="flex flex-col gap-8 min-w-80 max-w-[536px] flex-1">
            {isLoading ? (
              <CandidateProfileTextBlockSkeleton />
            ) : (
              <div className="border-b pb-8">
                <CandidateProfileModalTextBlock
                  label="Biography"
                  text={data?.biography || "Not Provided"}
                />
              </div>
            )}
            {isLoading ? (
              <CandidateProfileTextBlockSkeleton />
            ) : (
              coverLetter && (
                <CandidateProfileModalTextBlock
                  label="Cover letter"
                  text={coverLetter}
                />
              )
            )}

            {/* Bottom */}
            <div className="mt-auto border-t pt-8">
              <CandidateProfileModalSocial />
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6 min-w-80 max-w-[536px]">
            <div>
              {isLoading ? (
                <SkeletonCandidateProfileModalDataCard />
              ) : (
                <CandidateProfileModalDataCard />
              )}
            </div>
            <CandidateProfileModalContactInfo
              website={data?.personal_website || "Not Provided"}
              location={data?.location || "Not Provided"}
              phone={data?.phone_number || "Not Provided"}
              email={data?.email || "Not Provided"}
            />
            <CandidateProfileModalCvDownloader
              candidateId={candidateId}
              fullName={data?.full_name || "Not Provided"}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CandidateProfileModal;
