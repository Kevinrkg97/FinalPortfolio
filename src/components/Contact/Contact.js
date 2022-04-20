import {
    ContactForm,
    ContactContainer,
    ContactWrapper,
    CustomButton,
    ContactCaptcha,
    ContactData,
    ContactMessage
} from './Contact.elements';

const Contact = () =>{
    return (
        <ContactContainer id='contact'>
            <ContactWrapper>
                <h2>CONTÁCTAME</h2>
                <ContactForm>
                    <ContactData>
                        <input type='text' placeholder='Nombre' name='nombre'/>
                        <input type='number' placeholder='Teléfono' name='telefono'/>
                        <input type='email' placeholder='Email' name='email'/>
                    </ContactData>
                    <ContactMessage>
                        <textarea type='text' placeholder='Escribe tu mensaje' name='mensaje'/>
                    </ContactMessage>
                    <ContactCaptcha>

                    </ContactCaptcha>
                    <CustomButton>Enviar tu mensaje</CustomButton>
                </ContactForm>
            </ContactWrapper>
        </ContactContainer>
    
    )
}

export default Contact;