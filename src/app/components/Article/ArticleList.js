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
export default function ArticleList() {

   const [articles, setArticles] = useState([]);

   const [searchParams] = useSearchParams();
   const query = searchParams.get('q');
   //console.log(query);

   useEffect(() => {
      (async () => {
         try {
            const response = await ArticleService.getNewsSuara(query)
            //console.log(response.data);
            setArticles(response.data.data)
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
               <h4 className="m-0">Keyword: {query} | Total Result Found : {articles.length}</h4>
            </div>
         </div>
         {
            articles.length ?
               articles.map((article, i) => (
                  <Article article={article} key={i} classes="col-lg-3 col-6" />
               )) : <SkeletonHolder />
         }
      </div>
   )
}
