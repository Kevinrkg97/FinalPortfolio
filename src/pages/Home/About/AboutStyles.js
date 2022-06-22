import styled from "styled-components";


export const AboutSection = styled.section`
    width: 100%;
    margin: auto;
    background: linear-gradient(155deg, transparent 50%, rgba(0,0,0, 0.1) 50%);
    
`;

export const AboutWrapper = styled.div`
    width: 95%;
    max-width: 1500px;
    margin:auto;
   
`;

export const Title = styled.span`
    position: relative;
    left: 10px;
    top: 70px;
`;

export const TextTitle = styled.span`
    font-size: 70px;
    color: #008b8b25;
    transition: all 0.3s ease-out;
    user-select: none;
    &:hover{
        color: #222;
    }
`;

export const ContainerAbout = styled.div`
    padding-top: 80px;
    margin: auto;
    width: 100%;
    text-align:center;
    @media(min-width: 768px){
        text-align: justify;
    }
`;

export const ImageContainer = styled.div`
    width: 250px;
    height: 250px;
    margin: auto;
    transform: translatey(0px);
    animation: float 6s ease-in-out infinite;
    @media(min-width: 992px){
        display: flex;
        flex-wrap: nowrap;
    }
    @keyframes float{
        0%{
            transform: translateY(0px);
        }
        50%{
            transform: translateY(-30px);
        }
        100%{
            transform: translateY(0px);
        }
    }
    @media(max-width: 768px){
        padding: 30px 0;
    }
`;

export const ImageProfile = styled.img`
    width: 100%;
    height: 250px;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
`;

export const TextContainer = styled.div`
    margin: auto;
    padding-top: 30px;

`;


export const Text = styled.p`
    img{
        width: 16px;
    }
    
`;

export const ContainerButton = styled.span`
    @media(min-width: 768px){
        float: right;
        padding: 0 30px;
    }
`;