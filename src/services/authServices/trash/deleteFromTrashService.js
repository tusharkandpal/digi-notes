import axios from "axios";

export const deleteFromTrashService = async (id) => {
  try {
    const { data, status } = await axios.delete(`/api/trash/delete/${id}`, {
      headers: {
        authorization: localStorage.getItem("encodedToken"),
      },
    });
    return { data, status };
  } catch (error) {
    console.error("Error deleting note from trash");
  }
};


