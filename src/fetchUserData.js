import fetch from 'isomorphic-unfetch';

const fetchUserData = async (endpoint, dataToSend = {}) => {
    const url = `http://localhost:8000/${endpoint}`;

    const settings = {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
            "Set-Cookie": "Same-Site=none, Secure"
        },
        body: JSON.stringify(dataToSend)
    }

    const response = await fetch(url, settings);

    if (!response.ok) return response;

    const json = await response.json();

    return json;
}

export default fetchUserData