"use server";
import { cookies } from "next/headers";
import { handleApiError } from "../infrastructure/apiError";
import { unstable_noStore as noStore } from "next/cache";

async function makeApiRequest(
  endpoint: string,
  method: string,
  data?: any,
  file?: boolean
) {
  const cookieStore = cookies();
  const tokenData = cookieStore.get("token");
  const headers: {
    Accept: string;
    "Content-Type"?: string;
    Authorization?: string;
  } = {
    Accept: "application/json",
  };

  if (tokenData) {
    headers.Authorization = `Bearer ${tokenData.value}`;
  }
  let requestOptions: RequestInit = {
    method: method,
    headers: headers,
    cache: "no-store",
    next: { revalidate: 0 },
  };

  if (data) {
    requestOptions.body = file ? data : JSON.stringify(data);
    if (!file) {
      headers["Content-Type"] = "application/json";
    }
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
    requestOptions
  );

  if (!response.ok) {
    const errorData = await response.json();
    const error: any = {
      status: response.status,
      error: errorData.message,
    };

    throw handleApiError(error);
  }
  return await response.json();
}

export default makeApiRequest;
