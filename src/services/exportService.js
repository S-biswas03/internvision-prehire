import api from "./api";

export const exportExcel = async () => {
  const response = await api.get("/export", {
    responseType: "blob",
  });

  return response.data;
};
