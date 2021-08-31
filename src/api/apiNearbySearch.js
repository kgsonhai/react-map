import axiosClient from "./apiClient";

const apiNearbySearch = {
    getAll: (params) => {
        const url = '/place/nearby-search';
        return axiosClient.get(url, { params });
    }
}

export default apiNearbySearch;