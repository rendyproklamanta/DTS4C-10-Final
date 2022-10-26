import React, { useEffect, useState } from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { options3 } from '../components/CarouselOptions';
import ArticleService from '../services/article.service';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom';

const SkeletonHolder = () => {
   return (
      <>
         <Skeleton count={1} width="100%" height='75px' baseColor='#eeacac' />
      </>
   )
}

const Article = ({ article }) => {
   return (
      <div className="d-flex">
         <img src={article.image.small} style={{ width: 80, height: 80, objectFit: 'cover' }} alt={article.title} />
         <div className="d-flex align-items-center bg-light px-3" style={{ height: 80 }}>
            <Link to="/detail" className="text-secondary font-weight-semi-bold text-break text-break-line-2" href>{article.title}</Link>
         </div>
      </div>
   )
}

export default function TopNews() {

   const [articles, setArticles] = useState([])

   useEffect(() => {
      (async () => {
         try {
            const response = await ArticleService.getNewsCnn()
            //console.log(response.data.data);
            setArticles(response.data.data)
         } catch (error) {
            console.log(error);
         }
      })();
   }, [])

   return (
      <OwlCarousel className="py-4 position-relative" {...options3}>
         {
            articles.length ?
               articles.slice(0, 5).map((article, i) => (
                  <Article article={article} key={i} />
               )) : <SkeletonHolder />
         }
      </OwlCarousel>
   )
}
