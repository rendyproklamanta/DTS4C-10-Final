import React, { useEffect, useState } from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Row } from 'react-bootstrap';
import { options1 } from './CarouselOptions';
import Categories from './Categories';
import ArticleService from '../services/article.service';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom';

const SkeletonHolder = () => {
   return (
      <>
         <Skeleton count={1} width="100%" height='430px' baseColor='#eeacac' />
      </>
   )
}

const Article = ({ article }) => {
   return (
      <div className="position-relative overflow-hidden" style={{ height: 435 }}>
         <img className="img-fluid h-100" src={article.image.large} style={{ objectFit: 'cover' }} alt="" />
         <div className="overlay">
            <strong className="mb-1 text-danger">{article.categories}</strong>
            <Link to="/detail" className="h2 m-0 text-white font-weight-bold text-break text-break-line-2" href>{article.title}</Link>
         </div>
      </div>
   )
}

export default function Hero() {

   const [articles, setArticles] = useState([])

   useEffect(() => {
      (async () => {
         try {
            const response = await ArticleService.getNewsOkezone()
            //console.log(response.data.data);
            setArticles(response.data.data)
         } catch (error) {
            console.log(error);
         }
      })();
   }, [])

   return (
      <Row className='pt-1 pb-2'>
         <div className="col-lg-8 mb-3">
            {articles.length ? (
               <OwlCarousel className="position-relative" {...options1}>
                  {
                     articles.slice(0, 5).map((article, i) => (
                        <Article article={article} key={i} />
                     ))
                  }
               </OwlCarousel>
            ) : <SkeletonHolder />}
         </div>

         <Categories />
      </Row>
   )
}
