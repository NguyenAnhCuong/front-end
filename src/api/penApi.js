import axiosClient from "./axiosClient";

const penApi = {
  getAll(params) {
    //params:_page,_limit
    const url = "/pens";
    return axiosClient.get(url, { params });
  },
  getById(id) {
    const url = `/pens/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/pens";
    return axiosClient.post(url, data);
  },
  update(id, data) {
    const url = `/pens/${id}`;
    return axiosClient.put(url, data);
  },
  remove(id) {
    const url = `/pens/${id}`;
    return axiosClient.delete(url);
  },
};
export default penApi;
