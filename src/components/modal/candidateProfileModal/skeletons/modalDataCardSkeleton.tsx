const SkeletonCandidateProfileModalDataCard = () => {
  return (
    <div className="border rounded-md p-6">
      <div className="flex gap-10">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse" />
            <div className="w-24 h-5 bg-gray-300 rounded animate-pulse" />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse" />
            <div className="w-32 h-5 bg-gray-300 rounded animate-pulse" />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse" />
            <div className="w-20 h-5 bg-gray-300 rounded animate-pulse" />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse" />
            <div className="w-28 h-5 bg-gray-300 rounded animate-pulse" />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse" />
            <div className="w-24 h-5 bg-gray-300 rounded animate-pulse" />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse" />
            <div className="w-36 h-5 bg-gray-300 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCandidateProfileModalDataCard;
