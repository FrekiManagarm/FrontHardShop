import fetch from 'isomorphic-unfetch'

const fetchData = async (url, dataToSend = {}) => {
    const endpoint = `http://localhost:8000/api/${url}`;

    const settings = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToSend),
    }

    const response = await fetch(endpoint, settings);

    if (!response.ok) return response;

    const json = await response.json();

    return json;
}

export default fetchData;