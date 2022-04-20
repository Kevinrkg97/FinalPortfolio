import styled from 'styled-components';

export const ContactContainer = styled.div`
    width: 100%;
    padding: 5rem 0;
`;

export const ContactWrapper = styled.div`
    width: 80%;
    margin: auto;
    h2{
        color: ${({theme}) => theme.button}
    }
`;

export const ContactForm = styled.form`
    padding-top: 2rem;
    width: 100%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 760px){
        flex-direction: column;
    }
    
`;

export const ContactData = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    margin: auto;

    input{
        padding: 0.5rem;
        font-size: 1.2rem;
        margin: 10px 0;
        background-color: transparent;
        border-radius: 10px;
        border: 1px solid ${({theme}) => theme.button};
        color: ${({theme}) => theme.text}
    }

    @media (max-width: 760px){
        width: 100%;  
    }
`;
export const ContactMessage = styled.div`
    width: 45%;
    textarea{
        width: 80%;
        height: 90%;
        padding: 0.5rem;
        font-size: 1.2rem;
        margin: 10px 0;
        background-color: transparent;
        border-radius: 10px;
        border: 1px solid ${({theme}) => theme.button};
        color: ${({theme}) => theme.text}
    }
    @media (max-width: 760px){
        width: 100%;
        height: 200px;
        textarea{
            width: 100%;
        }
    }
`;

export const ContactCaptcha = styled.div`

`;

export const CustomButton = styled.button`
    margin-top: 50px;
    color: #eee;
    background-color: ${({theme}) => theme.button};
    font-size: 1rem;
    outline: none;
    border: none;
    border-radius: 10px;
    padding: 1rem 2rem;
    cursor: pointer;

    &:hover{
        background-color: ${({theme}) => theme.hover};
        transition: 0.4s ease-in;
    }
`;

