import "./Notes.css";
import { useState } from "react";
import {
  Nav,
  Sidebar,
  Search,
  TextEditor,
  Note,
} from "../../components/components";
import { useNotes } from "../../context/context";

export function Notes() {
  const [showAddNote, setShowAddNote] = useState(false);
  const { notes } = useNotes();

  const pinnedNotes = notes.filter(({ note }) => note.isPinned);
  const otherNotes = notes.filter(({ note }) => !note.isPinned);

  return (
    <div className="notes">
      <Nav />
      <div className="notes-main">
        <Sidebar setShowAddNote={setShowAddNote} />
        <div className="notes-section">
          <Search />
          <TextEditor
            showAddNote={showAddNote}
            setShowAddNote={setShowAddNote}
          />
          <div className="notes-gallery">
            {pinnedNotes.length !== 0 && (
              <>
                <h2 className="notes-header">PINNED</h2>
                <div className="pinned-notes">
                  {pinnedNotes.map(({ note, _id }) => (
                    <Note
                      note={note}
                      id={_id}
                      key={_id}
                      setShowAddNote={setShowAddNote}
                    />
                  ))}
                </div>
              </>
            )}
            {otherNotes.length !== 0 && (
              <>
                <h2 className="notes-header">OTHERS</h2>
                <div className="other-notes">
                  {otherNotes.map(({ note, _id }) => (
                    <Note
                      note={note}
                      id={_id}
                      key={_id}
                      setShowAddNote={setShowAddNote}
                    />
                  ))}{" "}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


