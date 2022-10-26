import React, { useEffect, useState } from 'react'
import { Navigate, useSearchParams } from 'react-router-dom';
import ArticleService from '../../services/article.service';
import Article from './Article';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonHolder = () => {
   return (
      <>
         <div className="col-md-3 mb-3">
            <Skeleton count={2} width="100%" height='200px' baseColor='#eeacac' />
         </div>
         <div className="col-md-3 mb-3">
            <Skeleton count={2} width="100%" height='200px' baseColor='#eeacac' />
         </div>
         <div className="col-md-3 mb-3">
            <Skeleton count={2} width="100%" height='200px' baseColor='#eeacac' />
         </div>
         <div className="col-md-3 mb-3">
            <Skeleton count={2} width="100%" height='200px' baseColor='#eeacac' />
         </div>
      </>
   )
}
export default function ArticleCategory() {

   const [articles, setArticles] = useState([]);

   const [searchParams] = useSearchParams();
   const query = searchParams.get('q');
   //console.log(query);

   useEffect(() => {
      (async () => {
         try {
            const response = await ArticleService.getCategoryArticles(query)
            //console.log(response.data);
            setArticles(response.data.articles)
         } catch (error) {
            console.log(error);
         }
      })();
   }, [searchParams])

   if (!query) {
      return <Navigate to="/" />;
   }

   return (
      <div className="row mt-4">
         <div className="col-12">
            <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
               <h3 className="m-0">Category : {query} | Total Result Found : {articles.length}</h3>
            </div>
         </div>
         {
            articles.length ?
               articles.map((article, i) => (
                  <Article article={article} key={i} classes="col-lg-3" />
               )) : <SkeletonHolder />
         }
      </div>
   )
}