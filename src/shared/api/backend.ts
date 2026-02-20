import axios from "axios";

const API_BASE_URL = "http://localhost:3001/api";

export const backend = axios.create({
	baseURL: API_BASE_URL
});
