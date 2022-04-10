import "./Note.css";
import { Nav, Sidebar, Search, TextEditor } from "../../components/components";

export function Note() {
  return (
    <div className="note">
      <Nav />
      <div className="note-main">
        <Sidebar />
        <div className="note-section">
          <Search />
          <div className="note-gallery">
            <TextEditor />
            <TextEditor />
            <TextEditor />
          </div>
        </div>
      </div>
    </div>
  );
}


