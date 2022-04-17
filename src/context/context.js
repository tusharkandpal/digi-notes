import { AuthProvider } from "./auth-context";
import { NotesProvider } from "./notes-context";
import { DisplayProvider } from "./display-context";
export { useAuth } from "./auth-context";
export { useNotes } from "./notes-context";
export { useDisplay } from "./display-context";

export function ContextProvider({ children }) {
  return (
    <DisplayProvider>
      <AuthProvider>
        <NotesProvider>{children}</NotesProvider>
      </AuthProvider>
    </DisplayProvider>
  );
}
