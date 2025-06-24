import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'normalize.css'
import './App.css'

import Header from './components/Header';
import Banner from './components/Banner';
// falta toogle para filtros
import ProjectsFilters from './components/ProjectsFilters';
import ProjectsResults from './components/ProjectsResults';
import About from './components/About';
import Values from './components/Values';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <ProjectsFilters />
        <ProjectsResults />
      </main>
      <About />
      <Values />
      <Footer />
    </>
  );
}

export default App;
