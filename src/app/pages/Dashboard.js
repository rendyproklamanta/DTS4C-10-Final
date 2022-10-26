import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const Dashboard = () => {
   const { user: currentUser } = useSelector((state) => state.auth);

   if (!currentUser) {
      return <Navigate to="/login" />;
   }

   return (
      <>

         <div className="jumbotron dashboard mt-4" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/jumbo-dashboard.jpg')` }}>
            <h3>
               <strong className="text-white">Dashboard</strong>
            </h3>
         </div>
         <div className="row">
            <div className="col-12">
               <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
                  <h3 className="m-0">Total Favorite News : 0</h3>
               </div>
            </div>

         </div>

      </>
   );
};

export default Dashboard;
