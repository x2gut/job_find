import { IconType } from "react-icons/lib";

interface ProfileInfoCardProps {
  name: string;
  value: number;
  color: string;
  icon: IconType;
  iconColor: string;
}

const ProfileInfoCard: React.FC<ProfileInfoCardProps> = ({
  name,
  value,
  color,
  icon: Icon,
  iconColor,
}) => {
  return (
    <div
      className={`p-6 rounded-md mt-6 flex justify-between items-center w-[312px]`}
      style={{
        backgroundColor: color,
      }}
    >
      <div className="">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        <p className="text-gray-900 text-sm">{name}</p>
      </div>
      <div className="p-4 bg-white rounded-lg">
        {<Icon size={32} color={iconColor} />}
      </div>
    </div>
  );
};

export default ProfileInfoCard;
