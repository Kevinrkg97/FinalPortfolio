import React from 'react';
import {
    AboutContainer,
    AboutWrapper,
    AboutContent,
    ProfileImage,
    ItemsTech, 
    ItemTech
} from './About.elements';
import avatar from './avatar.jpg';

const About = () => {
    return(
        <>
        <AboutContainer id='about'>
            <AboutWrapper>
                <ProfileImage src={avatar} alt='avatar' />
                <AboutContent>
                    <h2> SOBRE MÍ</h2>
                    <h4>Hola, mi nombre es Kevin Guzmán, tengo 25 años y me ubico en la Ciudad de México. Inicié mi vida como desarrollador en el año 2020 especializandome en Python, TypeScript y Dart. Me dedico principalmente al desarrollo Full Stack, tanto móvil como web trabajando con bases de datos relacionales como no relacionales, también tengo conocimiento en las ciencias de datos.</h4>
                </AboutContent>
                <ItemsTech>
                    <ItemTech>React Js</ItemTech>
                    <ItemTech>Flutter</ItemTech>
                    <ItemTech>Flask</ItemTech>
                    <ItemTech>Express Js</ItemTech>
                    <ItemTech>Node Js</ItemTech>
                    <ItemTech>MySql</ItemTech>
                    <ItemTech>Firebase</ItemTech>
                    <ItemTech>PostgreSQL</ItemTech>
                </ItemsTech>
            </AboutWrapper>
        </AboutContainer>
        </>
    )
}

export default About;