import http from "../../http-common";

const getAll = () => {
    return http.get(`/CPUs`)
}

const get = (id) => {
    return http.get(`/CPUs/${id}`);
}

const create = data => {
    return http.post(`/CPU`, data);
}

const update = (id, data) => {
    return http.put(`/CPUs/${id}`, data);
}

const remove = (id) => {
    return http.delete(`/CPUs/${id}`);
}

export default {
    getAll,
    get,
    create,
    update,
    remove
}