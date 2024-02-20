import axios from "axios";

const baseApiUrl = "http://localhost:4000/v1";

//Create User
export const createUser = async (payload) => {
  const createUserEndpoint = `${baseApiUrl}/user/create`;

  const { data: apiResponse } = await axios.post(createUserEndpoint, payload);

  return apiResponse;
};


//Edit User
export const editUser = async (userId, payload) => {
  const editUserEndpoint = `${baseApiUrl}/user/update/${userId}`;
  const { data: apiResponse } = await axios.put(editUserEndpoint, payload);

  return apiResponse;
};


//Get User by Id
export const retrieveUser = async (userId) => {
  const getUserEndpoint = `${baseApiUrl}/user/get/${userId}`;
  const { data: apiResponse } = await axios.get(getUserEndpoint);

  return apiResponse;
};


//Get all Users
export const retrieveAllUsers = async () => {
  const getAllUsersEndpoint = `${baseApiUrl}/user/all`;
  const { data: apiResponse } = await axios.get(getAllUsersEndpoint);

  return apiResponse;
};


//Remove User
export const removeUser = async (userId) => {
    const removeUserEndpoint = `${baseApiUrl}/user/delete/${userId}`;
    const { data: apiResponse } = await axios.delete(removeUserEndpoint);
  
    return apiResponse;
  };
