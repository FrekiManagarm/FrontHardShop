import fetch from 'isomorphic-unfetch';

const DeleteAPIData = async (endpoint, dataToSend = null) => {
    const token = localStorage.getItem("token");
    const url = `http://localhost:8000/${endpoint}`

    const settings = {
        method: "DELETE",
        headers: {
            Authorization: "Bearer " + token,
            Accept: 'application/json',
            "Content-Type": "application/json",
        },
        ...(dataToSend
            ? {
                body: JSON.stringify(dataToSend),
            } 
            : null),
    };

    if (token) {
        const response = await fetch(url, settings);

        return response;
    }
}

export default DeleteAPIData;