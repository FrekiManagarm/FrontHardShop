import http from '../../http-common';

const getAll = () => {
    return http.get(`/CarteMeres`);
}

const get = (id) => {
    return http.get(`/CarteMeres/${id}`);
}

const create = data => {
    return http.post(`/CarteMere`, data);
}

const update = (data, id) => {
    return http.put(`/CarteMeres/${id}`, data)
}

const remove = (id) => {
    return http.delete(`/CarteMere/${id}`);
}

export default {
    getAll,
    get,
    create,
    update,
    remove
}