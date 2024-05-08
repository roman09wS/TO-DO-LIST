import axios from "axios";
const BASE_URL = "";
export const getTasksAll = async () => {
    try {
        return (await axios.get("https://localhost:7090/api/Tareas")).data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const createTask = async (object) => {
    try {
        return (await axios.post("https://localhost:7090/api/Tareas",object)).data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const updateTaskDB = async (task,id) => {
    try {
        return (await axios.put(`https://localhost:7090/api/Tareas/${id}`,task)).status;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const updateTaskStatus = async (task,id) => {
    try {
        return (await axios.put(`https://localhost:7090/api/Tareas/${id}/status`,task)).data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const findTask = async () => {
    try {
        return (await axios.get("https://localhost:7090/api/Tareas")).data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const deleteTask = async (id) => {
    try {
        return (await axios.delete(`https://localhost:7090/api/Tareas/${id}`)).status;
    } catch (error) {
        console.error(error);
        throw error;
    }
}