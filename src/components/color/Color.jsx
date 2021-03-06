import "./Color.css";
import { useNotes, useDisplay } from "../../context/context";

export const Color = () => {
  const {
    displayState: { colorToggle },
  } = useDisplay();
  const colors = [
    "#ffc7c7",
    "#f0e0ff",
    "#ffefda",
    "#d3ffd3",
    "#e2e2e2",
    "#fff4b3",
    "#ffcadb",
    "#c4fff9",
  ];
  const { noteDispatch } = useNotes();

  return (
    <div
      className="color-palette"
      style={{ display: colorToggle ? "flex" : "none" }}
    >
      {colors.map((color) => (
        <span
          key={color}
          className="color"
          style={{ backgroundColor: color }}
          onClick={() =>
            noteDispatch({
              type: "SET_COLOR",
              payload: { color },
            })
          }
        ></span>
      ))}
    </div>
  );
};


