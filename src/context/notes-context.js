import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import { noteInitialState, noteReducer } from "../reducer/reducer";
import {
  getNotesService,
  addNoteService,
  updateNoteService,
  deleteNoteService,
} from "../services/services";
import { useAuth } from "./context";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [noteState, noteDispatch] = useReducer(noteReducer, noteInitialState);
  const [notes, setNotes] = useState([]);
  const {
    authState: { isLoggedIn },
  } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      (async () => {
        const { data, status } = await getNotesService();
        if (status === 200) {
          setNotes(data.notes);
        }
      })();
    } else setNotes([]);
  }, [isLoggedIn]);

  const addNoteHandler = async (note) => {
    const { data, status } = await addNoteService(note);
    if (status === 201) {
      setNotes(data.notes);
    }
  };

  const updateNoteHandler = async (note) => {
    const { data, status } = await updateNoteService(note);
    if (status === 201) {
      setNotes(data.notes);
    }
  };

  const deleteNoteHandler = async (id) => {
    const { data, status } = await deleteNoteService(id);
    if (status === 200) {
      setNotes(data.notes);
    }
  };

  return (
    <NotesContext.Provider
      value={{
        noteState,
        noteDispatch,
        notes,
        addNoteHandler,
        updateNoteHandler,
        deleteNoteHandler,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };

