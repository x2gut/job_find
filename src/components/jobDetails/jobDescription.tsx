const JobDescription = ({
  description,
  responsibilities,
}: {
  description: string;
  responsibilities: string;
}) => {
  return (
    <div className="w-[734px] h-[788px]">
      <div className="mb-8">
        <h5 className="body-large-500 mb-4">Job Description</h5>
        <p className="text-gray-600">
          {" "}
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
        </p>
      </div>
      <div>
        <h5 className="body-large-500 mb-4">Responsibilities</h5>
        <ul className="list-disc flex flex-col gap-3 text-gray-600">
          <div dangerouslySetInnerHTML={{ __html: responsibilities }}></div>
        </ul>
      </div>
    </div>
  );
};

export default JobDescription;
