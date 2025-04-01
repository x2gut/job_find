import clsx from "clsx";

const Toggle = ({
  label,
  isChecked,
  onClick,
}: {
  label: string;
  isChecked: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="flex items-center">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={isChecked}
          readOnly
        />
        <div
          onClick={onClick}
          className={clsx(
            "relative w-11 h-6 rounded-full transition-all",
            "peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800",
            isChecked
              ? "bg-blue-600 dark:bg-blue-600"
              : "bg-gray-200 dark:bg-gray-700"
          )}
        >
          <div
            className={clsx(
              "absolute top-[2px] start-[2px] h-5 w-5 rounded-full border transition-all",
              "bg-white border-gray-300 dark:border-gray-600",
              isChecked
                ? "translate-x-full rtl:-translate-x-full border-white"
                : ""
            )}
          ></div>
        </div>
        <span
          className={clsx(
            "ms-3 text-sm font-medium",
            isChecked ? "text-blue-500" : "text-red-500"
          )}
        >
          {label}
        </span>
      </label>
    </div>
  );
};

export default Toggle;
