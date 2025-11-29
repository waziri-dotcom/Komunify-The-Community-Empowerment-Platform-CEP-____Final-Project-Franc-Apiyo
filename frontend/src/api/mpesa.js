import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const initiateSTKPush = (data) =>
  axios.post(`${API_URL}/api/mpesa/stkpush`, data);
