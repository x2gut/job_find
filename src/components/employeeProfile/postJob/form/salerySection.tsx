import Select from "react-select";
import Input from "../../../ui/input";
import InputBlock from "../../../ui/inputBlock";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";
import { JobAddData } from "../../../../types/types";

interface SalerySectionProps {
  control: Control<JobAddData, any>;
  register: UseFormRegister<JobAddData>;
  errors: FieldErrors<JobAddData>;
}

const SalerySection: React.FC<SalerySectionProps> = ({
  register,
  errors,
  control,
}) => {
  const saleryTypeOptions = [
    { value: "hourly", label: "Hourly" },
    { value: "monthly", label: "Monthly" },
    { value: "annual", label: "Annual" },
  ];

  return (
    <div className="mt-8">
      <h4 className="body-large-500 mb-[18px]">Salery</h4>
      <div className="flex gap-[18px]">
        {/* Min Salery */}
        <div className="flex flex-col gap-2 w-full">
          <label className="body-small-400" htmlFor="minSalery">
            Min Salery
          </label>
          <InputBlock>
            <Input
              {...register("minSalery", { required: "Enter min. salery" })}
              id="minSalery"
              type="number"
            />
            <div className="h-full w-full py-2 px-5 text-base text-gray-600 bg-[#F1F2F4]">
              USD
            </div>
          </InputBlock>
          {errors.minSalery && (
            <p className="text-red-500 text-sm">{errors.minSalery.message}</p>
          )}
        </div>

        {/* Max Salery */}
        <div className="flex flex-col gap-2 w-full">
          <label className="body-small-400" htmlFor="maxSalery">
            Max Salery
          </label>
          <InputBlock>
            <Input
              {...register("maxSalery", { required: "Enter max. salery" })}
              id="maxSalery"
              type="number"
            />
            <div className="h-full w-full py-2 px-5 text-base text-gray-600 bg-[#F1F2F4]">
              USD
            </div>
          </InputBlock>
          {errors.maxSalery && (
            <p className="text-red-500 text-sm">{errors.maxSalery.message}</p>
          )}
        </div>

        {/* Salery Type */}
        <div className="flex flex-col gap-2 w-full">
          <label className="body-small-400" htmlFor="saleryType">
            Salery Type
          </label>
          <Controller
            name="saleryType"
            control={control}
            rules={{ required: "Please select a salery type" }}
            render={({ field }) => (
              <Select
                {...field}
                //@ts-ignore
                options={saleryTypeOptions}
                classNames={{
                  control: () => "h-[42px]",
                  indicatorSeparator: () => "hidden",
                }}
                isClearable={true}
              />
            )}
          />
          {errors.saleryType && (
            <p className="text-red-500 text-sm">{errors.saleryType.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SalerySection;
