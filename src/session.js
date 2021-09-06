import { createContext } from "react";

export const SessionContext = createContext({
  user: null,
  setUser: () => {},
});

export function getSession() {
  const session = JSON.parse(localStorage.getItem("session"));
  return session;
}

export function setSession(sessionId) {
  localStorage.setItem("session", JSON.stringify(sessionId));
}
