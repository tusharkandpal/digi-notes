import axios from "axios";

export const addArchiveService = async ({ id, ...note }) => {
  try {
    const { data, status } = await axios.post(
      `/api/notes/archives/${id}`,
      { note },
      {
        headers: {
          authorization: localStorage.getItem("encodedToken"),
        },
      }
    );
    return { data, status };
  } catch (error) {
    console.error("Error adding to archives");
  }
};


