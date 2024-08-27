import './App.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import LegalMentions from './pages/LegalMentions.jsx';
import Profil from './pages/Profil.jsx';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function App() {

  const location = useLocation();
  // Not display header and footer on Profil Page
  useEffect(() => {
      let header = document.querySelector('header');
      let footer = document.querySelector('footer');
      console.log(location.pathname);
      if (location.pathname==="/profil"){
          if (header!= null) {
              header.classList.add("display");
          }
          if (footer!= null) {
              footer.classList.add("display");
          }
      } else {
          header.classList.remove("display");
          footer.classList.remove("display");
      }
  }, [location]);

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/mentions-legales" element={<LegalMentions/>}></Route>
        <Route path="/profil" element={<Profil/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
};