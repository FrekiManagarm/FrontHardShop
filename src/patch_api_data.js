import Cookies from 'js-cookie';
import fetch from 'isomorphic-unfetch';

const PatchAPIData = async (endpoint, dataToSend = {}, stringify = true) => {
    const token = Cookies.get('token');
    const url = `http://localhost:8000/${endpoint}`

    const settings = {
        method: 'PATCH',
        headers: {
            Authorization: 'Bearer ' + token,
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: stringify === true ? JSON.stringify(dataToSend) : dataToSend 
    }

    if (token) {
        const response = await fetch(url, settings);

        if (!response.ok) {
            return response.message;
        }
        const json = await response.json();

        return json;
    }
}

export default PatchAPIData;