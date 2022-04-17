import "./Labels.css";
import { Fragment, useState } from "react";
import {
  Nav,
  Sidebar,
  Search,
  TextEditor,
  Note,
} from "../../components/components";
import { useNotes } from "../../context/context";

export function Labels() {
  const [showAddNote, setShowAddNote] = useState(false);
  const { notes } = useNotes();

  const allUniqueLabels = notes.reduce(
    (allLabels, initial) => [
      ...allLabels,
      ...initial.note.tags.filter((tag) => !allLabels.includes(tag)),
    ],
    []
  );

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
            {allUniqueLabels.length !== 0 &&
              allUniqueLabels.map((label) => (
                <Fragment key={label}>
                  <h2 className="notes-header">{label.toUpperCase()}</h2>
                  <div className="other-notes">
                    {notes.map(
                      ({ note, _id }) =>
                        note.tags.includes(label) && (
                          <Note
                            note={note}
                            id={_id}
                            key={_id}
                            setShowAddNote={setShowAddNote}
                          />
                        )
                    )}
                  </div>
                </Fragment>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}


