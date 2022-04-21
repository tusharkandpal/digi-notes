import axios from "axios";

export const restoreArchiveService = async ({ id, ...note }) => {
  try {
    const { data, status } = await axios.post(
      `/api/archives/restore/${id}`,
      { note },
      {
        headers: {
          authorization: localStorage.getItem("encodedToken"),
        },
      }
    );
    return { data, status };
  } catch (error) {
    console.error("Error restoring archived note");
  }
};


