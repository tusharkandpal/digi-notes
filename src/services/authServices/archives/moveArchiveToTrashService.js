import axios from "axios";

export const moveArchiveToTrashService = async ({ id, ...note }) => {
  try {
    const { data, status } = await axios.post(
      `/api/archives/trash/${id}`,
      { note },
      {
        headers: {
          authorization: localStorage.getItem("encodedToken"),
        },
      }
    );
    return { data, status };
  } catch (error) {
    console.error("Error moving from archives to trash", error);
  }
};


