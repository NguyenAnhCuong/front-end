import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://651f6b9944a3a8aa47699fb4.mockapi.io/api/v1",
  withCredentials: false,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});
export default {
  getEvent() {
    return apiClient.get("/pens");
  },
};
