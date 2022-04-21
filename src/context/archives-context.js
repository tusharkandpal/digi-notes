import { createContext, useContext, useState, useEffect } from "react";
import {
  getArchivesService,
  addArchiveService,
  restoreArchiveService,
  deleteArchiveService
} from "../services/services";
import { useAuth, useNotes } from "./context";

const ArchivesContext = createContext();

const ArchivesProvider = ({ children }) => {
  const [archives, setArchives] = useState([]);
  const { setNotes } = useNotes();
  const {
    authState: { isLoggedIn },
  } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      (async () => {
        const { data, status } = await getArchivesService();
        if (status === 200) {
          setArchives(data.archives);
        }
      })();
    } else setArchives([]);
  }, [isLoggedIn]);

  const addArchiveHandler = async (note) => {
    const { data, status } = await addArchiveService(note);
    if (status === 201) {
      setNotes(data.notes);
      setArchives(data.archives);
    }
  };

  const restoreArchiveHandler = async (note) => {
    const { data, status } = await restoreArchiveService(note);
    if (status === 200) {
      setNotes(data.notes);
      setArchives(data.archives);
    }
  };

  const deleteArchiveHandler = async (id) => {
    const { data, status } = await deleteArchiveService(id);
    if (status === 200) {
      setArchives(data.archives);
    }
  };

  return (
    <ArchivesContext.Provider
      value={{
        archives,
        setArchives,
        addArchiveHandler,
        restoreArchiveHandler,
        deleteArchiveHandler
      }}
    >
      {children}
    </ArchivesContext.Provider>
  );
};

const useArchives = () => useContext(ArchivesContext);

export { ArchivesProvider, useArchives };

