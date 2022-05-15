import "./Labels.css";
import { Fragment } from "react";
import {
  Nav,
  Sidebar,
  Search,
  TextEditor,
  Note,
  Filters,
} from "../../components/components";
import { useNotes } from "../../context/context";
import { useFilterNotes } from "../../hooks/hooks";

export function Labels() {
  const { notes } = useNotes();

  const filteredNotes =  useFilterNotes([...notes]);

  const allUniqueLabels = filteredNotes.reduce(
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
        <Sidebar />
        <div className="notes-section">
          <Search />
          <TextEditor />
          <div className="notes-gallery">
            {allUniqueLabels.length !== 0 &&
              allUniqueLabels.map((label) => (
                <Fragment key={label}>
                  <h2 className="notes-header">{label.toUpperCase()}</h2>
                  <div className="other-notes">
                    {filteredNotes.map(
                      ({ note, _id }) =>
                        note.tags.includes(label) && (
                          <Note
                            note={note}
                            id={_id}
                            key={_id}
                          />
                        )
                    )}
                  </div>
                </Fragment>
              ))}
          </div>
        </div>
        <Filters />
      </div>
    </div>
  );
}


