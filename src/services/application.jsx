import apiClient from "./apiClient";

export function application(applicationinfo) {
  return apiClient.post("/application/create", applicationinfo);
}
