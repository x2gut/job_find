import { useRef, useState } from "react";
import clsx from "clsx";
import { FiUploadCloud } from "react-icons/fi";
import { toast } from "react-toastify";
import { MAX_PROFILE_IMAGE_SIZE } from "../../../../../constants/CONSTANTS";

interface ProfilePictureUploaderProps {
  image: File | null;
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
}

const ProfilePictureUploader: React.FC<ProfilePictureUploaderProps> = ({
  setImage,
  image,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Invalid file format");
      return;
    }

    if (file.size > MAX_PROFILE_IMAGE_SIZE) {
      toast.error("Max image size is 5MB");
      return;
    }

    setImage(file);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const file = event.target.files[0];

    if (!file.type.startsWith("image/")) {
      toast.error("Invalid file format");
      return;
    }

    if (file.size > MAX_PROFILE_IMAGE_SIZE) {
      toast.error("Max image size is 5MB");
      return;
    }

    setImage(file);
  };

  return (
    <div id="profilePictureUploader">
      <div
        className={clsx(
          "border-2 w-full min-w-52 max-w-60 h-60 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer transition",
          isDragging
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 bg-gray-50/40"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />

        {image ? (
          <div className="flex flex-col items-center">
            <img
              src={URL.createObjectURL(image)}
              alt="Selected file"
              className="h-24 w-24 object-cover rounded-full mb-4"
            />
            <p className="text-sm font-medium text-gray-900">File selected</p>
          </div>
        ) : (
          <div className="max-w-[200px] items-center flex flex-col gap-4">
            <FiUploadCloud
              size={48}
              className={clsx(isDragging ? "text-blue-600" : "text-gray-400")}
            />
            <p className="text-sm font-medium text-gray-900">
              <span className="text-gray-900">Browse photo</span> or drop here
            </p>
            <p className="text-xs text-gray-500">
              A photo larger than 400 pixels works best. Max photo size 5 MB.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePictureUploader;
