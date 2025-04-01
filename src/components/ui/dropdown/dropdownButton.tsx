import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface DropwdownButtonProps {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const DropdownButton: React.FC<DropwdownButtonProps> = ({
  to,
  children,
  className,
  onClick,
}) => {
  return (
    <li>
      <Link
        onClick={onClick}
        className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${className} min-w-28`}
        to={to}
      >
        {children}
      </Link>
    </li>
  );
};

export default DropdownButton;
