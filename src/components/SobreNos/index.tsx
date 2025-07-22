import styled from "styled-components";
import Formulario from "../Formulario";
import imgSobreNos from "../../assets/sobreNos/sobrenos_3.png"

const SobreNosContainer = styled.section`
    /* background-color: #d5d5d5; */
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 20px 0px;
    min-height: 100vh;
    color: #231F20;
    background: linear-gradient(90deg, #d5d5d5 0.88%, rgba(255, 255, 255, 0.814) 7.45%), url(${imgSobreNos});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;    
    
    h1{
        font-size: 2.5rem;
    }
    h3{
        margin: 20px 0px 0px 0px;
        font-size: 2rem;
        color: #1C75BC;
    };
    p{
        margin: 0.5em;
        text-align: justify;
        font-size: 1.2rem;
    }
    strong {
        font-style: italic;
        color: #1C75BC;
    }
`
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    @media (max-width: 767px) {
        flex-direction: column;
    }
`

const DivEsquerda = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;

    @media (max-width: 767px) {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
    
`
const DivDireita = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;

    padding-bottom: 50px;

    @media (max-width: 767px) {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
`

function SobreNos () {
    return(
        <SobreNosContainer>
            <h1>Sobre a P3 Multimarca</h1>
            <Container>
                <DivEsquerda>
                    <h3>Quem Somos</h3>
                    <p>
                        Somos referência no mercado de acessórios automotivos multimarcas, atuando em mais de seis estados e garantindo <strong>excelência no atendimento</strong>.
                    </p>
                    <p>
                        Nosso grande diferencial está no atendimento ágil e no pós-venda eficiente, que vai além da simples comercialização de acessórios, oferecendo também <strong>consultoria</strong> e <strong>parceria de longo prazo</strong>.
                    </p>
                </DivEsquerda>
                <DivDireita>
                    <h3>No que acreditamos</h3>
                    <p>
                        Acreditamos que a venda não se encerra com a entrega do produto. O sucesso só é completo quando o <strong>cliente está 100% satisfeito</strong>. Por isso, focamos em cada etapa, desde o <strong>atendimento personalizado</strong> até o pós-venda ágil e eficaz.
                    </p>
                    <p>
                        Na <strong>P3 Multimarcas</strong>, não buscamos apenas vender, mas construir parcerias duradouras com nossos <strong>representantes</strong> e <strong>empresas parceiras</strong>, sempre com o objetivo de impulsionar o <strong>sucesso de todos</strong>.
                    </p>
                </DivDireita>
            </Container>

            <Formulario/>
        </SobreNosContainer>
    )
}

export default SobreNos;