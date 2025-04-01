import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { SingleValue } from "react-select";
import { toast } from "react-toastify";
import useCompanyInfoStore from "../../../stores/companyInfo";
import { updateFoundingInfo } from "../../../api/company";

interface SelectOption {
  value: string;
  label: string;
}

const useFoundingInfoForm = () => {
  const { id } = useCompanyInfoStore();
  const [orgType, setOrgType] = useState<SelectOption | null>(null);
  const [industryType, setIndustryType] = useState<SelectOption | null>(null);
  const [teamSize, setTeamSize] = useState<SelectOption | null>(null);
  const [establishment, setEstablishment] = useState<string | null>(null);
  const [website, setWebsite] = useState<string | null>(null);
  const [companyVision, setCompanyVision] = useState<string | null>(null);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateFoundingInfo,
    onSuccess: () => {
      toast.success("Founding info updated successfully");
      queryClient.invalidateQueries({ queryKey: ["companyData"] });
    },
    onError: () => toast.error("Failed to update founding info"),
  });

  const handleChangeWebsite = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWebsite(event.target.value);
  };

  const handleChangeOrgType = (option: SingleValue<SelectOption>) => {
    setOrgType(option);
  };

  const handleChangeIndustryType = (option: SingleValue<SelectOption>) => {
    setIndustryType(option);
  };

  const handleChangeTeamSize = (option: SingleValue<SelectOption>) => {
    setTeamSize(option);
  };

  const handleChangeEstablishment = (date: Date | null) => {
    setEstablishment(
      String(
        date?.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      )
    );
  };

  const handleSubmit = () => {
    if (id) {
      mutation.mutate({
        company_id: id,
        organization_type: orgType?.label ?? null,
        industry_type: industryType?.label ?? null,
        team_size: teamSize?.label ?? null,
        year_of_establishment: establishment ?? null,
        website: website,
        company_vision: companyVision,
      });
    }
  };

  return {
    orgType,
    industryType,
    teamSize,
    establishment,
    website,
    companyVision,
    setCompanyVision,
    handleChangeWebsite,
    handleChangeOrgType,
    handleChangeIndustryType,
    handleChangeTeamSize,
    handleChangeEstablishment,
    handleSubmit,
  };
};

export default useFoundingInfoForm;
