import { useState } from "react";
import useDebounce from "./useDebounce";
import getAutocompletedPlaces from "../../api/external/geoapify";

const useLocationInput = () => {
  const [cities, setCities] = useState<any[]>([]);

  const debouncedRequest = useDebounce(async (text: string) => {
    if (!text) {
      setCities([]);
      return;
    }

    try {
      const response = await getAutocompletedPlaces(text);
      setCities(response.features || []);
    } catch (error) {
      console.log(`Error fetching cities: ${error}`);
      setCities([]);
    }
  }, 500);

  return { cities, debouncedRequest };
};

export default useLocationInput;
