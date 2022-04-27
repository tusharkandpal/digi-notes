import "./Notes.css";
import {
  Nav,
  Sidebar,
  Search,
  TextEditor,
  Note,
  Filters,
} from "../../components/components";
import { useNotes } from "../../context/context";
import { useFilterNotes } from "../../hooks/useFilterNotes";

export function Notes() {
  const { notes } = useNotes();

  const filteredNotes =  useFilterNotes([...notes]);

  const pinnedNotes = filteredNotes.filter(({ note }) => note.isPinned);
  const otherNotes = filteredNotes.filter(({ note }) => !note.isPinned);

  return (
    <div className="notes">
      <Nav />
      <div className="notes-main">
        <Sidebar />
        <div className="notes-section">
          <Search />
          <TextEditor />
          <div className="notes-gallery">
            {pinnedNotes.length !== 0 && (
              <>
                <h2 className="notes-header">PINNED</h2>
                <div className="pinned-notes">
                  {pinnedNotes.map(({ note, _id }) => (
                    <Note note={note} id={_id} key={_id} />
                  ))}
                </div>
              </>
            )}
            {otherNotes.length !== 0 && (
              <>
                <h2 className="notes-header">OTHERS</h2>
                <div className="other-notes">
                  {otherNotes.map(({ note, _id }) => (
                    <Note note={note} id={_id} key={_id} />
                  ))}{" "}
                </div>
              </>
            )}
          </div>
        </div>
        <Filters />
      </div>
    </div>
  );
}


