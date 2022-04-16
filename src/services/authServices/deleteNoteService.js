import axios from "axios";

export const deleteNoteService = async (id) => {
  try {
    const { data, status } = await axios.delete(
      `/api/notes/${id}`,
      {
        headers: {
          authorization: localStorage.getItem("encodedToken"),
        },
      }
    );
    console.log(data, status)
    return { data, status };
  } catch (error) {
    console.error("Error deleting note ", error);
  }
};


