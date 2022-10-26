import axios from "axios";

const API_KEY_NEWSAPI = process.env.REACT_APP_NEWSAPI;
const API_KEY_MEDIASTACK = process.env.REACT_APP_MEDIASTACK;

const API_URL_NEWSAPI = 'https://newsapi.org/v2/';
const API_URL_MEDIASTACK = 'https://api.mediastack.com/v1/news/';
const API_URL_REPUBLIKA = 'https://berita-indo-api.vercel.app/v1/republika-news/';
const API_URL_OKEZONE = 'https://berita-indo-api.vercel.app/v1/okezone-news/';
const API_URL_CNN = 'https://berita-indo-api.vercel.app/v1/cnn-news/';
const API_URL_CNBC = 'https://berita-indo-api.vercel.app/v1/kumparan-news/';
const API_URL_SUARA = 'https://berita-indo-api.vercel.app/v1/suara/';

const getNewsRepublika = (type = '') => {
   return axios.get(API_URL_REPUBLIKA + type);
};

const getNewsOkezone = (type = '') => {
   return axios.get(API_URL_OKEZONE + type);
};

const getNewsCnn = (type = '') => {
   return axios.get(API_URL_CNN + type);
};

const getNewsCnbc = (type = '') => {
   return axios.get(API_URL_CNBC + type);
};

const getNewsSuara = (type = '') => {
   return axios.get(API_URL_SUARA + type);
};

const getTopArticles = () => {
   return axios.get(API_URL_NEWSAPI + `top-headlines?apiKey=${API_KEY_NEWSAPI}&country=id`);
};

const getSearchArticles = (query) => {
   return axios.get(API_URL_NEWSAPI + `everything?q=${query}&apiKey=${API_KEY_NEWSAPI}&pageSize=12`);
};

const getCategoryArticles = (query) => {
   return axios.get(API_URL_NEWSAPI + `top-headlines?category=${query}&apiKey=${API_KEY_NEWSAPI}&pageSize=12&country=id`);
};

const ArticleService = {
   getNewsRepublika,
   getTopArticles,
   getSearchArticles,
   getCategoryArticles,
   getNewsOkezone,
   getNewsCnn,
   getNewsCnbc,
   getNewsSuara,
}

export default ArticleService;
