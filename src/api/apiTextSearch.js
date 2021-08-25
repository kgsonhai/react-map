import axiosClient from "./apiClient";

const apiTextSearch = {
    getAll: (params) => {
        const url = '/place/text-search';
        return axiosClient.get(url, {params});
    }
}

export default apiTextSearch;