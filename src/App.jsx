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

  let metaRobots = document.createElement("meta");
  metaRobots.setAttribute("id", "robots");
  metaRobots.setAttribute("name", "robots");
  metaRobots.setAttribute("content", "noindex");

  let head = document.querySelector('head');

  useEffect(() => {
      // Not display header and footer on Profil Page

      const header = document.querySelector('header');
      const footer = document.querySelector('footer');

      if (location.pathname==="/profil/" || location.pathname==="/profil"){
        header.classList.add("display");
        footer.classList.add("display");
      } else {
        header.classList.remove("display");
        footer.classList.remove("display");
      }

      // No index on legal mentions page

      let robots = document.getElementById('robots');

      if (location.pathname === "/mentions-legales/" && robots == null){
        head.appendChild(metaRobots);
      } else if (location.pathname != "/mentions-legales/" && robots != null) {
        robots.remove();
      } 
  }, [location]);

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/services/" element={<Services/>}></Route>
        <Route path="/portfolio/" element={<Portfolio/>}></Route>
        <Route path="/blog/" element={<Blog/>}></Route>
        <Route path="/contact/" element={<Contact/>}></Route>
        <Route path="/mentions-legales/" element={<LegalMentions/>}></Route>
        <Route path="/profil/" element={<Profil/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
};