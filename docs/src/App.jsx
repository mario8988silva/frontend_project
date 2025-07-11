import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'normalize.css'
import './App.css'

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
  return (
    <>
      <Header />
      <Banner />
      <ProjectsMain />
      <About />
      <Values />
      <Footer />
    </>
  );
}

export default App;
