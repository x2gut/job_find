const JobCardListSkeleton = () => {
  return (
    <div className="w-full border rounded-lg border-[#EDEFF5] p-8 animate-pulse">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <div className="w-[68px] h-[68px] bg-gray-200 rounded-lg"></div>
          <div className="flex flex-col gap-3 flex-1">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="flex gap-2">
              <div className="h-6 bg-gray-200 rounded w-20"></div>
              <div className="h-6 bg-gray-200 rounded w-20"></div>
            </div>
            <div className="flex gap-4">
              <div className="h-4 bg-gray-200 rounded w-24"></div>
              <div className="h-4 bg-gray-200 rounded w-24"></div>
              <div className="h-4 bg-gray-200 rounded w-24"></div>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
          <div className="w-24 h-10 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default JobCardListSkeleton;
