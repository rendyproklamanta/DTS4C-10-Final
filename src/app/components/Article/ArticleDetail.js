import React from 'react'
import { Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import Newsletter from '../Newsletter'
import ArticleShare from './ArticleShare'

export default function ArticleDetail() {

   const { article } = useParams();

   return (
      <>
         <Row className='pt-5'>
            <div className="col-lg-8">
               <div className="position-relative mb-3">
                  <img className="img-fluid w-100" src="https://unsplash.it/800/400/?image=12" style={{ objectFit: 'cover' }} alt="img" />
                  <div className="overlay position-relative bg-light">
                     <div>
                        <h3 className="mb-3">{article}</h3>
                        <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut
                           magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet
                           amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
                           sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et
                           aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren
                           sit stet no diam kasd vero.</p>
                        <p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores
                           vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit
                           nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore
                           ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et,
                           clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat
                           justo dolore sit invidunt.</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="col-lg-4 pt-3 pt-lg-0">
               <ArticleShare />
               <Newsletter />
            </div>
         </Row>


      </>
   )
}
