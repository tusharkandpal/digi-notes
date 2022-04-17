import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";
import { useState } from "react";
import ReactQuill from "react-quill";
import { useNotes } from "../../context/context";
import { VscSymbolColor } from "react-icons/vsc";
import { MdOutlineLabel } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { Color, Label, Priority } from "../components";

export function TextEditor({ showAddNote, setShowAddNote }) {
  const [viewPopup, setViewPopup] = useState("");
  const { noteState, noteDispatch, addNoteHandler, updateNoteHandler } =
    useNotes();
  const { content, color, tags, id } = noteState;

  if (!showAddNote) return null;

  const popupHandler = (popupScreen) => {
    if (viewPopup === popupScreen) setViewPopup("");
    else setViewPopup(popupScreen);
  };

  const handleChange = (value) => {
    noteDispatch({ type: "SET_NOTE", payload: { content: value } });
  };

  const invalidNoteTypes = [
    "",
    "<p><br></p>",
    "<h1><br></h1>",
    "<h2><br></h2>",
    "<h3><br></h3>",
  ];

  return (
    <div className="text-editor" style={{ backgroundColor: color }}>
      <ReactQuill
        value={content}
        onChange={handleChange}
        placeholder="Body of the note..."
      ></ReactQuill>
      <div className="chips-list">
        {tags.map((tag) => (
          <span key={tag} className="chip">
            {tag}{" "}
            <AiFillCloseCircle
              className="chip-icon"
              size={15}
              onClick={() =>
                noteDispatch({ type: "REMOVE_TAG", payload: { tag } })
              }
            />
          </span>
        ))}
      </div>
      <div className="text-editor-footer">
        <div className="editor-buttons">
          {id ? (
            <button
              type="button"
              className="btn btn-sm primary"
              onClick={() => {
                updateNoteHandler(noteState);
                noteDispatch({ type: "RESET" });
                setViewPopup("");
              }}
              disabled={invalidNoteTypes.includes(content) ? true : false}
            >
              Update
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-sm primary"
              onClick={() => {
                addNoteHandler(noteState);
                noteDispatch({ type: "RESET" });
                setViewPopup("");
              }}
              disabled={invalidNoteTypes.includes(content) ? true : false}
            >
              Save
            </button>
          )}
          <button
            type="button"
            className="btn btn-sm outline outline-danger"
            onClick={() => {
              setShowAddNote(false);
              noteDispatch({ type: "RESET" });
              setViewPopup("");
            }}
          >
            Close
          </button>
        </div>
        <div className="editor-icons">
          <Priority />
          <VscSymbolColor
            className="note-icon"
            onClick={() => popupHandler("color")}
          />
          <Color viewPopup={viewPopup} />
          <MdOutlineLabel
            className="note-icon"
            onClick={() => popupHandler("label")}
          />
          <Label viewPopup={viewPopup} />
        </div>
      </div>
    </div>
  );
}
