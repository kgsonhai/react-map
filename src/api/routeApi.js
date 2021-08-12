import { useSelector } from "react-redux";
import axiosClient from "./apiClient";

const apiRoute = {
    getAll: (params) => {
        const url = '/route';
        return axiosClient.get(url, {params});
    }
}

export default apiRoute;