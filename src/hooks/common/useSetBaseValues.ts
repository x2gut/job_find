import { useEffect } from "react";
import useUserDataStore from "../../stores/userDataStore";
import useGetUser from "./useGetUser";
import useSetCandidateData from "./useSetCandidateData";
import { toast } from "react-toastify";
import { logoutUser } from "../../api/user";
import useSetEmployerData from "./useSetEmployerData";

const useSetBaseValues = () => {
  const {
    accType,
    reset: resetUserData,
    setAccType,
    setEmail,
    setIsActive,
    setUsername,
    setId,
  } = useUserDataStore();
  const userData = useGetUser();

  useEffect(() => {
    if (userData.isSuccess && userData.data) {
      if (userData.data.is_deleted) {
        toast.error("This account was deleted");
        const performLogout = async () => {
          await logoutUser();
          resetUserData();
        };
        performLogout();
        return;
      }
      setAccType(userData.data.acc_type);
      setEmail(userData.data.email);
      setIsActive(userData.data.is_active);
      setUsername(userData.data.username);
      setId(userData.data.id);
    }
  }, [userData.isSuccess, userData.data]);

  useSetCandidateData(accType === "candidate");
  useSetEmployerData(accType === "employee");

  return null;
};

export default useSetBaseValues;
