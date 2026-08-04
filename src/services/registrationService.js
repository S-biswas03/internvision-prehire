import api from "./api";

export const submitRegistration = async (formData) => {
  const response = await api.post("/registrations", formData);
  return response.data;
};
