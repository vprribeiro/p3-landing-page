import React, { useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Produtos from './components/Produtos';
import Servicos from './components/Servicos';
import SobreNos from './components/SobreNos';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const inicioRef = useRef<HTMLDivElement>(null);
  const produtosRef = useRef<HTMLDivElement>(null);
  const servicosRef = useRef<HTMLDivElement>(null);
  const sobreNosRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    const element = ref.current;
    if (element) {
      // Obtenha a altura real do cabeçalho no momento do clique
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
      const isMobileView = window.innerWidth <= 768; // Verifica se é mobile

      let offset = 0;
      if (isMobileView && headerHeight > 0) {
        offset = 0;
      }//

      const targetScrollPosition = element.getBoundingClientRect().top + window.scrollY + offset;

      window.scrollTo({
        top: targetScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="App">
      <Header
        headerRef={headerRef}
        inicioRef={inicioRef}
        produtosRef={produtosRef}
        servicosRef={servicosRef}
        sobreNosRef={sobreNosRef}
        footerRef={footerRef}
        scrollToSection={scrollToSection}
      />
      <div ref={inicioRef}>
        <Inicio/>
      </div>
      <div ref={produtosRef}>
        <Produtos/>
      </div>
      <div ref={servicosRef}>
        <Servicos/>
      </div>
      <div ref={sobreNosRef}>
        <SobreNos/>
      </div>
      <div ref={footerRef}>
        <Footer/>
      </div>
      
      <ScrollToTop scrollOffset={50} />

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;