import { useEffect, useRef, useState } from "react";

interface Args extends IntersectionObserverInit{
    freezeOnceVisible?: boolean
}

/**
 * Hook para detectar quando um elemento entra ou sai da viewport.
 * @param {Args} { threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = false } - Opções do Intersection Observer.
 * @returns {[React.RefObject<T>, boolean]} - Uma ref para o elemento e um booleano indicando se está visível.
 */

function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>({
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false, //se true, o observer para de observar o elemento depois que ele fica visivel uma vez
}: Args): [React.RefObject<T>, boolean] {
    const ref = useRef<T>(null);
    const [entry, setEntry] = useState<IntersectionObserverEntry>();

    const frozen = entry?.isIntersecting && freezeOnceVisible;

    useEffect(() => {
        const node = ref.current; // o elemento DOM que vamos observar

        const hasIOSupport = !!window.IntersectionObserver; //verifica se o navegador suporta o IO

        if (!hasIOSupport || !node || frozen) return; // Se não suporta, não há nó ou já está congelado, sai

        const observer = new IntersectionObserver(([ent]) => {
            setEntry(ent); //Atualiza o estado com a entrada do observador
        }, {
            threshold,
            root,
            rootMargin,
        });

        observer.observe(node); // Começa a observar o elemento

        // Limpeza: desobserva o elemento ao desmontar o componente
        return () => {
            observer.disconnect();
        };

    }, [ threshold, root, rootMargin, frozen]); //Dependencias do useEffect

    // Retorna a ref e se o elemento está intersectando (visível)
    return [ref, !!entry?.isIntersecting];
}

export default useIntersectionObserver;