import SavedCandidateItem from "../../components/employeeProfile/savedCandidates/savedCandidateItem";
import useCompanyInfoStore from "../../stores/companyInfo";

const SavedCandidates = () => {
  const { savedCandidates } = useCompanyInfoStore();

  return (
    <div className="pt-12 pl-12 pb-3">
      <h5 className="font-medium text-gray-900 text-xl">Saved Candidates</h5>
      <div>
        {savedCandidates.candidates_data.map((candidate) => (
          <div className="border-b hover:border-transparent duration-200">
            <SavedCandidateItem
              key={candidate.id}
              candidate={candidate}
              candidateIds={savedCandidates.candidates_ids}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedCandidates;
