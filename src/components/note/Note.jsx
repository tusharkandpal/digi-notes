import "./Note.css";
import { useLocation } from "react-router-dom";
import { BsPin, BsPinAngleFill } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { BiArchiveIn } from "react-icons/bi";
import { MdUnarchive, MdRestore, MdDeleteForever } from "react-icons/md";
import {
  useNotes,
  useArchives,
  useTrash,
  useDisplay,
} from "../../context/context";

export function Note({ note, id }) {
  const { noteDispatch, updateNoteHandler } = useNotes();
  const { color, content, priority, tags, createdDate, isPinned } = note;
  const { addArchiveHandler, restoreArchiveHandler } = useArchives();
  const {
    moveNoteToTrashHandler,
    moveArchiveToTrashHandler,
    restoreFromTrashHandler,
    deleteFromTrashHandler,
  } = useTrash();
  const { pathname } = useLocation();
  const { displayDispatch } = useDisplay();

  const editNoteHandler = () => {
    displayDispatch({
      type: "ADD_NOTE_TOGGLE",
      payload: { addNoteToggle: true },
    });
    noteDispatch({ type: "SET_EDIT_MODE", payload: { note: { ...note, id } } });
  };

  const isEitherNotesOrLabelsPage = ["/notes", "/labels"].includes(pathname);

  const noteCreatedDate = (new Date(createdDate)).toDateString();

  return (
    <div className="note" style={{ backgroundColor: color }}>
      <div className="note-section">
        <div
          className="note-container"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
        {isEitherNotesOrLabelsPage &&
          (isPinned ? (
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
          <small className="note-created-date">created on {noteCreatedDate}</small>
          <div className="note-icons">
            {isEitherNotesOrLabelsPage ? (
              <>
                <FiEdit2 className="note-icon" onClick={editNoteHandler} />
                <BiArchiveIn
                  className="note-icon"
                  onClick={() => addArchiveHandler({ ...note, id })}
                />
                <AiOutlineDelete
                  className="note-icon"
                  onClick={() => moveNoteToTrashHandler({ ...note, id })}
                />
              </>
            ) : pathname === "/archives" ? (
              <>
                <MdUnarchive
                  className="note-icon"
                  onClick={() => restoreArchiveHandler({ ...note, id })}
                />
                <AiOutlineDelete
                  className="note-icon"
                  onClick={() => moveArchiveToTrashHandler({ ...note, id })}
                />
              </>
            ) : (
              <>
                <MdRestore
                  className="note-icon"
                  onClick={() => restoreFromTrashHandler({ ...note, id })}
                />
                <MdDeleteForever
                  className="note-icon"
                  onClick={() => deleteFromTrashHandler(id)}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

