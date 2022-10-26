import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ArticleService from '../services/article.service'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonHolder = () => {
   return (
      <>
         <Skeleton count={4} width="100%" height='80px' baseColor='#eeacac' />
      </>
   )
}

const Article = ({ article }) => {
   return (
      <div className="d-flex mb-3">
         <img src={article.image.small} alt="img" style={{ width: 100, height: 100, objectFit: 'cover' }} />
         <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{ height: 100 }}>
            <div className="mb-1" style={{ fontSize: 13 }}>
               <strong>{article.categories}</strong>
            </div>
            <Link to="" className='h6 m-0 text-break text-break-line-2'>{article.title}</Link>
         </div>
      </div>
   )
}

export default function Trending() {

   const [articles, setArticles] = useState([])

   useEffect(() => {
      (async () => {
         try {
            const response = await ArticleService.getNewsCnbc()
            setArticles(response.data.data)
         } catch (error) {
            console.log(error);
         }
      })();
   }, [])

   return (
      <div className="pb-3">
         <div className="bg-light py-2 px-4 mb-3">
            <h3 className="m-0">Trending</h3>
         </div>

         {
            articles.length ?
               articles.slice(0, 4).map((article, i) => (
                  <Article article={article} key={i} />
               )) : <SkeletonHolder />
         }

      </div>
   )
}
