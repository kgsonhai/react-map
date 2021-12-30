import axiosClient from "./apiClient";

const apiGraph = {
    getAll: (params) => {
        const url = '/route/graph';
        return axiosClient.get(url, {params});
    }
}

export default apiGraph;