import http from '../../http-common';

const getAll = () => {
    return http.get(`/SSDs`);
}

const get = (id) => {
    return http.get(`/SSDs/${id}`);
}

const create = (data) => {
    return http.post(`/SSD`, data);
}

const update = (id, data) => {
    return http.put(`/SSDs/${id}`, data);
}

const remove = (id) => {
    return http.delete(`/SSDs/${id}`);
}

export default {
    getAll,
    get,
    create,
    update,
    remove
}