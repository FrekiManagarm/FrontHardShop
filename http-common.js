import axios from 'axios';

export default http =  axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        "Content-type": "application/json"
    }
})