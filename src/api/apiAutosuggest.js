import axiosClient from "./apiClient";

const apiAutoSuggest = {
    getAll: (params) => {
        const url = '/autosuggest';
        return axiosClient.get(url, {params});
    }
}

export default apiAutoSuggest;