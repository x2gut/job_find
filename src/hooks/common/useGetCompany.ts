import { useQuery } from "@tanstack/react-query";
import useUserDataStore from "../../stores/userDataStore";
import { getCompanyByEmployerId } from "../../api/company";

const useGetCompany = () => {
  const { id } = useUserDataStore();
  const { accType } = useUserDataStore();
  const { data, isLoading, isSuccess, isError, refetch } = useQuery({
    queryKey: ["companyData"],
    queryFn: async () => {
      if (id) {
        const response = await getCompanyByEmployerId(id);
        return response;
      }
    },
    enabled: !!id && accType === "employee",
    retry: false,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, isSuccess, isError, refetch };
};

export default useGetCompany;
