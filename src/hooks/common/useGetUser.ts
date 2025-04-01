import { useQuery } from "@tanstack/react-query";
import { getUserData } from "../../api/user";

const useGetUser = () => {
  const userData = useQuery({
    queryKey: ["employee"],
    queryFn: getUserData,
    refetchOnMount: false,
    retry: false,
    refetchOnWindowFocus: false,
  });

  return userData;
};

export default useGetUser;
