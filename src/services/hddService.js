import http from '../../http-common';

const getAll = () => {
    return http.get(`/HDDs`);
}

const get = (id) => {
    return http.get(`/HDDs/${id}`);
}

const create = data => {
    return http.post(`/HDD`, data);
}

const update = (data, id) => {
    return http.put(`/HDDs/${id}`, data);
}

const remove = id => {
    return http.delete(`/HDDs/${id}`);
}

export default {
    getAll,
    get,
    create,
    update,
    remove
}