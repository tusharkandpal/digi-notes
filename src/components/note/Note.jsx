import "./Note.css";
import { useLocation } from "react-router-dom";
import { BsPin, BsPinAngleFill } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { BiArchiveIn } from "react-icons/bi";
import { MdUnarchive } from "react-icons/md";
import { useNotes, useArchives, useDisplay } from "../../context/context";

export function Note({ note, id }) {
  const { noteDispatch, updateNoteHandler, deleteNoteHandler } = useNotes();
  const { color, content, priority, tags, createdDate, isPinned } = note;
  const { addArchiveHandler, restoreArchiveHandler, deleteArchiveHandler } =
    useArchives();
  const { pathname } = useLocation();
  const { displayDispatch } = useDisplay();

  const editNoteHandler = () => {
    displayDispatch({ type: "ADD_NOTE_TOGGLE", payload: { addNoteToggle: true } });
    noteDispatch({ type: "SET_EDIT_MODE", payload: { note: { ...note, id } } });
  };

  return (
    <div className="note" style={{ backgroundColor: color }}>
      <div className="note-section">
        <div
          className="note-container"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
        {(pathname === "/notes" || pathname === "/labels") && (isPinned ? (
          <BsPinAngleFill
            className="note-icon"
            onClick={() => {
              updateNoteHandler({ ...note, id, isPinned: !isPinned });
            }}
          />
        ) : (
          <BsPin
            className="note-icon"
            onClick={() => {
              updateNoteHandler({ ...note, id, isPinned: !isPinned });
            }}
          />
        ))}
      </div>
      <div>
        <div className="chips-list">
          <span
            className="chip"
            style={{
              backgroundColor:
                priority === "Low"
                  ? "lightgreen"
                  : priority === "Medium"
                  ? "yellow"
                  : "#f78080",
            }}
          >
            {priority}
          </span>
          {tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
        <div className="note-footer">
          <small className="note-created-date">
            created on {createdDate}
          </small>
          <div className="note-icons">
            {pathname === "/notes" || pathname === "/labels" ? (
              <>
                <FiEdit2 className="note-icon" onClick={editNoteHandler} />
                <BiArchiveIn
                  className="note-icon"
                  onClick={() => addArchiveHandler({ ...note, id })}
                />
                <AiOutlineDelete
                  className="note-icon"
                  onClick={() => deleteNoteHandler(id)}
                />
              </>
            ) : (
              <>
                <MdUnarchive
                  className="note-icon"
                  onClick={() => restoreArchiveHandler({ ...note, id })}
                />
                <AiOutlineDelete
                  className="note-icon"
                  onClick={() => deleteArchiveHandler(id)}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

