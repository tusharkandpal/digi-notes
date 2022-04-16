import { IconContext } from "react-icons";
import { AuthProvider } from "./auth-context";
import { NotesProvider } from "./notes-context";
export { useAuth } from "./auth-context";
export { useNotes } from "./notes-context";

export function ContextProvider({ children }) {
  return (
    <>
      <IconContext.Provider value={{ size: 23 }}>
        <AuthProvider>
          <NotesProvider>{children}</NotesProvider>
        </AuthProvider>
      </IconContext.Provider>
    </>
  );
}
