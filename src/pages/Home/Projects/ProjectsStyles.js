import styled from "styled-components";

export const ProjectsSection = styled.section`
    width: 100%;
    margin: auto;
    background: linear-gradient(155deg, rgba(0,0,0, 0.1) 50%, transparent 50%);
   
`;

export const ProjectsWrapper = styled.div`
    width: 95%;
    margin:auto;
    max-width: 1500px;
    
`;

export const Title = styled.span`
    position: relative;
    left: 10px;
    top: 30px;

`;

export const TextTitle = styled.span`
    font-size: 70px;
    color: #008b8b25;
    transition: all 0.3s ease-out;
    user-select: none;
    &:hover{
        color: #222;
    }
    @media(max-width: 550px){
        font-size: 50px;
    }
`;

export const ProjectsContainer = styled.div`
    width: 100%;
    padding: 70px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: auto;
`;

export const Card = styled.div`
    width: 95%;
    heigth: 250px;
    background-color: #000;
    opacity: 1;
    transition: all 0.2s ease-in;
    text-align: center;
    -webkit-box-shadow: 0px 0px 21px 1px #000000; 
    box-shadow: 0px 0px 21px 1px #000000;
    &:hover{
        opacity: 1;
    }
    @media(min-width: 768px){
        width: 300px;
    }
`;

export const CardShadow = styled.div`
    -webkit-box-shadow: inset 0px 0px 50px 18px #000000; 
    box-shadow: inset 0px 0px 50px 18px #000000;
    position: absolute;
    width: 95%;
    height: 250px;
    transition: all 0.2 ease-in;
    display: flex;
    flex-direction: column;
    justify-content: center;
    button, img{
        display: none;
    }
    &:hover{
        background-color: #000;
        opacity: 0.95;
        button, img{
            display: block;
        }
    }
    @media(min-width: 768px){
        width: 300px;
    }

    
`;

export const CardImage = styled.img`
    width: 100%;
    height: 250px;
    margin: auto;
    overflow: hidden;
    object-fit: cover;
`;

export const ButtonCard = styled.button`
    border: 1px solid #008B8B;
    padding: 2px 0;
    width: 40%;
    margin: auto;
    color: #fff;
    background: transparent;
    -webkit-box-shadow: 0px 0px 15px 5px rgba(0,139,139,0.72); 
    box-shadow: 0px 0px 15px 5px rgba(0,139,139,0.72);
    transition: all 0.1s ease-in;
    cursor: pointer;
    &:hover{
        background: #008B8B;
        color: #000;
    }
`;

export const IconTech = styled.img`
    width: 30px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    &:nth-child(3){
        right: 50px;
    }
    &:nth-child(4){
        right: 90px;
    }
    &:nth-child(5){
        right: 130px;
    }
`;

export const Modal = styled.div`
    position: ;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.8);
`;

export const ModalWrapper = styled.div`
    width: 75%;
    height: 90vh;
    margin: auto;
    background-color: #222;
    margin-top: 5vh;
    border-radius: 20px;
`;

export const ModalContent = styled.div`
    padding: 15px;
`;

export const CloseModal = styled.button`
    color: #fff;
    font-size: 25px;
    background: transparent;
    border: none;
    cursor: pointer;
    border-radius: 0 15px 0 0;
    padding: 5px 10px;
    transition: all 0.3s ease;
    &:hover{
        background: red;
    }
`;