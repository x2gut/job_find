const CandidateProfileTextBlockSkeleton = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="h-7 w-32 bg-gray-200 animate-pulse rounded"></div>
      <div className="flex flex-col gap-3">
        <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
        <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
        <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
        <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
        <div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded"></div>
      </div>
    </div>
  );
};

export default CandidateProfileTextBlockSkeleton;
