import http from '../../http-common';

const getAll = () => {
    return http.get(`/PSUs`);
}

const get = (id) => {
    return http.get(`/PSUs/${id}`)
}

const create = (data) => {
    return http.post(`/PSU`, data);
}

const update = (data, id) => {
    return http.put(`/PSUs/${id}`, data)
}

const remove = (id) => {
    http.delete(`/PSUs/${id}`);
}

export default {
    getAll,
    get,
    create,
    update,
    remove
}