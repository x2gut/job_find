interface JobTitleProps {
    title: string;
    isFeatured: boolean;
    jobType: string;
  }
  
  const JobTitle = ({ title, isFeatured, jobType }: JobTitleProps) => {
    return (
      <div className="flex gap-2 items-center">
        <h5 className="text-2xl font-medium text-gray-900">{title}</h5>
        {isFeatured && (
          <span className="py-[3px] px-3 bg-[#FFEDED] text-[#FF4F4F] rounded-full">
            Featured
          </span>
        )}
        <span className="py-[3px] px-3 bg-[#E8F1FF] text-[#0066FF] rounded-full">
          {jobType}
        </span>
      </div>
    );
  };
  
  export default JobTitle;