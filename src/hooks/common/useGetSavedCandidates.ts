import { useQuery } from "@tanstack/react-query";
import useCompanyInfoStore from "../../stores/companyInfo";
import { getSavedCandidates } from "../../api/company";
import useUserDataStore from "../../stores/userDataStore";

const useGetSavedCandidates = () => {
  const { id } = useCompanyInfoStore();
  const { accType } = useUserDataStore();
  
  const savedCandidatesData = useQuery({
    queryKey: ["savedCandidates", id],
    queryFn: async () => {
      if (!id) return;
      return await getSavedCandidates(id);
    },
    enabled: !!id && accType === "employee",
  });

  return savedCandidatesData;
};

export default useGetSavedCandidates;
