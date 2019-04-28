import axios from 'axios';

export default axios.create({
    baseURL: 'http://172.168.11.110/iwowhr_signalr'
})

