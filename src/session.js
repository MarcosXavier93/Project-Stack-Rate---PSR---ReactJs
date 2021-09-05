import { createContext } from "react";

export const SessionContext = createContext({
  isAuthenticated: false,
  user: null,
  setAuthenticated: () => {},
});

export class Session {
  static getSession() {
    return !!localStorage.getItem("accessToken");
  }
}