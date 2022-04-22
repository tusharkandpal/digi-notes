import "./Trash.css";
import { Nav, Sidebar, Search, Note } from "../../components/components";
import { useTrash } from "../../context/context";

export function Trash() {
  const { trash } = useTrash();

  return (
    <div className="notes">
      <Nav />
      <div className="notes-main">
        <Sidebar />
        <div className="notes-section">
          <Search />
          <div className="notes-gallery">
            {trash.length !== 0 && (
              <>
                <h2 className="notes-header">TRASH</h2>
                <div className="other-notes">
                  {trash.map(({ note, _id }) => (
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

