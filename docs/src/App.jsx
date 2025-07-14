import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'normalize.css'
import './App.css'

// routing:
import { Routes, Route, useLocation } from 'react-router-dom';

import ProjectPage from './components/pages/ProjectPage';
import ErrorPage from './components/pages/ErrorPage';

// sections:
import Header from './components/Header';
import Banner from './components/Banner';

import ProjectsMain from './components/ProjectsMain';

// falta toogle para filtros
import ProjectsFilters from './components/ProjectsFilters';
import ProjectsResults from './components/ProjectsResults';

import About from './components/About';
import Values from './components/Values';
import Footer from './components/Footer';

// componentes:
import ProjectCard from './components/ProjectCard'

// utils:
import { FilterProvider } from './app/store';


function App() {

  const location = useLocation();

  const isMainPage = location.pathname === "/";
  const isProjectPage = location.pathname.startsWith("/projects/");
  /*const isErrorPage = location.pathname !== '/' && !location.pathname.startsWith('/projects/');*/

  const showLayout = isMainPage || isProjectPage;

  return (
    <>
      {/* conteúdo comum */}
      {showLayout && <Header />}


      <Routes>
        {/* main page */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <ProjectsMain />
              <About />
              <Values />
            </>
          }
        />

        {/* project page */}
        <Route
          path="/projects/:slug"
          element={<ProjectPage />}
        />

        {/* error page */}
        <Route
          path="*"
          element={<ErrorPage />}
        />

      </Routes>
      {/* conteúdo comum */}
      {showLayout && <Footer />}
    </>
  );
}

export default App;
