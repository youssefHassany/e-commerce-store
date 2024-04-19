import { UserRole } from "@/types/UserRole";
import { userKey } from "./user-key";

export const getUserRole = (): UserRole => {
  // to prevent localstorage is undefined error
  if (typeof window !== "undefined") {
    if (!localStorage.getItem(userKey)) {
      localStorage.setItem(userKey, "none");
    }

    return localStorage.getItem(userKey) as UserRole;
  } else {
    // Handle the case where localStorage is not available
    return "none"; // Return a default value
  }
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
