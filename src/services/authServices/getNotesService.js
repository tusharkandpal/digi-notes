import axios from "axios";

export const getNotesService = async () => {
  try {
    const { data, status } = await axios.get("/api/notes", {
      headers: {
        authorization: localStorage.getItem("encodedToken"),
      },
    });
    return { data, status };
  } catch (error) {
    console.error("Error getting notes");
  }
};


