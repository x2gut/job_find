interface CandidateProfileModalTextBlockProps {
  label: string;
  text: string;
}

const CandidateProfileModalTextBlock: React.FC<
  CandidateProfileModalTextBlockProps
> = ({ label, text }) => {
  return (
    <div className="flex flex-col gap-6">
      <h5 className="text-lg text-gray-900 font-medium">{label}</h5>
      <p
        className="text-gray-600"
        dangerouslySetInnerHTML={{ __html: text }}
      ></p>
    </div>
  );
};

export default CandidateProfileModalTextBlock;
