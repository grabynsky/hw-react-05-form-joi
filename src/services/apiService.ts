import axios from 'axios';
import {baseURL} from "../components/constants/urls";

const axiosInstance = axios.create({baseURL})

export {
    axiosInstance,
}