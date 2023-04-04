import axios from 'axios';
import { store } from '../store/index.js';

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

axios.interceptors.request.use(config => {
    store.commit('LOADING_STATUS', true);
    return config;
});

axios.interceptors.response.use( config => {
    store.commit('LOADING_STATUS', false);
    return config;
})

/**
 * 뉴스 리스트 불러오기
 * 
 * @returns 
 */
const fetchNewsList = () => { 
    return axios.get(`${ config.baseUrl }news/1.json`) 
 }

/**
 * 구인리스트 가져오기
 * 
 * @returns 
 */
const fetchJobsList = () => { 
    console.log('api index.js ==> ' + config.baseUrl )
    return axios.get(`${ config.baseUrl }jobs/1.json`) 
}

/**
 * 질문리스트 가져오기
 * 
 * @returns 
 */
const fetchAskList = () => { return axios.get(`${ config.baseUrl }ask/1.json`)}

const fetchUserInfo = username => { return axios.get(`${ config.baseUrl }user/${ username }.json`) }

const fetchItemInfo = itemId => { return axios.get(`${ config.baseUrl }item/${ itemId }.json`) }

async function fetchList(pageName) { 
    try {
        return await axios.get(`${config.baseUrl}${pageName}/1.json`)
    } catch(error) {
        console.log(error);
    }
}

export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchItemInfo,
    fetchList,
}