import Select from "react-select";
import Container from "../common/Container";
import Tag from "./tag";
import { TbLayoutGridFilled } from "react-icons/tb";
import { CiGrid2H } from "react-icons/ci";
import { Dispatch, SetStateAction } from "react";
import { JobFilters } from "../../types/types";

interface FindJobContentHeaderProps {
  viewMode: string;
  setViewMode: Dispatch<SetStateAction<string>>;
  filters: JobFilters;
  setFilters: Dispatch<SetStateAction<JobFilters>>;
  setLimit: Dispatch<SetStateAction<number>>;
}

const FindJobContentHeader: React.FC<FindJobContentHeaderProps> = ({
  setViewMode,
  viewMode,
  filters,
  setFilters,
  setLimit,
}) => {
  const simpleFilterOptions = [
    {
      value: "latest",
      label: "Latest",
    },
    {
      value: "popular",
      label: "Popular",
    },
  ];

  const itemsPerPageOptions = [
    {
      value: 12,
      label: "12 per page",
    },
    {
      value: 18,
      label: "18 per page",
    },
  ];

  return (
    <div className="bg-white">
      <Container>
        <div className="flex justify-between pt-4 pb-9">
          <div className="flex gap-3 max-w-80">
            {filters.location && (
              <Tag
                label={filters.location}
                onCloseClick={() =>
                  setFilters((prev) => ({ ...prev, location: "" }))
                }
              />
            )}
            {filters.keyword && (
              <Tag
                label={filters.keyword}
                onCloseClick={() =>
                  setFilters((prev) => ({ ...prev, keyword: "" }))
                }
              />
            )}
          </div>
          <div className="flex gap-4">
            <Select
              options={simpleFilterOptions}
              defaultValue={simpleFilterOptions[0]}
              classNames={{
                indicatorSeparator: () => "hidden",
                control: () => "w-[180px]",
              }}
            />
            <Select
              options={itemsPerPageOptions}
              defaultValue={itemsPerPageOptions[0]}
              onChange={(option) => {
                if (option?.value) {
                  setLimit(option?.value);
                }
              }}
              classNames={{
                indicatorSeparator: () => "hidden",
                control: () => "w-[180px]",
              }}
            />
            <div
              className={
                "flex items-center gap-3 border border-gray-300 rounded-md"
              }
            >
              <button
                className={`p-[6px] ml-1 rounded-lg ${
                  viewMode === "grid" && "bg-gray-50"
                }`}
                onClick={() => setViewMode("grid")}
              >
                <TbLayoutGridFilled size={20} />
              </button>
              <button
                className={`p-[6px] mr-1 rounded-lg ${
                  viewMode === "list" && "bg-gray-50"
                }`}
                onClick={() => setViewMode("list")}
              >
                <CiGrid2H size={20} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FindJobContentHeader;
