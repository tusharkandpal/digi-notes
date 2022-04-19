import axios from "axios";

export const getArchivesService = async () => {
  try {
    const { data, status } = await axios.get("/api/archives", {
      headers: {
        authorization: localStorage.getItem("encodedToken"),
      },
    });
    return { data, status };
  } catch (error) {
    console.error("Error getting archives");
  }
};


