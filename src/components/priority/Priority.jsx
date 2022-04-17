import "./Priority.css";
import { useNotes } from "../../context/context";

export function Priority() {
  const {
    noteState: { priority },
    noteDispatch,
  } = useNotes();
  return (
    <>
      <select
        className="priority-section"
        value={priority}
        onChange={(e) =>
          noteDispatch({
            type: "SET_PRIORITY",
            payload: { priority: e.target.value },
          })
        }
      >
        <option className="priority priority-low">Low</option>
        <option className="priority priority-medium">Medium</option>
        <option className="priority priority-high">High</option>
      </select>
    </>
  );
}
