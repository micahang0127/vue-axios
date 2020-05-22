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

function fetchVehiclesList(){
    return axios.get(`${config.baseUrl}/api/v1/vehicles`)
}

function fetchSubscsList(){
    return axios.get(`${config.baseUrl}/api/v1/subscs`)
}

export {
    fetchProdsList,
    fetchPkgsList,
    fetchVehiclesList,
    fetchSubscsList,
};