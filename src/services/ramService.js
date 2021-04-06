import http from '../../http-common';

const getAll = () => {
    return http.get(`/RAMs`);
}

const get = (id) => {
    return http.get(`/RAMs/${id}`);
}

const create = (data) => {
    return http.post(`/RAM`, data);
}

const update = (data, id) => {
    return http.put(`/RAMs/${id}`, data);
}

const remove = (id) => {
    return http.delete(`/RAMs/${id}`);
}

export default {
    getAll,
    get,
    create,
    update,
    remove
}