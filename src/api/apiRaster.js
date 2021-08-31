import axiosClient from "./apiClient";

const apiRaster = {
    getAll: (params) => {
        const url = '/tile/raster';
        return axiosClient.get(url, { params });
    }
}

export default apiRaster;