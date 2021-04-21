import fetch from 'isomorphic-unfetch';

const GetAPIData = (url) => {
    const endpoint = `http://localhost:8000/${url}`

    const settings = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }

    return fetch(endpoint, settings)
        .then(r => r.json())
        .then(data => {
            return data
        });
}

export default GetAPIData;