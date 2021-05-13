import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ema-john009.herokuapp.com' // The api url
});

export default instance;