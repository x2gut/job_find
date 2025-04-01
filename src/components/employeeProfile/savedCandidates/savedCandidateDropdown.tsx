import { GoMail } from "react-icons/go";
import Dropdown from "../../ui/dropdown/dropdown";
import { BsDownload } from "react-icons/bs";
import sendEmail from "../../../helpers/sendEmail";
import { getCandidateCv } from "../../../api/candidate";
import { toast } from "react-toastify";

interface SavedCandidateDropdownProps {
  onClose: () => void;
  isVisible: boolean;
  candidateId?: number;
  email: string;
}

const SavedCandidateDropdown: React.FC<SavedCandidateDropdownProps> = ({
  onClose,
  isVisible,
  email,
  candidateId,
}) => {
  if (!isVisible) return;

  return (
    <Dropdown className="-translate-x-3/4" onClose={onClose}>
      <div className="flex flex-col items-start">
        <button
          onClick={() => sendEmail(email)}
          className="w-full hover:bg-blue-50 duration-200 flex gap-2 items-center p-2 body-small-400"
        >
          <GoMail size={20} />
          Send Email
        </button>
        <button
          onClick={() => {
            if (!candidateId) {
              toast.error(
                "Can't find candidate ID, please try to reload the page."
              );
              return;
            }
            getCandidateCv(candidateId);
          }}
          className="w-full hover:bg-blue-50 duration-200 flex gap-2 items-cente p-2 body-small-400"
        >
          <BsDownload size={20} />
          Download Cv
        </button>
      </div>
    </Dropdown>
  );
};

export default SavedCandidateDropdown;
