const JobCardGridSkeleton = () => {
  return (
    <div className="w-full cursor-pointer h-auto max-w-[424px] max-h-[204px] border border-[#EDEFF5] rounded-lg animate-pulse">
      <div className="p-8">
        <div className="flex items-center gap-4 pb-6">
          <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>

          <div className="flex flex-col gap-[6px] flex-1">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>

        <div>
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="flex gap-2 items-center">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCardGridSkeleton;
