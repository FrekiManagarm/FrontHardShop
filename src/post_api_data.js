import fetch from 'isomorphic-unfetch'
import Cookies from "js-cookie";

const PostAPIData = async (endpoint, dataToSend = {}) => {
    const token = Cookies.get("token");
    const url = `http://localhost:8000/${endpoint}`;

    const settings = {
        method: "POST",
        headers: {
            Authorization: "Bearer " + token,
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToSend),
    };

    if (token) {
        const response = await fetch(url, settings);

        if (!response.ok) return response;

        const json = await response.json();

        return json;
    }
}

export default PostAPIData