import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";
import ReactQuill from "react-quill";
import { useDisplay, useNotes } from "../../context/context";
import { VscSymbolColor } from "react-icons/vsc";
import { MdOutlineLabel } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { Color, Label, Priority } from "../components";

export function TextEditor() {
  const {
    displayState: { addNoteToggle, colorToggle, labelToggle },
    displayDispatch,
  } = useDisplay();
  const { noteState, noteDispatch, addNoteHandler, updateNoteHandler } =
    useNotes();
  const { content, color, tags, id } = noteState;

  if (!addNoteToggle) return null;

  const handleChange = (value) => {
    noteDispatch({ type: "SET_NOTE", payload: { content: value } });
  };

  const resetHandler = () => {
    noteDispatch({ type: "RESET" });
    displayDispatch({
      type: "COLOR_TOGGLE",
      payload: { colorToggle: false },
    });
    displayDispatch({
      type: "LABEL_TOGGLE",
      payload: { labelToggle: false },
    });
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
                resetHandler();
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
                resetHandler();
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
              displayDispatch({
                type: "ADD_NOTE_TOGGLE",
                payload: { addNoteToggle: false },
              });
              resetHandler();
            }}
          >
            Close
          </button>
        </div>
        <div className="editor-icons">
          <Priority />
          <VscSymbolColor
            className="note-icon"
            onClick={() => {
              displayDispatch({
                type: "COLOR_TOGGLE",
                payload: { colorToggle: !colorToggle },
              });
              displayDispatch({
                type: "LABEL_TOGGLE",
                payload: { labelToggle: false },
              });
            }}
          />
          <Color />
          <MdOutlineLabel
            className="note-icon"
            onClick={() => {
              displayDispatch({
                type: "LABEL_TOGGLE",
                payload: { labelToggle: !labelToggle },
              });
              displayDispatch({
                type: "COLOR_TOGGLE",
                payload: { colorToggle: false },
              });
            }}
          />
          <Label />
        </div>
      </div>
    </div>
  );
}
