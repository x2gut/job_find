import { useEffect, useCallback } from "react";
import useCompanyInfoStore from "../../stores/companyInfo";
import useGetCompany from "./useGetCompany";
import { useGetCompanyImage } from "./useGetCompanyMedia";
import useGetSavedCandidates from "./useGetSavedCandidates";

const useSetEmployerData = (enabled: boolean) => {
  const companyImage = useGetCompanyImage();
  const { data } = useGetCompany();
  const savedCandidatesData = useGetSavedCandidates();

  const {
    setId: setCompanyId,
    setCompanyName,
    setAboutUs,
    setProfilePicture,
    setLocation,
    setSavedCandidates,
  } = useCompanyInfoStore();

  const setCompanyData = useCallback(() => {
    if (!data) return;

    setCompanyId(data.id);
    setCompanyName(data.company_name);
    setAboutUs(data.about);
    setLocation(data.location);

    if (companyImage.data) {
      setProfilePicture(companyImage.data);
    }

    if (savedCandidatesData.data) {
      setSavedCandidates(savedCandidatesData.data);
    }
  }, [data, companyImage.data, savedCandidatesData.data]);

  useEffect(() => {
    if (!enabled) return;

    setCompanyData();
  }, [data, setCompanyData, savedCandidatesData.data]);

  return setCompanyData;
};

export default useSetEmployerData;
