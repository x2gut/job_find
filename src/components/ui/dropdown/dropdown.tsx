import { ReactNode, useEffect, useRef } from "react";

interface DropdownProps {
  children: ReactNode;
  header?: ReactNode;
  className?: string;
  onClose: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ header, children, className, onClose }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={dropdownRef}
      className={`absolute border translate-y-[10px] z-10 cursor-default bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-gray-700 dark:divide-gray-600 ${className} shadow-[10px_10px_15px_0px_rgba(0,0,0,0.1)]`}
    >
      {header}
      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
        {children}
      </ul>
    </div>
  );
};

export default Dropdown;
