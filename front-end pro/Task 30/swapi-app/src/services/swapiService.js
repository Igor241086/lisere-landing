import axios from "axios";

export const fetchSwapiData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};