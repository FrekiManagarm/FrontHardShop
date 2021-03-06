import fetch from 'isomorphic-unfetch';

const GetAPIData = (url) => {
    const endpoint = `http://localhost:8000/api/${url}`

    const settings = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }

    return fetch(endpoint, settings)
        .then(res => res.json())
        .then(data => {
            return data
        });
}

export default GetAPIData;