import styled from "styled-components";
import { servicos } from "./servicos";
import { v4 as uuidv4 } from 'uuid';
import FadeIn from "../utils/FadeIn";

const ServicosContainer = styled.section`
    background-color: #231F20;
    min-height: 110vh;
    display: flex;
    flex-direction: column;
    color: #d5d5d5;
    & h2{
        color: #d5d5d5;
        margin-bottom: 40px;
    };
`

const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
`

const CardServico = styled.div`
    width: 25%;
    height: 200px;
    gap: 5px;
    background-color: #1C75BC;
    color: #231F20;
    border-radius: 0px 40px 0px 40px;
    box-shadow: 0px 0px 5px 1px #d5d5d574;
    transition: 0.2s;
    @media (max-width: 1100px) {
        width: 45%;
    }

    @media (max-width: 767px) {
        width: 80%;
    }
    &:hover{
        scale: 1.03;
        background-color: #F7941D;
    };
    p{
        font-style: italic;
        margin: 0px 10px;
    }
`

function Servicos () {
    return(
        <ServicosContainer>
            <FadeIn delay={100} duration={1000} animateOnView={true}>
                <h2>Nossos Serviços</h2>
            </FadeIn>
            <FadeIn delay={100} duration={2000} animateOnView={true}>
                <CardsContainer>
                    {servicos.map( servico => (
                        <CardServico key={uuidv4()}>
                            <h3>{servico.nome}</h3>
                            <p>{servico.descricao}</p>
                        </CardServico>
                    ))}
                </CardsContainer>
            </FadeIn>
        </ServicosContainer>
    )
}

export default Servicos;