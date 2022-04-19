import "./Priority.css";
import { useNotes, useDisplay } from "../../context/context";

export function Priority() {
  const {
    noteState: { priority },
    noteDispatch,
  } = useNotes();
  const { displayDispatch } = useDisplay();

  const priorityClickHandler = () => {
    displayDispatch({
      type: "COLOR_TOGGLE",
      payload: { colorToggle: false },
    });
    displayDispatch({
      type: "LABEL_TOGGLE",
      payload: { labelToggle: false },
    });
  };

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
        onClick={priorityClickHandler}
      >
        <option className="priority priority-low">Low</option>
        <option className="priority priority-medium">Medium</option>
        <option className="priority priority-high">High</option>
      </select>
    </>
  );
}
