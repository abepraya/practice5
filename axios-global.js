import axios from 'axios';

const instance = axios.create({
    baseURL:'https://backendtugasakhir.herokuapp.com/data'
})

export default instance;