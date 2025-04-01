import { useQuery } from "@tanstack/react-query";
import useUserDataStore from "../../stores/userDataStore";
import {
  getCandidateByUserId,
  getCandidateProfilePictureById,
} from "../../api/candidate";
import { useCallback, useEffect } from "react";
import useCandidateStore from "../../stores/candidateStore";

const useSetCandidateData = (enabled: boolean) => {
  const { id } = useUserDataStore();
  const {
    setId,
    id: candidateId,
    setProfilePicture,
    setFullname,
    setCvName,
  } = useCandidateStore();

  const { data: candidateData } = useQuery({
    queryKey: ["candidate", id],
    queryFn: async () => {
      if (!id) return;
      return getCandidateByUserId(id);
    },
    enabled: !!id,
    retry: false,
  });

  const { data: profilePicData } = useQuery({
    queryKey: ["candidateProfilePicture", candidateId],
    queryFn: async () => {
      if (!candidateId) return;
      return getCandidateProfilePictureById(candidateId);
    },
    enabled: !!candidateId,
  });

  const setCandidateData = useCallback(() => {
    if (!candidateData) return;

    setId(candidateData.id);

    setFullname(candidateData.full_name);

    setCvName(candidateData.cv_name);

    if (profilePicData) {
      setProfilePicture(profilePicData);
    }
  }, [candidateData, profilePicData]);

  useEffect(() => {
    if (!enabled) return;

    setCandidateData();
  }, [candidateData, profilePicData]);
};

export default useSetCandidateData;
