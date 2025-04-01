import { IconType } from "react-icons/lib";

interface JobOverviewCardProps {
  icon: IconType;
  name: string;
  value: string;
}

const JobOverviewCard: React.FC<JobOverviewCardProps> = ({
  icon: Icon,
  name,
  value,
}) => {
  return (
    <div className="w-[140px]">
      <Icon className="mb-4" size={32} color="#0A65CC"/>
      <p className="text-gray-500 text-xs">{name}</p>
      <p className="text-sm text-gray-900">{value}</p>
    </div>
  );
};

export default JobOverviewCard;
