import React from 'react';
import {
    AboutSection,
    AboutWrapper,
    ContainerAbout,
    Title,
    TextTitle,
    ImageContainer,
    ImageProfile,
    Text,
    TextContainer,
    ContainerButton
} from './AboutStyles';
import { CustomButton } from '../../../globalStyles'
import profile from '../../../assets/profile.jpg';
import mexico from '../../../assets/mexico.png';
import CV from '../../../assets/RKGG.pdf';



const About = () => {
    return(
        <AboutSection id='about'>
            
            <AboutWrapper >
                
                <Title>
                    <TextTitle>S</TextTitle>
                    <TextTitle>o</TextTitle>
                    <TextTitle>b</TextTitle>
                    <TextTitle>r</TextTitle>
                    <TextTitle>e</TextTitle>
                    <TextTitle> </TextTitle>
                    <TextTitle>M</TextTitle>
                    <TextTitle>í</TextTitle>
                </Title>
                
                <ContainerAbout>
                
                    <ImageContainer>
                        <ImageProfile src={profile} />
                    </ImageContainer>
                    <ContainerButton>
                        <CustomButton href={CV} >Ver mi CV</CustomButton>
                    </ContainerButton>
                    <TextContainer>
                        <Text>Ubicado en Ciudad de México, <img src={mexico} alt="Mexico" />, con 25 años de edad.</Text>
                        <Text>Empecé profesionalmente como desarrollador en el 2020 enfocandome en Web, principalmente con <strong>Node Js</strong> en el backend y <strong>React Js</strong> en frontend.</Text>
                        <Text>Me gusta dedicar cada detalle a mi proyecto para que resulten lo mejor posible funcional y visualmente.</Text>
                        <Text>Cada día me desarrollo aprendiendo y mejorando mis habilidades para aprovechar mejor mis oportunidades.</Text>
                        <Text>Aunque me considero desarrollador full stack prefiero la parte backend trabajando con tecnologías como JavaScript, Python además de <strong>bases de datos</strong> y <strong>Web Services</strong> aunque mi conocimiento no solo queda ahí.</Text>
                    </TextContainer>
               </ContainerAbout>

            </AboutWrapper>
        </AboutSection>
    )
}

export default About;