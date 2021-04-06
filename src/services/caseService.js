import http from '../../http-common';

const getAll = () => {
    return http.get(`/Boitiers`);
};

const get = (id) => {
    return http.get(`/Boitiers/${id}`);
}

const create = data => {
    return http.post(`/Boitier`, data);
};

const update = (id, data) => {
    return http.put(`/Boitiers/${id}`, data);
}

const remove = (id) => {
    return http.delete(`/Boitiers/${id}`);
}

export default {
    getAll,
    get,
    create,
    update,
    remove
}