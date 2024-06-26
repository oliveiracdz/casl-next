import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { DbUser, User } from "../../types";

export async function getUser() {
  const requestCookies = cookies();

  const raw = requestCookies.get("user")?.value;

  if (!raw) return redirect("/login");

  return JSON.parse(raw) as User;
}

export async function findUser(username: string, password: string) {
  return db.find(
    (user) => user.password === password && user.username === username
  );
}

const db: DbUser[] = [
  {
    id: 12,
    username: "adm",
    password: "adm1",
    type: "ADMIN",
    featureFlags: ["teste"],
  },
  {
    id: 14,
    username: "user",
    password: "user1",
    type: "COMMON",
    featureFlags: ["teste1"],
  },
  {
    id: 14,
    username: "userVazio",
    password: "user1",
    type: "COMMON",
    featureFlags: ["vazio", "sem nada"],
  },
];
