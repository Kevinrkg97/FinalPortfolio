import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.7);
    z-index: 100;
`;

export const ModalContainer = styled.div`
    width: 95%;
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #222;
    box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.7);
    border-radius: 8px;
    flex-direction: column;
    text-align:center;
    justify-content: center;
    margin: auto;
    @media(min-width: 768px){
        height: auto;
        width: 70%;
        top: 50%;
    }
    @media(min-width: 992px){
        width: 60%;
    }
    @media(min-width: 1200px){
        width: 50%;
    }
`;

export const CloseButton = styled.span`
    position: fixed;
    right: 0;
    cursor: pointer;
    padding: 2px 7px;
    font-size: 20px;
    border-radius: 0 8px 0 0;
    &:hover{
        background-color: red;
    }    
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 40px 0;

    a{  

        margin: auto;
        width: 100px;
    }
`;

export const ContainerImage = styled.div`
    width: 90%;
    height: 100%;
    margin: auto;
    padding-bottom: 20px;
`;

export const ImageModal = styled.img`
    width: 90%;
    border-radius: 10px;
    max-height: 400px;
    @media(min-width: 768px){
        width: 80%;
        max-width: 800px
    }
`;

export const ButtonDisabled = styled.span`
    background-color: #111;
    width: 180px;
    border: none;
    margin: auto;
    padding: 8px 2px;
    color: #fff;
    font-size: 15px;
    cursor: default;
`;
