import styled from "styled-components";

export const ContactContainer = styled.div`
    width: 100%;
    margin:auto;
    padding-top: 50px;
    @media(min-width: 1400px){
        max-width: 1500px;
    }
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

export const ContactWrapper = styled.div`
    width: 95%;
    margin: auto;
`;

export const ContentContainer = styled.div`

`;

export const Form = styled.form`
    max-width: 1000px;
    padding: 50px 10px 0 10px;
    margin: auto;
    @media(min-width: 992px){
        width: 60%;
        
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px 0;
    background-color: #222;
    border: none;
    margin-bottom: 10px;
    color: #fff;
    font-weight: 200;
    padding: 10px 0 10px 10px;
    font-size: 20px;
`;

export const TextArea = styled.textarea`
    margin: 5px 0 40px 0;  
    width: 100%;
    background-color: #222;
    border: none;
    color: #fff;
    padding: 15px 0 15px 10px;
    font-size: 20px;
    font-weight: 200;
`;

export const SendedEmail = styled.div`
    padding-top: 50px;
`;


export const CustomButton = styled.button`
    margin-top: 50px;
    color: #eee;
    background-color: #008B8B;
    font-size: 1rem;
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 1rem 2rem;
    cursor: pointer;
    text-decoration: none;
    &:hover{
        border: 1px solid #008B8B;
        background-color: transparent;
        transition: all 200ms ease-in-out;
        -webkit-box-shadow: 0px 0px 15px 5px #008B8B; 
        box-shadow: 0px 0px 15px 5px #008B8B;
    }
   
`;
