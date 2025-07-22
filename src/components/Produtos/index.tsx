import { useState } from 'react';
import styled from "styled-components";
import produtos, { Produto } from './produtos';
import imagemFundo from "../../assets/produtos/produtosGerais.jpg"
import imagemTransicao from "../../assets/produtos/img_transicao1.png"
import FadeIn from '../utils/FadeIn';


const ProdutosContainer = styled.section`
    background-color: #231F20;
    display: flex;
    flex-direction: column;
    color: #d5d5d5;
    /* Adicionar scroll-margin-top aqui se o header for fixo */
    /* scroll-margin-top: 100px; */ /*Valor deve ser a altura do header */
    & h2{
        color: #d5d5d5;
        text-align: center;
        margin: 30px 5px 0px 5px;
    };
`

const DivIcones = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 20px;
    gap: 3%;
    height: 15vh;

`
const BotaoIcone = styled.button<{ $isSelected: boolean }>`
    height: auto;
    padding: 10px 5px;
    font-size: 1.3rem;
    border: transparent;
    border-bottom: 2px solid ${props => props.$isSelected ? '#F7941D' : 'transparent'};
    color: ${props => props.$isSelected ? '#F7941D' : '#d5d5d580'};
    background-color: transparent;
    transition: all 0.3s ease; /* Transição suave para hover e seleção */
    &:hover {
        cursor: pointer;
        color: #F7941D;
        border-color: #F7941D; /* Adicionar borda no hover */
    }

    /* TESTAR NO MOBILE */
    @media (max-width: 768px) {
        /* width: 80px;
        height: 80px; */
        font-size: 1.2rem;
        //border: 2px solid #e68107;
        color: ${props => props.$isSelected ? '#F7941D' : '#cbcbcb'};
        border-radius: 10px;
        background-color: #1c74bcab;
    }

`

const ContainerProdutos = styled.div`
    margin: 0px 30px 20px 30px;
    background-color: transparent; //OU TRANSPARENT ou #8c8c8c
    padding: 10px;
    border-radius: 8px;
    display: grid; /* Usar Grid para os cards de produto */
    grid-template-columns: repeat(auto-fit, 280px);
    gap: 10px;
    place-content: center; /* Centralizar os itens na grid */

    @media (max-width: 768px) {
        margin: 10px 15px; /* Ajustar margem em mobile */
        padding: 15px;
        grid-template-columns: 1fr; /* Coluna única em mobile */
        place-items: center;
    }
`

const ProdutoCard = styled.div`
    background-color: #2e2e2e; /* Cor mais escura para o card */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center; /* Centralizar texto no card */
    color: #d5d5d5;
    width: 250px; /* Garantir largura mínima */
    height: 90%;
    transition: 0.5s;
    &:hover{
        background-color: #5c5c5c;
    }
    @media (max-width: 768px) {
        min-width: 80%;
    }
`;

const ProdutoImagem = styled.img`
    width: 100%;
    max-height: 180px; /* Limitar altura da imagem */
    object-fit: contain; /* Para garantir que a imagem inteira seja visível */
    border-radius: 8px;
    margin-bottom: 10px;
    
`;

const ProdutoTitulo = styled.h3`
    font-size: 1.3rem;
    color: #d5d5d5;
    margin-bottom: 5px;
`;

const ProdutoDescricao = styled.p`
    font-size: 0.85rem;
    color: #a0a0a0;
    flex-grow: 1; /* Ocupar espaço disponível */
    margin-bottom: 10px;
`;

const ProdutoCompatibilidade = styled.p`
    font-size: 0.8rem;
    color: #b0b0b0;
    font-style: italic;
`;

const ImagemAguardandoSelecao = styled.img`
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 30px;
    height: 80vh;
    width: 95%;
    border-radius: 10px;
    @media (max-width: 768px) {
        display: none;
    }
`

const DivFinalEstilo = styled.div`
    height: 10vh;
    margin-bottom: 20px;
    img{
        height: 10vh;
        width: 100%;
    }
`

function Produtos(){
    // Define o estado para a linha de produto selecionada.
    const [selectedLine, setSelectedLine] = useState<Produto['linha'] | null>(null);

    // Filtra os produtos com base na linha selecionada
    const filteredProducts = produtos.filter
    ? produtos.filter((produto) => produto.linha === selectedLine)
    : []; // Se nada estiver selecionado, a lista de produtos filtrados é vazia
    
    // Array de todas as linhas disponíveis para renderizar os botões
    const allLines: Produto['linha'][] = ['Linha Pesada', 'Linha Sonora', 'Linha Múltiplos'];

    return(
        <ProdutosContainer>
            <FadeIn delay={100} duration={3000} animateOnView={true}>
                <h2>
                    Conheça nossa linha de acessórios
                </h2>
            
            <DivIcones>
                {allLines.map((line) => (
                    <BotaoIcone
                        key={line} // A linha é única, então pode ser usada como key
                        onClick={() => setSelectedLine(line)}
                        $isSelected={selectedLine === line} // Passa a prop para estilização condicional
                    >
                        {line}
                    </BotaoIcone>
                ))}
            </DivIcones>
            </FadeIn>
            <FadeIn delay={200} duration={4000} >
                {filteredProducts.length > 0 ? (   
                    <ContainerProdutos>
                        {filteredProducts.map((produto: Produto , index: number) => (       
                            <FadeIn 
                                key={produto.id} // É importante manter a key no elemento mais externo sendo mapeado
                                delay={index * 100} // Atraso de 100ms para cada card subsequente
                                duration={400} // Duração do fade-in para cada card
                                animateOnView={false} // O card anima quando entra na viewport
                                threshold={0.05} // O card começa a animar quando 5% dele está visível
                            >
                                <ProdutoCard key={produto.id}> 
                                    <ProdutoImagem src={produto.imagemUrl} alt={produto.nome} />
                                    <ProdutoTitulo>{produto.nome}</ProdutoTitulo>
                                    <ProdutoDescricao>{produto.descricao}</ProdutoDescricao>
                                    <ProdutoCompatibilidade>{produto.compatibilidade}</ProdutoCompatibilidade>
                                </ProdutoCard>
                            </FadeIn>
                        ))}

                    </ContainerProdutos>
                    ) : (
                        <ImagemAguardandoSelecao src={imagemFundo} alt="Linha de Produtos" />
                    )}

            </FadeIn>
            <DivFinalEstilo>
                <img src={imagemTransicao} alt="Efeito de Transição" />
            </DivFinalEstilo>
        </ProdutosContainer>        
    )
}

export default Produtos;