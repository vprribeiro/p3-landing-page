import styled from 'styled-components';
import car_img from '../../assets/inicio/car_image02.jpg';
import FadeIn from '../utils/FadeIn';

const InicioContainer = styled.section`
    background-color: #d5d5d5;
    min-height: 115vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(90deg, #d5d5d5 10.88%, rgba(255, 255, 255, 0.203) 87.45%), url(${car_img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;

    @media (max-width: 500px) {
        /* Se você tiver um padding-top específico para mobile aqui,
           ajuste o scroll-margin-top para incluir o padding-top + a altura do header */
        /* Mantenha o mesmo valor do header mobile */
    }

`
const Titulo = styled.h1`
    color: #ff8c00;
    font-size: 3rem;
    margin-left : 20%;
    margin-right: 20%;
    @media (max-width: 500px) {
        font-size: 2.2rem;
        margin: 2% 4%;
    }
`
const TextoCTA = styled.p`
    font-size: 1.4rem;
    font-weight: 600;
    margin-left: 2%;
    margin-right: 2%;
    padding-bottom: 0.5em;
`

const BtnWpp = styled.a`
    text-decoration: none;
    background-color: #1C75BC;
    border-radius: 5px;
    font-size: 1.5rem;
    font-weight: 700;
    color: #231F20;
    padding: 0.5em;
    transition: 0.2s ease-in-out;
    box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.2);
    &:hover{
        color: #d5d5d5;
        background-color: #1c74bcb9;
    }
`

function Inicio (){
    return(
        <FadeIn delay={100} duration={3000} animateOnView={true}>   
            <InicioContainer>
                <div>
                    <Titulo>
                        <strong>
                            O melhor cuidado para o seu carro, com o diferencial que você merece.
                        </strong>
                    </Titulo>
                    <TextoCTA>
                        Faça seu orçamento agora mesmo.
                    </TextoCTA>
                    <BtnWpp href="https://wa.me/+5571985450220" target='_blank'>FAZER ORÇAMENTO</BtnWpp>
                </div>
            </InicioContainer>
        </FadeIn>
    )
}

export default Inicio;