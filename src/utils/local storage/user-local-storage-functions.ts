import { UserRole } from "@/types/UserRole";
import { userKey } from "./user-key";

export const getUserRole = (): UserRole => {
  if (!localStorage.getItem(userKey)) {
    localStorage.setItem(userKey, "none");
  }

  return localStorage.getItem(userKey) as UserRole;
};

export const setUserToCustomer = () => {
  localStorage.setItem(userKey, "customer");
};

export const setUserToAdmin = () => {
  localStorage.setItem(userKey, "admin");
};

export const signUserOut = () => {
  localStorage.setItem(userKey, "none");
};
