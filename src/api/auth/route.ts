import makeApiRequest from "@/global/utils/apiRequest";

export async function fetchPostLogin(data: any) {
  console.log(data);
  return await makeApiRequest("/user/login", "POST", data);
}

export async function fetchPostSignup(data: any) {
  console.log(data);
  return await makeApiRequest("/user/signup", "POST", data);
}
