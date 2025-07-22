import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import logoHeader from "../../assets/header/logo-header.png"
import HamburgerMenu from './HamburgerMenu';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    padding: 10px 15px;
    color: #d5d5d5;
    min-height: 50px;
    img{
        width: 100px;
    }

    @media (max-width: 768px) {
        min-height: 50px; /* Ajuste este valor. Ex: 80px para dar espaço ao botão e ao topo do menu. */
        position: relative; /* Adicionar position relative para o BtnHamburgerMenu absoluto */
        
    }

`
const LogoImagem = styled.img`
    position: absolute;
    width: 100px;
    align-self: flex-start;
`

const DesktopNavigation = styled.nav`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-end;
    ul{
        display: flex;
        list-style: none;
        padding-right: 20px;
    }

    a{
        text-decoration: none;
        color: #d5d5d5;
        padding: 10px 20px;
        border-radius: 5px;
        &:hover{
            color: #1C75BC;
        }
    }
    @media (max-width: 768px) {
        display: none;  /* Oculta em telas menores */
    }
`

interface HeaderProps {
    headerRef: React.RefObject<HTMLElement>; 
    inicioRef: React.RefObject<HTMLDivElement>;
    produtosRef: React.RefObject<HTMLDivElement>;
    servicosRef: React.RefObject<HTMLDivElement>;
    sobreNosRef: React.RefObject<HTMLDivElement>;
    footerRef: React.RefObject<HTMLDivElement>;
    scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  }

function Header({
    headerRef, 
    inicioRef,
    produtosRef,
    servicosRef,
    sobreNosRef,
    footerRef,
    scrollToSection,
}: HeaderProps) {
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

    const handleResize = useCallback(() => {
        setIsMobileView(window.innerWidth <= 768);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    return (
        <HeaderContainer ref={headerRef}>
            <LogoImagem src={logoHeader} alt="Logo P3 Multimarcas"/>

            {isMobileView ? (
                <HamburgerMenu
                    inicioRef={inicioRef}
                    produtosRef={produtosRef}
                    servicosRef={servicosRef}
                    sobreNosRef={sobreNosRef}
                    footerRef={footerRef}
                    scrollToSection={scrollToSection}
                />
                ) : (
                <DesktopNavigation>
                        <ul>
                            <li><a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection(inicioRef); }}>Home</a></li>
                            <li><a href="#produtos" onClick={(e) => { e.preventDefault(); scrollToSection(produtosRef); }}>Produtos</a></li>
                            <li><a href="#servicos" onClick={(e) => { e.preventDefault(); scrollToSection(servicosRef); }}>Serviços</a></li>
                            <li><a href="#sobre-nos" onClick={(e) => { e.preventDefault(); scrollToSection(sobreNosRef); }}>Sobre nós</a></li>
                            <li><a href="#footer" onClick={(e) => { e.preventDefault(); scrollToSection(footerRef); }}>Contatos</a></li>
                        </ul>
                </DesktopNavigation>
                )}
        </HeaderContainer>
    )
}

export default Header;

