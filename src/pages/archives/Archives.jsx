import "./Archives.css";
import {
  Nav,
  Sidebar,
  Search,
  Note,
} from "../../components/components";
import { useArchives } from "../../context/context";

export function Archives() {
  const { archives } = useArchives();

  return (
    <div className="notes">
      <Nav />
      <div className="notes-main">
        <Sidebar />
        <div className="notes-section">
          <Search />
          <div className="notes-gallery">
            {archives.length !== 0 && (
              <>
                <h2 className="notes-header">ARCHIVED</h2>
                <div className="other-notes">
                  {archives.map(({ note, _id }) => (
                    <Note note={note} id={_id} key={_id} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

