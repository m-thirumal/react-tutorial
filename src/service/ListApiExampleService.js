import axios from 'axios';

const REST_API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = () => {
    return axios.get(REST_API_URL);
}