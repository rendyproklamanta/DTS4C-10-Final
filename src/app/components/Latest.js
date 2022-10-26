import React, { useEffect, useState } from 'react'
import ArticleService from '../services/article.service'
import Article from './Article/Article'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonHolder = () => {
   return (
      <>
         <div className="col-4 mb-2">
            <Skeleton count={2} width="100%" height='180px' baseColor='#eeacac' />
         </div>
         <div className="col-4 mb-2">
            <Skeleton count={2} width="100%" height='180px' baseColor='#eeacac' />
         </div>
         <div className="col-4 mb-2">
            <Skeleton count={2} width="100%" height='180px' baseColor='#eeacac' />
         </div>
         <div className="col-4 mb-2">
            <Skeleton count={2} width="100%" height='180px' baseColor='#eeacac' />
         </div>
         <div className="col-4 mb-2">
            <Skeleton count={2} width="100%" height='180px' baseColor='#eeacac' />
         </div>
         <div className="col-4 mb-2">
            <Skeleton count={2} width="100%" height='180px' baseColor='#eeacac' />
         </div>
      </>
   )
}

export default function Latest() {

   const [articles, setArticles] = useState([])
   const [isLoaded, setIsLoaded] = useState(false)

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await ArticleService.getNewsRepublika()
            //console.log(response.data.data);
            setArticles(response.data.data)
            setIsLoaded(true)
         } catch (error) {
            console.log(error);
            setIsLoaded(false)
         }
      }
      fetchData()
   }, [])


   return (

      <div className="row">
         <div className="col-12">
            <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
               <h3 className="m-0">Latest News</h3>

            </div>
         </div>
         {
            articles.length ?
               articles.slice(0, 6).map((article, i) => (
                  <Article article={article} key={i} classes="col-lg-4" />
               )) : <SkeletonHolder />
         }

      </div>

   )
}
