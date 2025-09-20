// import axios from "axios";
// import { RegisteredUrl } from "./URL";



// const postAPI = async (url, body) => {
//   const resp = await axios.post(url, body);
//   return resp.data;
// };

// export const RegisteredApi = (payload) => postAPI(RegisteredUrl, payload);



// APICall.jsx
import axios from "axios";
import { GetMemberUrl, GetSocietiesUrl, LoginUrl, RegisteredUrl } from "./URL";

const postAPI = async (url, body) => {
  console.log("POST",url, body);
  const resp = await axios.post(url, body);
  return resp.data;
};



export const LoginApi = (payload) => postAPI(LoginUrl, payload);

export const GetMemberApi = async (payload) => {
  const resp = await axios.post(GetMemberUrl, payload);
  return resp.data;
};
// export const GetSocietiesApi = async (payload) => {
//   const resp = await axios.post(GetSocietiesUrl, payload);
//   return resp.data;
// };


export const GetSocietiesApi = async (payload = {}) => {
  try {
    const resp = await axios.post(GetSocietiesUrl, payload);
    return resp.data; // returns the data directly
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
};

export const RegisteredApi = (payload) => postAPI(RegisteredUrl, payload);