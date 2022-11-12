import apiClient from "./apiClient";

export function createUser(userinfo) {
  return apiClient.post("/user/create", userinfo);
}

export function deleteUser(id) {
  return apiClient.delete(`/profile/${id}`);
}
