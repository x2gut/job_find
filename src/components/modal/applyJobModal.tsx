import Select from "react-select";
import Modal from "../ui/modal/modal";
import ModalHeader from "../ui/modal/modalHeader";
import TextEditor from "../ui/textEditor";
import { useState } from "react";
import Button from "../ui/button";
import useCandidateStore from "../../stores/candidateStore";
import { useMutation } from "@tanstack/react-query";
import { applyJob } from "../../api/jobApplication";
import { toast } from "react-toastify";
import useUserDataStore from "../../stores/userDataStore";
import { AxiosError } from "axios";

interface ApplyJobModalProps {
  jobId: number;
  jobTitle: string;
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

const ApplyJobModal: React.FC<ApplyJobModalProps> = ({
  jobId,
  isOpen,
  setIsOpen,
  jobTitle,
}) => {
  const { cvName } = useCandidateStore();
  const [coverLetter, setCoverLetter] = useState("");
  const { id } = useUserDataStore();

  const options = [{ label: cvName, value: cvName?.toUpperCase() }];

  const mutation = useMutation({
    mutationFn: applyJob,
    onSuccess: () => toast.success("Your application submited!"),
    onError: (error: AxiosError) => {
      if (error.status === 409) {
        toast.error("You have already applied on this job");
        return;
      }
      toast.error(`Error ${error.status}`);
    },
  });

  const handleApplyJob = () => {
    if (!cvName) {
      toast.error("CV not found");
      return;
    }
    if (!id) {
      toast.error("ID not found. Please try to reload the page");
      return;
    }
    const data = {
      userId: id,
      cvName: cvName,
      jobId: jobId,
      coverLetter: coverLetter,
    };
    mutation.mutate(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ModalHeader
        title={`Apply Job: ${jobTitle}`}
        onClose={() => setIsOpen(false)}
      />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleApplyJob();
        }}
        className="w-[648px] flex flex-col gap-4 mt-4"
        action=""
      >
        <div className="flex flex-col gap-2">
          <label className="body-small-400">Choose Resume</label>
          <Select
            options={options}
            classNames={{
              control: () => "h-12",
              indicatorSeparator: () => "hidden",
            }}
          ></Select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="body-small-400" htmlFor="">
            Cover letter
          </label>
          <TextEditor setValueOnUpdate={setCoverLetter} />
        </div>
        <div className="flex justify-between pb-8">
          <Button onClick={() => setIsOpen(false)} primary={false}>
            Cancel
          </Button>
          <Button type="submit" primary={true}>
            Apply
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ApplyJobModal;
