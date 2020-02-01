import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-11ccf.firebaseio.com/'
});

export default instance;