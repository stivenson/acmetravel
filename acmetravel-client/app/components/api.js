import m from 'mithril';
import {Config} from '../config';

const API = {
    config(xhr) {
        xhr.setRequestHeader('X-Requested-With', Config.ID);
        xhr.setRequestHeader('Content-Type', 'application/json');
    },
    configAuth(xhr, token) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    },
    requestConfig(xhr) {
        let token = window.localStorage.getItem('token') || false;
        if (token) {
            API.configAuth(xhr, token);
        }

        API.config(xhr);
    },
    requestUrl(endpoint,version = '') {
        var path = Config.API_URL;
        if(version == '1'){
            path = Config.OLD_API_URL;
        }
        path += '/';
        path += endpoint;

        var venue = API.currentVenue();

        if (venue !== false) {
            path = path.replace(':vid:', venue);
        }

        return path;
    },
    currentVenue() {
        return window.localStorage.getItem('vid');
    },
    setActiveVenue(id){
        window.localStorage.setItem('vid', id);
        console.log('change venue');
        location.reload();
    },
    deleteLocalStorage(){
        console.log('logout');
        window.localStorage.setItem('token',null);
        window.localStorage.setItem('vid',null);
        localStorage.clear();
        location.reload();
    },
    get(endpoint, options) {
        options = options || {};
        var xhr;
        var defaults = {
            method: 'GET',
            url: API.requestUrl(endpoint),
            config: (x) => {
                API.requestConfig(x);
                xhr = x;
            },
            background: true
        };

        var request = m.request(Object.assign({}, defaults, options));
        request.xhr = xhr;

        return request;
    },
    post(endpoint, payload, options) {
        options = options || {};
        var defaults = {
            method: 'POST',
            url: API.requestUrl(endpoint),
            config: API.requestConfig,
            data: payload,
            background: true
        };

        return m.request(Object.assign({}, defaults, options));
    },
    put(endpoint, payload, options) {
        options = options || {};
        var defaults = {
            method: 'PUT',
            url: API.requestUrl(endpoint),
            config: API.requestConfig,
            data: payload,
            background: true
        };

        return m.request(Object.assign({}, defaults, options));
    },
    patch(endpoint, payload, options) {
        options = options || {};
        
        var defaults = {
            method: 'PATCH',
            url: API.requestUrl(endpoint),
            config: API.requestConfig,
            data: payload,
            background: true
        };

        return m.request(Object.assign({}, defaults, options));
    },
    delete(endpoint, payload, options) {
        options = options || {};
        payload = payload || {};
        var defaults = {
            method: 'DELETE',
            url: API.requestUrl(endpoint),
            config: API.requestConfig,
            data: payload,
            background: true
        };

        return m.request(Object.assign({}, defaults, options));
    }
};

export default API;
