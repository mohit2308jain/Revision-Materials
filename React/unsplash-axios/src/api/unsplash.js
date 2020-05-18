import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID e2b60740242c85319f0ab6606430c5858ebd3fbf28429742a2610f686d7aec31'
    }
});