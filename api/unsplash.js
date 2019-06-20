    import axios from 'axios';

    export default axios.create({
        baseURL:'https://api.unsplash.com/',
        headers: {
        Authorization:'Client-ID 4843327609af815bf521e45ef1b5c85c1dd79bee0989988c867c096b2203d533'
        }
    });