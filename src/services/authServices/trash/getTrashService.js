import axios from "axios";

export const getTrashService = async () => {
  try {
    const { data, status } = await axios.get("/api/trash", {
      headers: {
        authorization: localStorage.getItem("encodedToken"),
      },
    });
    return { data, status };
  } catch (error) {
    console.error("Error getting trash");
  }
};


