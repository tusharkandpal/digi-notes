import { useState } from "react";
import { useNotes } from "../../context/context";
import "./Label.css";

export const Label = ({ viewPopup }) => {
  const [tag, setTag] = useState("");
  const { noteDispatch } = useNotes();

  const addTagHandler = (e) => {
    if (e.keyCode === 13) {
      noteDispatch({ type: "SET_TAG", payload: { tag } });
      setTag("");
    }
  };

  return (
    <div
      className="label-palette"
      style={{ display: viewPopup === "label" ? "flex" : "none" }}
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

