import axios from "axios";

export const updateNoteService = async ({ id, ...note }) => {
  try {
    const { data, status } = await axios.post(
      `/api/notes/${id}`,
      { note: { note } },
      {
        headers: {
          authorization: localStorage.getItem("encodedToken"),
        },
      }
    );
    return { data, status };
  } catch (error) {
    console.error("Error updating note");
  }
};


