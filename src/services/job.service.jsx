import apiClient from "./apiClient";

export function createJob(jobinfo) {
  return apiClient.post("/job/create", jobinfo);
}

export function getSingleJob(id) {
  return apiClient.get("/job/" + id);
}
export function getAllJobs(all) {
  return apiClient.get("/job", all);
}
