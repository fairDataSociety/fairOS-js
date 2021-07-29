import axios from "axios";
// todo progress support
// todo supported platforms: browser, node, react, react native
// todo how to init?
// todo self-documented code with possibility to create docs page

export default class FairOS {
    baseURL;

    constructor(baseURL = 'http://localhost:9090/v1/') {
        this.baseURL = baseURL;
    }

    get(apiMethod, data = {}) {
        return axios({
            baseURL: this.baseURL,
            url: apiMethod,
            method: 'GET',
            data,
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
    }

    post(apiMethod, data = {}) {
        return axios({
            baseURL: this.baseURL,
            url: apiMethod,
            method: 'POST',
            data,
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
    }

    userLogin(username, password) {
        return this.post('user/login', {
            user_name: username,
            password: password,
        });
    }

    podLs() {
        return this.get('pod/ls');
    }

    test() {
        return 'FairOS test OK';
    }
}


