import "./TextEditor.css";
import { BsPin } from "react-icons/bs";
import { VscSymbolColor } from "react-icons/vsc";
import { MdOutlineLabel } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { BiArchiveIn } from "react-icons/bi";

export function TextEditor() {
  return (
    <div className="text-editor">
      <div className="text-editor-section">
        <div className="note-container">
          <h3 className="note-header">Title of the note</h3>
          <p className="note-body">Body of the note</p>
        </div>
        <BsPin className="note-icon" />
      </div>
      <div className="text-editor-footer">
        <p className="note-created-date">Created on 16/04/2022</p>
        <div className="note-icons">
          <VscSymbolColor className="note-icon" />
          <MdOutlineLabel className="note-icon" />
          <BiArchiveIn className="note-icon" />
          <AiOutlineDelete className="note-icon" />
        </div>
      </div>
    </div>
  );
}


