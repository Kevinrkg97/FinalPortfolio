import React from 'react';
import {
    HeroSection,
    HeroWrapper,
    Text,
    ImageContainer, 
    ButtonContainer
} from './HeroStyles';
import { CustomButton } from '../../../globalStyles';
import Lottie from "lottie-react";
import HeroLottie from '../../../assets/computerGuy.json'

const Hero = () => {
    return (
       <HeroSection>
        {/* <SpanContainer>
            <HeroTextSpan>F</HeroTextSpan>
            <HeroTextSpan>u</HeroTextSpan>
            <HeroTextSpan>l</HeroTextSpan>
            <HeroTextSpan>l</HeroTextSpan>
            <HeroTextSpan>s</HeroTextSpan>
            <HeroTextSpan>t</HeroTextSpan>
            <HeroTextSpan>a</HeroTextSpan>
            <HeroTextSpan>c</HeroTextSpan>
            <HeroTextSpan>k</HeroTextSpan>
        </SpanContainer>
        <SpanContainer>
            <HeroTextSpan>D</HeroTextSpan>
            <HeroTextSpan>e</HeroTextSpan>
            <HeroTextSpan>v</HeroTextSpan>
            <HeroTextSpan>e</HeroTextSpan>
            <HeroTextSpan>l</HeroTextSpan>
            <HeroTextSpan>o</HeroTextSpan>
            <HeroTextSpan>p</HeroTextSpan>
            <HeroTextSpan>e</HeroTextSpan>
            <HeroTextSpan>r</HeroTextSpan>
        </SpanContainer>
         */}



            <HeroWrapper>
                <ImageContainer>
                    <Lottie animationData={HeroLottie} loop autoPlay />
                </ImageContainer>
                <Text>
                    <h2>Hola,</h2>
                    <h1>Soy <strong>Kevin Guzmán</strong>,</h1>
                    <h2>Desarrollador Web y Móvil.</h2>
                    <h3>Juntos haremos proyectos impresionantes.</h3>
                </Text>
                <ButtonContainer>
                    <CustomButton href='#about' >Empezemos</CustomButton>
                </ButtonContainer>

            </HeroWrapper>
       </HeroSection>
    );
}

export default Hero;