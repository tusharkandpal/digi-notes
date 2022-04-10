import "./Note.css";
import { Nav, Sidebar } from "../../components/components";

export function Note() {
  return (
    <div className="note">
      <Nav />
      <div className="note-main">
        <Sidebar />
      </div>
    </div>
  );
}


