import axiosClient from "./apiClient";

const apiGeocode = {
    getAll: (params) => {
        const url = "/v2/geocode";
        return axiosClient.get(url, { params });
    },
};

export default apiGeocode;
