import { IconType } from "react-icons/lib";

interface CandidateProfileModalDataCardItemProps {
  icon: IconType;
  title: string;
  value: string;
}

const CandidateProfileModalDataCardItem: React.FC<
  CandidateProfileModalDataCardItemProps
> = ({ icon: Icon, title, value }) => {
  return (
    <div className="flex flex-col gap-1">
      <Icon color="#0A65CC" size={24} className="mb-2" />
      <p className="body-small-400">{title}</p>
      <p className="text-sm text-gray-900 font-medium">{value}</p>
    </div>
  );
};

export default CandidateProfileModalDataCardItem;
