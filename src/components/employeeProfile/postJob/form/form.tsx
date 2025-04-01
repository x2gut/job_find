import Input from "../../../ui/input";
import SalerySection from "./salerySection";
import AdvanceInformationSection from "./advanceInformationSection";
import TagsAndRoleSection from "./tagsAndRoleSection";
import ApplyJobSection from "./applyJobSection";
import TextEditor from "../../../ui/textEditor";
import Button from "../../../ui/button";
import { FaLongArrowAltRight } from "react-icons/fa";
import usePostJobForm from "../../../../hooks/forms/employer/usePostJobForm";

const PostJobForm = () => {
  const { register, handleSubmit, setValue, onSubmit, errors, control } =
    usePostJobForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-24">
      <div className="flex flex-col gap-2 mb-[18px]">
        <label className="body-small-400" htmlFor="">
          Job Title
        </label>
        <Input
          {...register("title", { required: "This field is required" })}
          className="border"
          placeholder="Add job title, role, vacancies etc"
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>

      <TagsAndRoleSection control={control} errors={errors} />
      <SalerySection register={register} control={control} errors={errors} />
      <AdvanceInformationSection control={control} errors={errors} />
      <ApplyJobSection register={register} />
      <div className="flex flex-col gap-[18px] my-8">
        <h4 className="body-large-500">Description & Responsibility</h4>
        <div className="flex flex-col gap-2">
          <label className="body-small-400" htmlFor="">
            Description
          </label>
          <TextEditor
            {...register("description", {
              required: "This field is required",
            })}
            setValueOnUpdate={(value) =>
              setValue("description", value, { shouldValidate: true })
            }
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="body-small-400" htmlFor="">
            Responsibilities
          </label>
          <TextEditor
            {...register("responsibilities", {
              required: "This field is required",
            })}
            setValueOnUpdate={(value) =>
              setValue("responsibilities", value, { shouldValidate: true })
            }
          />
          {errors.responsibilities && (
            <p className="text-red-500 text-sm">
              {errors.responsibilities.message}
            </p>
          )}
        </div>
      </div>
      <Button type="submit" className="flex items-center gap-2" primary={true}>
        Post Job
        <FaLongArrowAltRight />
      </Button>
    </form>
  );
};

export default PostJobForm;
