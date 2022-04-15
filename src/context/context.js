import { AuthProvider } from "./auth-context";
export { useAuth } from "./auth-context";

export function ContextProvider({ children }) {
  return (
    <>
      <AuthProvider>{children}</AuthProvider>
    </>
  );
}
