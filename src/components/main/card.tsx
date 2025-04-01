import { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  label: string;
  total: number;
  iconBg: string;
}

const Card: React.FC<CardProps> = ({ icon, iconBg, total, label }) => {
  return (
    <div className="bg-white w-full max-w-[312px] h-28 rounded-md shadow-md">
      <div className="p-5 flex gap-5 items-center">
        <div className="p-4 rounded-md" style={{ backgroundColor: iconBg }}>
          {icon}
        </div>

        <div className="flex flex-col gap-[6px]">
          <span className="text-2xl font-medium text-[#18191C]">{total}</span>
          <span className="text-base text-[#767F8C]">{label}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
