import axios from "axios";

export const restoreFromTrashService = async ({ id, ...note }) => {
  try {
    const { data, status } = await axios.post(
      `/api/trash/restore/${id}`,
      { note },
      {
        headers: {
          authorization: localStorage.getItem("encodedToken"),
        },
      }
    );
    return { data, status };
  } catch (error) {
    console.error("Error restoring note from trash");
  }
};


