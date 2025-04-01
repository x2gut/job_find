import { MdOutlineFileDownload } from "react-icons/md";
import { PiReadCvLogoThin } from "react-icons/pi";
import { getCandidateCv } from "../../../api/candidate";

interface CandidateProfileModalCvDownloaderProps {
  fullName: string;
  candidateId: number;
}

const CandidateProfileModalCvDownloader: React.FC<
  CandidateProfileModalCvDownloaderProps
> = ({ fullName, candidateId }) => {
  return (
    <div className="border rounded-md p-6">
      <h5 className="text-gray-900 font-medium">Download My Resume</h5>
      <div className="flex justify-between mt-4">
        <div className="flex gap-3">
          <PiReadCvLogoThin size={48} color="#E4E5E8" />
          <div className="flex flex-col gap-1">
            <p className="text-xs text-gray-500">{fullName}</p>
            <p className="text-sm text-gray-900 font-medium">PDF</p>
          </div>
        </div>
        <button
          onClick={() => getCandidateCv(candidateId)}
          className="p-3 bg-blue-50 rounded-md hover:brightness-90 duration-200"
        >
          <MdOutlineFileDownload color="#0A65CC" size={24} />
        </button>
      </div>
    </div>
  );
};

export default CandidateProfileModalCvDownloader;
