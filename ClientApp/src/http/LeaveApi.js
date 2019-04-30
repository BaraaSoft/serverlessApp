import axios from 'axios';

export default axios.create({
    baseURL: 'http://iwids-02/iwowhr_signalr',
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
})

