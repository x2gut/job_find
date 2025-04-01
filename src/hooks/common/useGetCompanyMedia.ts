import { useQuery } from "@tanstack/react-query";
import useCompanyInfoStore from "../../stores/companyInfo";
import { getBannerImage, getCompanyImage } from "../../api/company";

export const useGetCompanyImage = (companyId: number | null = null) => {
  const { id } = useCompanyInfoStore();

  const targetCompanyId = companyId ?? id;

  const companyImage = useQuery({
    queryKey: ["companyImage", targetCompanyId],
    queryFn: async () => {
      if (!targetCompanyId) {
        throw new Error("Company ID is not available");
      }
      const response = await getCompanyImage(targetCompanyId);
      return response;
    },
    refetchOnWindowFocus: false,
    enabled: !!targetCompanyId,
    retry: false,
    staleTime: 3600,
  });

  return companyImage;
};
export const useGetCompanyBanner = () => {
  const { id } = useCompanyInfoStore();
  const response = useQuery({
    queryKey: ["banner", id],
    queryFn: async () => {
      if (id) {
        const response = await getBannerImage(id);
        return response;
      }
    },
    refetchOnWindowFocus: false,
    enabled: !!id,
    retry: false,
  });
  return response;
};
