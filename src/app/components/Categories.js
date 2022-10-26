import React from 'react'
import { Link } from 'react-router-dom'

export default function Categories() {
   return (
      <div className="col-lg-4">
         <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
            <h3 className="m-0">Categories</h3>
         </div>
         <div className="position-relative overflow-hidden mb-3" style={{ height: 80 }}>
            <img className="img-fluid w-100 h-100" src="https://unsplash.it/300/300/?image=7" style={{ objectFit: 'cover' }} alt="img" />
            <Link to="/category?q=business" className="overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none">Business</Link>
         </div>
         <div className="position-relative overflow-hidden mb-3" style={{ height: 80 }}>
            <img className="img-fluid w-100 h-100" src="https://unsplash.it/300/300/?image=8" style={{ objectFit: 'cover' }} alt="img" />
            <Link to="/category?q=technology" className="overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none">Technology</Link>
         </div>
         <div className="position-relative overflow-hidden mb-3" style={{ height: 80 }}>
            <img className="img-fluid w-100 h-100" src="https://unsplash.it/300/300/?image=10" style={{ objectFit: 'cover' }} alt="img" />
            <Link to="/category?q=entertainment" className="overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none">Entertainment</Link>
         </div>
         <div className="position-relative overflow-hidden" style={{ height: 80 }}>
            <img className="img-fluid w-100 h-100" src="https://unsplash.it/300/300/?image=11" style={{ objectFit: 'cover' }} alt="img" />
            <Link to="/category?q=sports" className="overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none">Sports</Link>
         </div>
      </div>
   )
}
