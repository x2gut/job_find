import Select from "react-select";
import { TagField } from "../../../ui/tagInput";
import useTagInput from "../../../../hooks/common/useTag";
import { FieldErrors, Controller, Control } from "react-hook-form";
import { JobAddData } from "../../../../types/types";

interface TagsAndRoleSectionProps {
  control: Control<JobAddData, any>;
  errors: FieldErrors<JobAddData>;
}

const TagsAndRoleSection: React.FC<TagsAndRoleSectionProps> = ({
  errors,
  control,
}) => {
  const { handleAddTag, handleRemoveTag, tags } = useTagInput();

  const roleOptions = [
    { value: "developer", label: "Developer" },
    { value: "designer", label: "Designer" },
    { value: "manager", label: "Manager" },
    { value: "qa", label: "QA Engineer" },
    { value: "marketing", label: "Marketing" },
  ];

  return (
    <div className="flex gap-[18px] w-full">
      <div className="flex flex-col gap-2 w-full">
        <label className="body-small-400">Tags</label>
        <Controller
          name="tags"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <TagField
              {...field}
              maxTags={5}
              tags={tags}
              removeTag={handleRemoveTag}
              addTag={handleAddTag}
              placeholder="Add a tag"
            />
          )}
        />
        {errors.tags && (
          <p className="text-red-500 text-sm">{errors.tags.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2 w-full max-w-[316px]">
        <label className="body-small-400">Job Role</label>
        <Controller
          name="jobRole"
          control={control}
          rules={{ required: "Please select a job role" }}
          render={({ field }) => (
            <Select
              {...field}
              // @ts-ignore
              options={roleOptions}
              classNames={{
                control: () => "h-[42px]",
                indicatorSeparator: () => "hidden",
              }}
              isClearable={true}
            />
          )}
        />
        {errors.jobRole && (
          <p className="text-red-500 text-sm">{errors.jobRole.message}</p>
        )}
      </div>
    </div>
  );
};

export default TagsAndRoleSection;
