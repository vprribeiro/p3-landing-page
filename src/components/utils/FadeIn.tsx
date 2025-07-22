import React from 'react';
import styled, { keyframes , css} from 'styled-components';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  animateOnView?: boolean; 
  threshold?: number; // Para Intersection Observer
}

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeInContainer = styled.div<{ $delay: number; $duration: number ; $isIntersecting: boolean; $animateOnView: boolean }>`
  opacity: 0;
  display: inline-block;
  ${(props) => props.$animateOnView ?
    // Se animateOnView é true, só anima quando isIntersecting é true
    props.$isIntersecting && css`
      animation: ${fadeInAnimation} ${props.$duration / 1000}s ease-in-out forwards;
      animation-delay: ${props.$delay}ms;
    `
    : // Se animateOnView é false, anima imediatamente ao renderizar
    css`
      animation: ${fadeInAnimation} ${props.$duration / 1000}s ease-in-out forwards;
      animation-delay: ${props.$delay}ms;
    `
  }
`;

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0 ,  
  duration = 500,
  animateOnView = true, // Padrão: animar ao entrar na viewport
  threshold = 0.1 // 10% do elemento visível
}) => {
  // Se animateOnView for true, usamos o Intersection Observer
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold,
    freezeOnceVisible: true // Anima uma vez e congela
  });

  return (
    <FadeInContainer 
      ref={ref} // Atribuímos a ref ao container
      $delay={delay} 
      $duration={duration}
      $isIntersecting={isIntersecting}
      $animateOnView={animateOnView}
    >
      {children}
    </FadeInContainer>
  );
};

export default FadeIn;