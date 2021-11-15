import axios from 'axios'

const url = "http://localhost:8000"

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`)
}

export const addUser = async (user) => {
    return await axios.post(`${url}/add`, user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}

export const editUser = async ( user) => {
    console.log("edit uiser : ", user);
    return await axios.put(`${url}/EditUser`, user);
}