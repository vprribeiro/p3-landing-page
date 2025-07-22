import styled from "styled-components";
import Map from "../Map";
import iconeFone from '../../assets/footer/phone_icon.png'

const FooterContainer = styled.section`
    color: #939393;

`

const DivInformacoes = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    h2{
        color: #d5d5d5
    }
    span{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        img{
            width: 22px;
            padding-top: 5px;
        }
        a{
            display: flex;
            font-size: 18px;
            font-weight: 600;
            gap: 10px;
            align-items: center;
            text-decoration: none;
            color: #939393;
            transition: scale 0.7s;

            &:hover{
                scale: 1.15;
                color: #F7941D;
            }
        }
    }
    h3{
        margin-bottom: 0px;
    }

    p{
        min-height: 40px;
    }

`
const DivCredito = styled.div`
    color: #6e6e6e;
    a{
        color: #bababa;
        text-decoration: none;
        &:hover{
            color: #e7e7e7;
        }
    }
`
const DivInformacao = styled.div`
    width: 40%;
    @media (max-width: 1000px) {
        width: 80%;
    }
`

function Footer (){
    return(
        <FooterContainer>
            <DivInformacoes>
                <DivInformacao>
                    <h2>Estética Automotiva</h2>
                    <span>
                        <a href="https://wa.me/+5571985450220" target="__blank"><img src={iconeFone} alt="IconeTelefone" /> (71) 9 8545-0220</a>
                    </span>
                    <h3>Parte Interna do Sam's Club</h3>
                    <p>Endereço: Av. Mário Leal Ferreira, 780 - Cosme de Farias, Salvador - BA, 40252-390</p>
                    <Map lat={-12.9837103} lng={-38.4948147} title="Estética Automotiva" />
                </DivInformacao>
                <DivInformacao>
                    <h2>Multimarca</h2>
                    <span>
                        <a href="https://wa.me/+5571992007436" target="__blank"><img src={iconeFone} alt="IconeTelefone" /> (71) 9 9200-7436</a>
                    </span>
                    <h3>Santo Antônio Além do Carmo</h3>
                    <p>Endereço: Av. Vital Rego, 10 - Barbalho, Salvador - BA, 40301-465</p>
                    <Map lat={-12.9636801} lng={-38.5017656} title="Multi Marcas" />
                </DivInformacao>
            </DivInformacoes>
            <DivCredito>
                <p>Desenvolvido por <a href="https://www.linkedin.com/in/ribeiro-vitor/" target="__blank">Vitor Ribeiro</a></p>
            </DivCredito>
        </FooterContainer>
    )
}

export default Footer;