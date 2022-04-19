import axios from "axios";

export const deleteArchiveService = async (id) => {
  try {
    const { data, status } = await axios.delete(
      `/api/archives/delete/${id}`,
      {
        headers: {
          authorization: localStorage.getItem("encodedToken"),
        },
      }
    );
    return { data, status };
  } catch (error) {
    console.error("Error deleting from archives", error);
  }
};


