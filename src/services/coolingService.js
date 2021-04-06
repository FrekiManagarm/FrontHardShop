import http from '../../http-common';

const getAll = () => {
    return http.get(`/Coolings`);
}

const get = (id) => {
    return http.get(`/Coolings/${id}`);
}

const create = data => {
    return http.post(`/Cooling`, data);
}

const update = (id, data) => {
    return http.put(`/Coolings/${id}`, data);
}

const remove = (id) => {
    return http.delete(`/Coolings/${id}`);
}

export default {
    getAll,
    get,
    create,
    update,
    remove
}