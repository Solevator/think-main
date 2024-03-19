import axios from "axios";

const instance = axios.create({
  baseURL: "http://backend-url",
  headers: { "Content-Type": "application/json" },
});

export const fetchUsers = async () => {
  try {
    const response = await instance.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users", error);
    throw error;
  }
};
