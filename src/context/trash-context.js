import { createContext, useContext, useState, useEffect } from "react";
import { useAuth, useNotes, useArchives } from "./context";
import {
  getTrashService,
  moveNoteToTrashService,
  moveArchiveToTrashService,
  restoreFromTrashService,
  deleteFromTrashService,
} from "../services/services";

const TrashContext = createContext();

const TrashProvider = ({ children }) => {
  const [trash, setTrash] = useState([]);
  const {
    authState: { isLoggedIn },
  } = useAuth();
  const { setNotes } = useNotes();
  const { setArchives } = useArchives();

  useEffect(() => {
    if (isLoggedIn) {
      (async () => {
        const { data, status } = await getTrashService();
        if (status === 200) {
          setTrash(data.trash);
        }
      })();
    } else setTrash([]);
  }, [isLoggedIn]);

  const moveNoteToTrashHandler = async (note) => {
    const { data, status } = await moveNoteToTrashService(note);
    if (status === 200) {
      setNotes(data.notes);
      setTrash(data.trash);
    }
  };

  const moveArchiveToTrashHandler = async (note) => {
    const { data, status } = await moveArchiveToTrashService(note);
    if (status === 200) {
      setArchives(data.archives);
      setTrash(data.trash);
    }
  };

  const restoreFromTrashHandler = async (note) => {
    const { data, status } = await restoreFromTrashService(note);
    if (status === 200) {
      setTrash(data.trash);
      setNotes(data.notes);
    }
  };

  const deleteFromTrashHandler = async (id) => {
    const { data, status } = await deleteFromTrashService(id);
    if (status === 200) {
      setTrash(data.trash);
    }
  };

  return (
    <TrashContext.Provider
      value={{
        trash,
        setTrash,
        moveNoteToTrashHandler,
        moveArchiveToTrashHandler,
        restoreFromTrashHandler,
        deleteFromTrashHandler,
      }}
    >
      {children}
    </TrashContext.Provider>
  );
};

const useTrash = () => useContext(TrashContext);

export { TrashProvider, useTrash };


