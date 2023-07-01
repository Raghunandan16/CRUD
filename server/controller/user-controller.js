import { request, response } from "express";
import User from "../Schema/user-schema.js";

export const addUser = async (request, respone) => {
  const user = request.body;
  const newUser = new User(user);
  console.log(user);

  try {
    await newUser.save();
    respone.status(201).json(newUser);
  } catch (error) {
    respone.status(409).json({ message: error.message });
  }
};

export const getUsers = async (request, response) => {
  try {
    const users = await User.find({});
    response.status(200).json(users);
  } catch (err) {
    response.status(404).json({ message: err.message });
  }
};

export const getUser = async (request, response) => {
  try {
    /* const user = await User.find({ _id: request.params.id }); */
    const user = await User.findById(request.params.id);
    response.status(200).json(user);
  } catch (err) {
    response.status(404).json({ message: err.message });
  }
};

export const editUser = async (request, response) => {
  const user = request.body;
  const editUser = new User(user);
  try {
    await User.updateOne({ _id: request.params.id }, editUser);
    response.status(201).json(editUser);
  } catch (err) {
    response.status(409).json({ message: err.message });
  }
};

export const deleteUser = async (request, response) => {
  try {
    await User.deleteOne({ _id: request.params.id });
    respone.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    response.status(409).json({ message: err.message });
  }
};
