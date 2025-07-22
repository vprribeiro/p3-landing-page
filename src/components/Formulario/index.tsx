import styled from "styled-components";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { InputMask } from '@react-input/mask'

const FormContainer = styled.div`
    /* padding: 82px 180px 33px 180px; */
    margin: auto;
    width: 70%;
    @media (max-width:560px) {
        width: 90%;
    }
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #f9f9fb;
    border-radius: 10px;
    margin-bottom: 50px;
    h1{
        width: 100%;
        color: #231F20;
    }
    input[type='submit']{
        width: 40%;
        font-weight: 700;
        height: 50px;
        margin: auto;
        margin-bottom: 40px;
        font-size: 16px;
        border-radius: 25px;
        border: none;
        background-color: #F7941D;
        color: #f9f9fb;
        box-shadow: 0 10px 20px 0px #f7951d92;
        transition: 0.5s;
        &:hover{
            cursor: pointer;
            background-color: #1C75BC;
            box-shadow: 0 10px 20px 0px #1C75BC92;
        }

        @media (max-width: 1300px) {
            width: 60%;
        }
    }
`

interface DivLabelInputProps {
    $fullWidth?: boolean;
  }

const DivLabelInput = styled.div<DivLabelInputProps>`
    width: ${({ $fullWidth }) => ($fullWidth ? '100%' : '32%')};
    border-bottom: 2px solid #999999;
    padding-bottom: 13px;
    margin: 10px 80px 40px 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    label{
        font-size: 15px;
        line-height: 1.5;
        padding-left: 5px;
        color: #999999; 
    }

    input, select, textarea{
        width: 100%;
        background: transparent;
        font-size: 18px;
        line-height: 1.2;
        padding: 0 5px;
        outline: none;
        border: none;
        min-height: 40px;
        color: #231F20;
    }
    textarea{
        margin-top: 10px;
        height: 110px;
    }

    @media (max-width: 1300px) {
        width: 100%;
        margin: 10px 20px 40px 20px;
    }
`
const FormField = styled(DivLabelInput)`
  position: absolute;
  left: -9999px;
  opacity: 0;  
  height: 0;  
  width: 0;
  overflow: hidden; 
  z-index: -1;
`;

function Formulario () {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [lastName, setLastName] = useState('');

    // Função auxiliar para remover a máscara antes de enviar ou validar
    const unmaskPhoneNumber = (maskedNumber: string) => {
        return maskedNumber.replace(/\D/g, '');
    };

    function sendEmail (e: React.FormEvent){
        e.preventDefault()

        toast.dismiss() // Para não sobrepor toasts de erro

        if (lastName !== "") {
            toast.error('Verificar dados')
            return;
        }

        const unmaskedPhone = unmaskPhoneNumber(phone);

        if (!name.trim() || !unmaskedPhone.trim() || !email.trim() || !subject || !message.trim()) {
            toast.error('Por favor, preencha todos os campos.');
            return;
        }

        if (unmaskedPhone.length !== 11) {
            toast.error('Por favor, digite um telefone válido.');
            return;
        }

        const templateParams = {
            name: name,
            phone: phone,
            email: email,
            subject: subject,
            message: message
        }

        emailjs.send("service_qbws7bs", "template_qp7rapd", templateParams, "J8qq0y9jXqthUd_Ng")
        .then((response)=>{
            console.log("E-mail enviado ", response.status, response.text)
            toast.success('Mensagem enviada com sucesso!')
            setName('');
            setPhone('');
            setEmail('');
            setSubject('');
            setMessage('');
            setLastName('');

        }, (err)=>{
            console.log("Error", err)
            toast.error('Ocorreu um erro ao enviar a mensagem. Tente novamente.')
        })

    }

    return (
        <FormContainer>
            <Form onSubmit={sendEmail}>
                <h1>Fale Conosco</h1>
                <DivLabelInput>
                    <label htmlFor="inputNome">Nome:</label>
                    <input id="inputNome" type="text" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} value={name} required/>
                </DivLabelInput>
                <DivLabelInput>
                    <label htmlFor="inputTelefone">Telefone:</label>
                    <InputMask 
                        mask="(__) _ ____-____"
                        replacement={{ _: /\d/ }} // Define que '_' é um dígito. Pode variar o "replacement"
                        showMask
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="tel"
                        id="inputTelefone"
                        required
                    />
                </DivLabelInput>
                <DivLabelInput>
                    <label htmlFor="inputEmail">E-mail:</label>
                    <input id="inputEmail" type="email" placeholder="ex: meuemail@gmail.com" onChange={(e) => setEmail(e.target.value)} value={email} required/>
                </DivLabelInput>
                <DivLabelInput>
                    <label htmlFor="assunto_email">Assunto:</label>
                    <select id="assunto_email" name="assunto_email" onChange={(e) => setSubject(e.target.value)} required>
                        <option value="">Escolha o assunto</option>
                        <option>Contato</option>
                        <option>Orçamento de Material</option>
                        <option>Orçamento de Serviço</option>
                        <option>Outro assunto</option>
                    </select>
                </DivLabelInput>
                <DivLabelInput $fullWidth>
                    <label htmlFor="textareaMensagem">Mensagem:</label>
                    <textarea id="textareaMensagem" name="textareaMensagem" placeholder="Digite aqui sua mensagem" onChange={(e) => setMessage(e.target.value)} value={message} required ></textarea>
                </DivLabelInput>
                
                <FormField>
                    <label htmlFor="lastName">Preencha</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                        tabIndex={-1}
                        autoComplete="off" 
                    />
                </FormField>

                <input type="submit" value="Enviar" id="btn_submit"/>
            </Form>

        </FormContainer>
    )
}

export default Formulario;