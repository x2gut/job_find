import clsx from "clsx";
import { useState } from "react";

interface NotificationOption {
  label: string;
  value: string;
}

const NotificationSettings: React.FC = () => {
  const options: NotificationOption[] = [
    { label: "Notify me when employers shortlisted me", value: "shortlisted" },
    { label: "Notify me when my applied jobs expire", value: "expired" },
    { label: "Notify me when I have up to 5 job alerts", value: "job_alerts" },
    {
      label: "Notify me when employers saved my profile",
      value: "profile_saved",
    },
    { label: "Notify me when employers rejected me", value: "rejected" },
  ];

  const [checked, setChecked] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    setChecked((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  return (
    <div className="w-full p-4 rounded-lg">
      <h5 className="font-medium text-gray-900 text-lg">Notifications</h5>
      <div className="flex max-h-[140px] flex-col gap-4 flex-wrap items-start mt-4">
        {options.map((option) => (
          <label
            key={option.value}
            className={clsx(
              "flex items-center gap-2 cursor-pointer body-small-400",
              !checked.includes(option.value)
                ? "text-gray-500"
                : "text-gray-900"
            )}
          >
            <input
              type="checkbox"
              value={option.value}
              checked={checked.includes(option.value)}
              onChange={handleCheckboxChange}
              className="accent-blue-600 scale-125"
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default NotificationSettings;
