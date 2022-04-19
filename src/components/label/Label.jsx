import { useState } from "react";
import { useNotes, useDisplay } from "../../context/context";
import "./Label.css";

export const Label = () => {
  const {
    displayState: { labelToggle },
  } = useDisplay();
  const [tag, setTag] = useState("");
  const { noteDispatch } = useNotes();

  const addTagHandler = (e) => {
    if (tag && e.keyCode === 13) {
      noteDispatch({ type: "SET_TAG", payload: { tag } });
      setTag("");
    }
  };

  return (
    <div
      className="label-palette"
      style={{ display: labelToggle ? "flex" : "none" }}
    >
      <input
        type="text"
        value={tag}
        className="input-label"
        placeholder="enter a new tag"
        onKeyDown={addTagHandler}
        onChange={(e) => setTag(e.target.value)}
      ></input>
    </div>
  );
};

