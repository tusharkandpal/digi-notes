import axios from "axios";

export const addNoteService = async (note) => {
  try {
    const { data, status } = await axios.post(
      "/api/notes",
      { note: { note } },
      {
        headers: {
          authorization: localStorage.getItem("encodedToken"),
        },
      }
    );
    return { data, status };
  } catch (error) {
    console.error("Error adding note");
  }
};

