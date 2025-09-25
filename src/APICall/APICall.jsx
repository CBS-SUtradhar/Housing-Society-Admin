

// APICall.jsx
import axios from "axios";
import { GetMemberUrl, GetUserlistUrl, LoginUrl, PropertyRegisterUrl, SocietyAdminInvitationUrl, UpdateRegisteredApiUrl,  } from "./URL";

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

export const UpdateRegisteredApi = (payload) => postAPI(UpdateRegisteredApiUrl, payload);
export const SocietyAdminInvitationApi = (payload) => postAPI(SocietyAdminInvitationUrl, payload);

export const GetUserlistApi = (payload) => postAPI(GetUserlistUrl, payload);
export const PropertyRegisterApi = (payload) => postAPI(PropertyRegisterUrl, payload);
  