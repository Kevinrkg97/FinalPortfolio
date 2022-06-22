import React, {useState, useRef} from "react";
import { 
    ContactContainer, 
    ContactWrapper, 
    Form,
    Input,
    TextArea,
    Title, 
    TextTitle,
    SendedEmail,
    CustomButton
} from "./ContactStyles";
import emailjs from 'emailjs-com';
import token from '../../../private';
import ReCAPTCHA from "react-google-recaptcha";


const Contact = () => {


    const [captchaValido, cambiarCaptchaValido] = useState(null);
	const [usuarioValido, cambiarUsuarioValido] = useState(false);

	const captcha = useRef(null);


    function sendEmail(e) {
        e.preventDefault();
    
        

          if(captcha.current.getValue()){
			console.log('El usuario no es un robot');
			cambiarUsuarioValido(true);
			cambiarCaptchaValido(true);
            
            emailjs.sendForm(`${token.format}`, `${token.id}`, e.target, `${token.tokenUser}`)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
            });

		} else {
			console.log('Por favor acepta el captcha');
			cambiarUsuarioValido(false);
			cambiarCaptchaValido(false);
		}

      }

      const onChange = () => {
		if(captcha.current.getValue()){
			console.log('El usuario no es un robot');
			cambiarCaptchaValido(true);
		}
	}
    return (
        <ContactContainer id="contact">
            <ContactWrapper>
                    <Title>
                        <TextTitle >C</TextTitle>
                        <TextTitle >o</TextTitle>
                        <TextTitle >n</TextTitle>
                        <TextTitle >t</TextTitle>
                        <TextTitle >a</TextTitle>
                        <TextTitle >c</TextTitle>
                        <TextTitle >t</TextTitle>
                        <TextTitle >á</TextTitle>
                        <TextTitle >m</TextTitle>
                        <TextTitle >e</TextTitle>
                    </Title>
                    {!usuarioValido &&
                    <Form onSubmit={sendEmail}>
                        <Input placeholder="Nombre y apellido" name="nombre" type='text' />
                        <Input placeholder="Correo Electrónico" name="email" type='email' />
                        <Input placeholder="Número Telefónico" name="telefono" type='number' />
                        <TextArea rows={5} placeholder="Mensaje" name="mensaje" type='text' />
                        <ReCAPTCHA
                            ref={captcha}
                            sitekey={`${token.captchaToken}`}
                            onChange={onChange}
                            theme='dark'
                        />
                        {captchaValido === false && <div className="error-captcha">Por favor, acepta el captcha.</div>}
                        <CustomButton>Enviar mensaje</CustomButton>
                    </Form>
                    }
                   
                {usuarioValido && 
				<SendedEmail>
                    {/* <img src={messageSent} alt="messageSent" /> */}
					<h1>Gracias por tu mensaje, en breve me pondré en contacto.</h1>
				</SendedEmail>
			}
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact;