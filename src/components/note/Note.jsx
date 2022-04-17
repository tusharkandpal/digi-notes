import "./Note.css";
import { BsPin, BsPinAngleFill } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { BiArchiveIn } from "react-icons/bi";
import { useNotes } from "../../context/context";

export function Note({ setShowAddNote, note, id }) {
  const { noteDispatch, updateNoteHandler, deleteNoteHandler } = useNotes();
  const { color, content, priority, tags, createdDate, isPinned } = note;

  const editNoteHandler = () => {
    setShowAddNote(true);
    noteDispatch({ type: "SET_EDIT_MODE", payload: { note: { ...note, id } } });
  };

  return (
    <div className="note" style={{ backgroundColor: color }}>
      <div className="note-section">
        <div
          className="note-container"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
        {isPinned ? (
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
        )}
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
          <p className="note-created-date">
            created on {createdDate}
          </p>
          <div className="note-icons">
            <FiEdit2 className="note-icon" onClick={editNoteHandler} />
            <BiArchiveIn className="note-icon" />
            <AiOutlineDelete className="note-icon" onClick={() => deleteNoteHandler(id)} />
          </div>
        </div>
      </div>
    </div>
  );
}
