import Env from "@/config/env";
import { headers } from "next/headers";


export async function fetchUsers() {
  const res = await fetch(`${Env.APP_URL}/api/user`, {
    headers: headers(),
    next: {
      revalidate: 3600,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fecth users");
  }
  const response = await res.json();
  return response?.data;
}






