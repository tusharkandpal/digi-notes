import { AuthProvider } from "./auth-context";
import { NotesProvider } from "./notes-context";
import { ArchivesProvider } from "./archives-context";
import { TrashProvider } from "./trash-context";
import { DisplayProvider } from "./display-context";
export { useAuth } from "./auth-context";
export { useNotes } from "./notes-context";
export { useArchives } from "./archives-context";
export { useTrash } from "./trash-context";
export { useDisplay } from "./display-context";

export function ContextProvider({ children }) {
  return (
    <DisplayProvider>
      <AuthProvider>
        <NotesProvider>
          <ArchivesProvider>
            <TrashProvider>{children}</TrashProvider>
          </ArchivesProvider>
        </NotesProvider>
      </AuthProvider>
    </DisplayProvider>
  );
}
