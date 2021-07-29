import axios from "axios";
// todo progress support
// todo supported platforms: browser, node, react, react native
// todo how to init?
// todo self-documented code with possibility to create docs page

export default class FairOS {
    baseURL = 'https://fairos.fairdatasociety.org/v1/';

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

    login(username, password) {
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


