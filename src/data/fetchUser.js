import fetch from 'isomorphic-unfetch';

const fetchUser = async (endpoint, token) => {
    const url = `http://localhost:8000/${endpoint}`;

    const settings = {
        method: "GET",
        headers: {
            Authorization: "Bearer " + token,
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }

    if (token) {
        const response = await fetch(url, settings);

        if (!response.ok) return response;

        const json = await response.json();

        return json;
    }
}

export default fetchUser
