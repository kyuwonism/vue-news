import axios from 'axios';

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

/**
 * 뉴스 리스트 불러오기
 * 
 * @returns 
 */
const fetchNewsList = () => { return axios.get(`${ config.baseUrl }news/1.json`)  }

/**
 * 구인리스트 가져오기
 * 
 * @returns 
 */
const fetchJobsList = () => { return axios.get(`${ config.baseUrl }jobs/1.json`) }

/**
 * 질문리스트 가져오기
 * 
 * @returns 
 */
const fetchAskList = () => { return axios.get(`${ config.baseUrl }ask/1.json`)}

const fetchUserInfo = username => { return axios.get(`${ config.baseUrl }user/${ username }.json`) }

const fetchItemInfo = itemId => { return axios.get(`${ config.baseUrl }item/${ itemId }.json`) }

export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchItemInfo
}