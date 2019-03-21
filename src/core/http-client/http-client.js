import axios from 'axios';
import '../interceptors/http-interceptor';

class HttpClient {

    apiUrl = 'https://swapi.co/api';

    constructor(resource = '') {
        this.resource = resource;
    }

    get(action = '') {
        return axios.get(`${this.apiUrl}/${this.resource}/${action}`, this.config());
    }

    post(action = '', body = {}) {
        return axios.post(`${this.apiUrl}/${this.resource}/${action}`, body, this.config());
    }

    put(action = '', body = {}) {
        return axios.put(`${this.apiUrl}/${this.resource}/${action}`, body, this.config());
    }

    delete(action = '') {
        return axios.delete(`${this.apiUrl}/${this.resource}/${action}`, body, this.config());
    }

    config() {
        return {

        }
    }

}

export default (resource) => new HttpClient(resource);