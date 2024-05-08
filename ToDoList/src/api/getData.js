import axios from "axios";
const BASE_URL = "https://backendtodolist20240508180436.azurewebsites.net";
export const getTasksAll = async () => {
    try {
        return (await axios.get(`${BASE_URL}/api/Tareas`)).data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const createTask = async (object) => {
    try {
        return (await axios.post(`${BASE_URL}/api/Tareas`,object)).data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const updateTaskDB = async (task,id) => {
    try {
        return (await axios.put(`${BASE_URL}/api/Tareas/${id}`,task)).status;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const updateTaskStatus = async (task,id) => {
    try {
        return (await axios.put(`${BASE_URL}/api/Tareas/${id}/status`,task)).data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const findTask = async () => {
    try {
        return (await axios.get(`${BASE_URL}/api/Tareas`)).data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const deleteTask = async (id) => {
    try {
        return (await axios.delete(`${BASE_URL}/api/Tareas/${id}`)).status;
    } catch (error) {
        console.error(error);
        throw error;
    }
}