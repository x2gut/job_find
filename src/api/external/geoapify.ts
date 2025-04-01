import axios from "axios";

const getAutocompletedPlaces = async (text: string) => {
  try {
    const apiKey = import.meta.env.VITE_GEOAPIFY_API;
    const response = await axios.get(
      `https://api.geoapify.com/v1/geocode/autocomplete`,
      {
        params: {
          text,
          apiKey,
          limit: 5,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching places:", error);
    return [];
  }
};

export default getAutocompletedPlaces;
