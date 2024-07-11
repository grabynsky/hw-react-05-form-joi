import {axiosInstance} from "./apiService";
import {urls} from "../components/constants/urls";
import {IRes} from "../types/resType";
import {IPosts} from "../models/IPosts";


const postService = {
    getAll: ():IRes<IPosts[]>=> axiosInstance.get(urls.posts),
    createPost: (data: IPosts): IRes<IPosts> => axiosInstance.post(urls.posts, data),

}

export {
    postService,
}