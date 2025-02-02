import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./app/components/forms/FormLogin";
import Register from "./app/components/forms/FormRegister";
import Profile from "./app/pages/Profile";
import Home from "./app/pages/Home";
import Header from "./app/components/Header";
import Footer from "./app/components/Footer";

import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./app/assets/css/App.css";
import "./app/assets/css/styles.css";
import "./app/assets/css/responsive.css";
import 'font-awesome/css/font-awesome.min.css';
import Dashboard from "./app/pages/Dashboard";
import ArticleDetail from "./app/components/Article/ArticleDetail";
import ArticleList from "./app/components/Article/ArticleList";
import ArticleCategory from "./app/components/Article/ArticleCategory";

const App = () => {

   return (
      <>
         <Router>
            <Header />

            <Container fluid>
               <div className="py-2 py-lg-0 px-lg-5">
                  <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/login" element={<Login />} />
                     <Route path="/register" element={<Register />} />
                     <Route path="/profile" element={<Profile />} />
                     <Route path="/dashboard" element={<Dashboard />} />
                     <Route path="/detail/:article" element={<ArticleDetail />} />
                     <Route path="/search" element={<ArticleList />} />
                     <Route path="/category" element={<ArticleCategory />} />
                     <Route path="*" element={<h1 style={{ textAlign: 'center', marginTop: 200 }}>404 Not Found</h1>} />
                  </Routes>
               </div>
            </Container>

            <Footer />
         </Router>
      </>
   );
};

export default App;
