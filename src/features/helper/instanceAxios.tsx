import axios from "axios";



export const instanceAxios = axios.create({
    baseURL:"https://dummyjson.com/",
})