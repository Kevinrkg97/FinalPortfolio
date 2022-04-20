import React from 'react';
import Lottie from "lottie-react";
import {
    HeaderContainer,
    HeaderWrapper,
    InfoContainer,
    CustomButton,
    LottieContainer
} from './Header.elements';
import lottieLight from '../../../../assets/lottieHeaderLight.json';
import lottieDark from '../../../../assets/lottieHeaderDark.json'



const Header = (props) => {

    let lottie = props.theme === 'light' ? lottieLight : lottieDark;

    return (
        <>
            <HeaderContainer>
                <HeaderWrapper>
                        <LottieContainer>                    
                            <Lottie animationData={lottie} loop autoPlay />
                        </LottieContainer>
                    <InfoContainer>
                        <h3>Hola, mi nombre es</h3>
                        <h1>Kevin Guzmán</h1>
                        <h2>y juntos haremos proyectos impresionantes.</h2>
                        <h4>Desarrollador Web, móvil y científico de datos.</h4>
                        <h4>Ubicado en CDMX, MX.</h4>
                        <CustomButton >Empezemos</CustomButton>
                        
                    </InfoContainer>
                    
                </HeaderWrapper>
            </HeaderContainer>
        </>
    )
}

export default Header;