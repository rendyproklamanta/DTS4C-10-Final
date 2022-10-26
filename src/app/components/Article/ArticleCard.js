import React from 'react';
import { Link } from 'react-router-dom';
import IconFavorite from '../IconFavorite'

export default function ArticleCard({ article, classes }) {


   const detail = '/detail/' + article.title;

   return (
      <div className={classes}>
         <div className="position-relative mb-3">
            <IconFavorite />
            <img className="img-fluid w-100 article-img" src={article.image.small} style={{ objectFit: 'cover' }} alt="" />
            <div className="overlay position-relative bg-light article-overlay">
               <div className="mb-2" style={{ fontSize: 14 }}>
                  <strong>{article.categories}</strong>
               </div>
               <Link to={detail} className="h6 text-break text-break-line-3">{article.title}</Link>
               <p className="m-0 text-break text-break-line-3">{article.description}</p>
            </div>
         </div>
      </div >
   )
}
