const CandidateProfileSkeletonHeader = () => {
  return (
    <div className="flex flex-wrap justify-between relative">
      <div className="flex gap-6 items-center">
        <div className="w-20 h-20 rounded-full bg-gray-200 animate-pulse"></div>
        <div className="flex flex-col gap-[6px]">
          <div className="h-8 w-40 bg-gray-200 animate-pulse rounded"></div>
          <div className="h-5 w-32 bg-gray-200 animate-pulse rounded"></div>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="p-3 rounded-md bg-gray-200 animate-pulse w-12 h-12"></div>
        <div className="h-10 w-28 bg-gray-200 animate-pulse rounded"></div>
        <div className="h-10 w-32 bg-gray-200 animate-pulse rounded"></div>
      </div>
    </div>
  );
};

export default CandidateProfileSkeletonHeader;
