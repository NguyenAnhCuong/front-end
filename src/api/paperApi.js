import axiosClient from "./axiosClient";

const paperApi = {
  getAll(params) {
    //params:_page,_limit
    const url = "/papers";
    return axiosClient.get(url, { params });
  },
  getById(id) {
    const url = `/papers/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/papers";
    return axiosClient.post(url, data);
  },
  update(id, data) {
    const url = `/papers/${id}`;
    return axiosClient.put(url, data);
  },
  remove(id) {
    const url = `/papers/${id}`;
    return axiosClient.delete(url);
  },
};
export default penApi;
