import axios from 'axios';
import '../interceptors/http-interceptor';

class HttpClient {

    apiUrl = 'http://localhost:3000';

    constructor(resource = '') {
        this.resource = resource;
    }

    get(action = '', config = this.config()) {
        return axios.get(`${this.apiUrl}/${this.resource}/${action}`, config);
    }

    post(action = '', body = {}, config = this.config()) {
        return axios.post(`${this.apiUrl}/${this.resource}/${action}`, body, config);
    }

    put(action = '', body = {}, config = this.config()) {
        return axios.put(`${this.apiUrl}/${this.resource}/${action}`, body, config);
    }

    delete(action = '', config = this.config()) {
        return axios.delete(`${this.apiUrl}/${this.resource}/${action}`, body, config);
    }

    config() {
        return {

        }
    }

}

export default (resource) => new HttpClient(resource);