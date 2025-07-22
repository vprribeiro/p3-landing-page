import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

interface ScrollButtonProps {
    $isVisible: boolean;
}

const ScrollToTopButtonContainer = styled.button<ScrollButtonProps>`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #F7941D;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;
    transition: background-color 0.4s ease-in-out;
    z-index: 1000;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: #1C75BC;
    }

    ${(props) => props.$isVisible && `
        opacity: 1;
        visibility: visible;
    `}
`;

interface ScrollToTopButtonProps {
    scrollOffset?: number; // Exemplo: quantos pixels precisa rolar para aparecer o botão
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ scrollOffset = 300 }) => {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = useCallback(() => {
        if (window.scrollY > scrollOffset) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    }, [scrollOffset]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <ScrollToTopButtonContainer onClick={scrollToTop} $isVisible={showButton}>
            <FaArrowUp />
        </ScrollToTopButtonContainer>
    );
};

export default ScrollToTopButton;