import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config({ encoding: 'utf-8' });

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`
    }
});