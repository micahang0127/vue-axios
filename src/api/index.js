import axios from 'axios';

const config = {
    baseUrl: 'http://192.168.0.189:8082'
};

function fetchProdsList(){
    return axios.get(`${config.baseUrl}/api/v1/prods`);
}

function fetchPkgsList(){
    return axios.get(`${config.baseUrl}/api/v1/pkgs`);
}

export {
    fetchProdsList,
    fetchPkgsList,
};