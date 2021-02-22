import axios from 'axios';
export interface UnsplashImage {
    [x: string]: any;
    id: string;
    alt_description: string;
    urls: {
        regular: string;
    };
}

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`
    }
});
