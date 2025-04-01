import { useRef, useState } from "react";
import clsx from "clsx";
import { CiCirclePlus } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Button from "../../../../ui/button";
import { toast } from "react-toastify";
import { MAX_CV_FILE_SIZE } from "../../../../../constants/CONSTANTS";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useMutation } from "@tanstack/react-query";
import { updateCandidateCv } from "../../../../../api/candidate";

const formatFileSize = (size: number): string => {
  return size >= 1024 * 1024
    ? `${(size / (1024 * 1024)).toFixed(2)} MB`
    : `${(size / 1024).toFixed(0)} KB`;
};

const CvUploader = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [cv, setCv] = useState<null | File>(null);
  const [cvSize, setCvSize] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);

  const mutation = useMutation({
    mutationFn: updateCandidateCv,
    onSuccess: () => {
      toast.success("CV saved successfully!");
      setCv(null);
    },
    onError: () => {
      toast.error("Error uploading CV. Please try again.");
    },
  });

  const handleSubmit = () => {
    if (!cv) return;
    const formData = new FormData();
    formData.append("cv", cv);
    mutation.mutate(formData);
  };

  const handleFile = (file: File) => {
    if (!file.type.startsWith("application/pdf")) {
      toast.error("Invalid CV format. Please use only PDF.");
      return;
    }

    if (file.size > MAX_CV_FILE_SIZE) {
      toast.error("Max CV size is 10 MB.");
      return;
    }

    setCv(file);
    setCvSize(formatFileSize(file.size));
  };

  const handleChangeCv = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) return;
    handleFile(event.target.files[0]);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    if (!event.dataTransfer.files.length) return;
    handleFile(event.dataTransfer.files[0]);
  };

  const handleRemoveCv = () => {
    setCv(null);
    setCvSize("");
  };

  return (
    <div className="w-full">
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept="application/pdf"
        onChange={handleChangeCv}
      />
      <h5 className="body-large-500 mb-4">Your CV/Resume</h5>

      {cv ? (
        <div className="mb-5 flex justify-between p-5 w-full max-w-[360px] bg-gray-50 rounded-md">
          <div className="flex items-center gap-3">
            <IoDocumentTextOutline size={32} className="text-blue-600" />
            <div>
              <p className="text-sm font-medium text-gray-900">{cv.name}</p>
              <p className="body-small-400 text-gray-500">{cvSize}</p>
            </div>
          </div>
          <button onClick={handleRemoveCv}>
            <IoMdClose size={24} className="text-red-500" />
          </button>
        </div>
      ) : (
        <div
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={clsx(
            "cursor-pointer mb-5 flex p-5 items-center gap-3 w-full max-w-[360px] border-4 border-dashed rounded-md transition",
            isDragging
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 bg-white"
          )}
        >
          <CiCirclePlus
            size={32}
            className={clsx(isDragging ? "text-blue-600" : "text-gray-400")}
          />
          <div>
            <p className="text-sm font-medium text-gray-900">Add CV/Resume</p>
            <p className="body-small-400">Browse file or drop here. Only PDF</p>
          </div>
        </div>
      )}

      <Button
        onClick={handleSubmit}
        primary={true}
        disabled={!cv || mutation.isPending}
      >
        {mutation.isPending ? "Uploading..." : "Upload"}
      </Button>
    </div>
  );
};

export default CvUploader;
