import makeApiRequest from "@/global/utils/apiRequest";

export async function fetchGetUserInfo() {
  return await makeApiRequest("/user/profile", "POST");
}

export async function fetchUpdateUserInfo(data: any) {
  return await makeApiRequest("/user/profile", "PUT", data);
}
