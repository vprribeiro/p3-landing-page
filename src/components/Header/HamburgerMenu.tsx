import styled, {css} from "styled-components";
import React from "react";
import useHamburgerMenu from "../../hooks/useHamburgerMenu";
import { CgClose } from "react-icons/cg";
import { CgMenu } from "react-icons/cg";


const DivHamburger = styled.div`
    display: flex;
    flex-direction: column; /* Usar column para empilhar ul e botão */
    align-items: flex-end; /* Alinhar o botão à direita */
    width: 100%;

`
// Estilo para a lista de links quando o menu está fechado
const MenuListClosed = css`
    max-height: 0;
    overflow: hidden;
    padding-top: 0;
    padding-bottom: 0; /* Garanta que o padding também seja 0 */
    opacity: 0; /* Adicione opacidade para uma transição mais suave */
    pointer-events: none; /* Desabilite cliques quando escondido */
`;

// Estilo para a lista de links quando o menu está aberto
const MenuListOpen = css`
    max-height: 500px; /* Ajuste este valor conforme a altura máxima esperada da sua lista */
    padding-top: 0px; /* Exemplo: um padding interno para espaçar os links do topo do menu */
    padding-bottom: 10px; /* Exemplo: um padding interno para espaçar os links da base do menu */
    overflow-y: auto;
    opacity: 1; /* Torne visível */
    pointer-events: auto; /* Habilite cliques quando visível */
    transition: max-height 0.3s ease-in-out, padding-top 0.3s ease-in-out, padding-bottom 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;

const MenuUl = styled.ul<{ isOpen: boolean }>`
    width: 100%;
    list-style: none;
    padding-left: 0px;
    margin: 0; /* Remova todas as margens padrão */
    background-color: #231F20; /* Cor de fundo para o menu aberto, se desejar */
    box-shadow: 0 4px 8px rgba(0,0,0,0.2); /* Sombra para destacar o menu */
    position: absolute; 
    top: 100%; /* Posicione abaixo do cabeçalho */
    left: 0;
    right: 0;
    z-index: 99; /* Abaixo do botão, mas acima do conteúdo da página */
    ${props => (props.isOpen ? MenuListOpen : MenuListClosed)}
`;

const MenuLi = styled.li`
    padding: 0.4rem;
    font-size: 22px;
    text-align: center; /* Centraliza o texto do item da lista */
`;

const MenuLink = styled.a`
    text-decoration: none;
    color: #d5d5d5;
    border: 1px solid #d5d5d525;
    border-radius: 15px;
    background-color: #d5d5d511;
    padding: 0.8rem;
    display: block; /* Use block para preencher a largura do li */
    justify-content: center; /* Keep for text alignment */
    cursor: pointer;
    &:hover{
        color: #1C75BC;
    }
`;

const BtnHamburgerMenu = styled.button`
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-self: flex-end;
    color: #d5d5d5;
    border: none;
    font-size: 50px;
    /* Remover propriedades de posicionamento absoluto aqui, se o HeaderContainer já for relative */
    /* top, right, etc. devem ser tratados pelo layout flexbox do DivHamburger ou no HeaderContainer */
    /* Mantenha absolute se for a única forma de posicioná-lo no canto */
    cursor: pointer;
    z-index: 100; /* Garanta que o botão esteja sempre visível */
`
interface HamburgerMenuProps {
    inicioRef: React.RefObject<HTMLDivElement>;
    produtosRef: React.RefObject<HTMLDivElement>;
    servicosRef: React.RefObject<HTMLDivElement>;
    sobreNosRef: React.RefObject<HTMLDivElement>;
    footerRef: React.RefObject<HTMLDivElement>;
    scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  }

function HamburgerMenu ({
    inicioRef,
    produtosRef,
    servicosRef,
    sobreNosRef,
    footerRef,
    scrollToSection,
}: HamburgerMenuProps){
    const [isMenuOpen, toggleHamburgerMenu] = useHamburgerMenu();
    
    return(
        <DivHamburger>     
            <BtnHamburgerMenu
                onClick={toggleHamburgerMenu}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu-list"
                aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
                {isMenuOpen ? <CgClose /> : <CgMenu />}
            </BtnHamburgerMenu>
            
             {/* Renderizar o MenuUl condicionalmente com base em isMenuOpen */}
            {isMenuOpen && ( // Renderize apenas se o menu estiver aberto para melhor desempenho/SEO se o conteúdo for grande
                <MenuUl isOpen={isMenuOpen} id="mobile-menu-list">
                    <MenuLi><MenuLink href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection(inicioRef); toggleHamburgerMenu(); }}>Home</MenuLink></MenuLi>
                    <MenuLi><MenuLink href="#produtos" onClick={(e) => { e.preventDefault(); scrollToSection(produtosRef); toggleHamburgerMenu(); }}>Produtos</MenuLink></MenuLi>
                    <MenuLi><MenuLink href="#servicos" onClick={(e) => { e.preventDefault(); scrollToSection(servicosRef); toggleHamburgerMenu(); }}>Serviços</MenuLink></MenuLi>
                    <MenuLi><MenuLink href="#sobre-nos" onClick={(e) => { e.preventDefault(); scrollToSection(sobreNosRef); toggleHamburgerMenu(); }}>Sobre nós</MenuLink></MenuLi>
                    <MenuLi><MenuLink href="#footer" onClick={(e) => { e.preventDefault(); scrollToSection(footerRef); toggleHamburgerMenu(); }}>Contatos</MenuLink></MenuLi>
                </MenuUl>
            )}
        </DivHamburger>
    )
}
export default HamburgerMenu;