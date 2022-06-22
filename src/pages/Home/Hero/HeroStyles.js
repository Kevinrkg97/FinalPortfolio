import styled from 'styled-components';


export const HeroSection = styled.section`
    width: 100%;
    margin: auto;
    
    @media(min-width: 1200px){
        height: 100vh;
    }
`; 

export const HeroWrapper = styled.div`
    width: 95%;
    margin: auto;
    padding-top: 5vh;
    max-width: 1500px;
    text-align: center;
    @media(min-width: 768px){
        height: 100vh;
    }

    @media(min-width: 992px){
        display: grid;
        grid-template-areas: "text image" "button button"
    }
`;

export const SpanContainer = styled.span`
    color: #ffffff08;
    position: absolute;
    bottom: 30px;
    left: 50px;
    overflow: hidden;
    &:nth-child(1){
        bottom: 100px;
    }
`;

export const HeroTextSpan = styled.span`
    font-size: 70px;
    cursor: default;
    transition: all 0.3s ease-out;
    user-select: none;
    &:hover{
        transform: translateY(-1.5rem);
        color: #008b8b88;
    }
`;

export const ImageContainer = styled.div`
    grid-area: image;
    width: 95%;
    margin: auto;

    @media(min-width: 992px){
        width: 75%;
        text-align: right;
    }
`;


export const Text = styled.div`
    grid-area: text;
    @media(min-width: 992px){
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
        line-height: 7px;
    }
`;

export const ButtonContainer = styled.div`
    grid-area: button;
    @media(max-width: 990px){
        padding: 30px 0;
    }
`;


