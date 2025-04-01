import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

interface FooterLinkProps {
  to: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, label }) => {
  const [isArrowVisible, setIsArrowVisible] = useState<boolean>(false);

  return (
    <Link
      to={to}
      onMouseEnter={() => setIsArrowVisible(true)}
      onMouseLeave={() => setIsArrowVisible(false)}
      className="relative text-[#9199A3] text-base hover:text-white transition duration-300 flex items-center"
    >
      <FaArrowRight
        className={`absolute right-full mr-1 top-1/2 -translate-y-1/2 opacity-0 transition-transform duration-300 ${
          isArrowVisible ? "opacity-100 translate-x-2" : "translate-x-0"
        }`}
      />
      <span
        className={`transition-transform duration-300 ${
          isArrowVisible ? "translate-x-2" : "translate-x-0"
        }`}
      >
        {label}
      </span>
    </Link>
  );
};

export default FooterLink;
