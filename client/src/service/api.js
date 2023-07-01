import axios from "axios";

const URL = `http://localhost:8000`;

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (err) {
    console.log("Error while calling add User Api", err);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${URL}/all`);
  } catch (err) {
    console.log("Error while calling getUsers API", err);
  }
};

export const getUser = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (err) {
    console.log("Error while calling getUser api", err);
  }
};
export const editUser = async (user, id) => {
  try {
    return await axios.put(`${URL}/${id}`, user);
  } catch (err) {
    console.log("Error while calling editUser api", err);
  }
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (err) {
    console.log("Error while calling deleteUser api", err);
  }
};
