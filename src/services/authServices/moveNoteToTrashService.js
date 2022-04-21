import axios from "axios";

export const moveNoteToTrashService = async ({ id, ...note }) => {
  try {
    const { data, status } = await axios.post(
      `/api/notes/trash/${id}`,
      { note },
      {
        headers: {
          authorization: localStorage.getItem("encodedToken"),
        },
      }
    );
    return { data, status };
  } catch (error) {
    console.error("Error moving note to trash", error);
  }
};


