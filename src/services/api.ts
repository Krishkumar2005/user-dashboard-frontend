import axios from "axios";
import type { User } from "../types/user";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getUsers = async (): Promise<User[]> => {
  const res = await API.get<User[]>("/users");
  return res.data;
};