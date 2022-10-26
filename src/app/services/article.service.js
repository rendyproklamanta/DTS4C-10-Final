import axios from "axios";

const API_URL = 'https://newsapi.org/v2/';
const API_KEY = process.env.REACT_APP_NEWS_API;

const getAllArticles = () => {
   return axios.get(API_URL);
};

const getTopArticles = () => {
   return axios.get(API_URL + `top-headlines?apiKey=${API_KEY}&country=id`);
};

const getSearchArticles = (query) => {
   return axios.get(API_URL + `everything?q=${query}&apiKey=${API_KEY}&pageSize=12`);
};

const getCategoryArticles = (query) => {
   return axios.get(API_URL + `top-headlines?category=${query}&apiKey=${API_KEY}&pageSize=12&country=id`);
};

const ArticleService = {
   getAllArticles,
   getTopArticles,
   getSearchArticles,
   getCategoryArticles,
}

export default ArticleService;
