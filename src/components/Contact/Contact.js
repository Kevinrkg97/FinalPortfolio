import {
    ContactForm,
    ContactContainer,
    ContactWrapper,
    CustomButton,
    ContactCaptcha,
    ContactData,
    ContactMessage,
    SendedEmail
} from './Contact.elements';
import React, {useRef, useState} from 'react';
import emailjs from 'emailjs-com';
import token from '../../private';
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () =>{

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
        <ContactContainer id='contact'>
            <ContactWrapper>
                <h2>CONTÁCTAME</h2>
                {!usuarioValido &&

                    <ContactForm onSubmit={sendEmail}>
                        <ContactData>
                            <input type='text' placeholder='Nombre' name='nombre'/>
                            <input type='number' placeholder='Teléfono' name='telefono'/>
                            <input type='email' placeholder='Email' name='email'/>
                        </ContactData>
                        <ContactMessage>
                            <textarea type='text' placeholder='Escribe tu mensaje' name='mensaje'/>
                        </ContactMessage>
                        <ContactCaptcha>
                            <ReCAPTCHA
                                ref={captcha}
                                sitekey={`${token.captchaToken}`}
                                onChange={onChange}
                            />
                        </ContactCaptcha>
                        <CustomButton>Enviar tu mensaje</CustomButton>
                        {captchaValido === false && <div className="error-captcha">Por favor acepta el captcha</div>}
                    </ContactForm>
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