import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100%;
    height: 100vh;
    justify-content: center;
    transition: 0.5s all ease-in;
`;

export const HeaderWrapper = styled.div`
    width; 100%;
    height: 100%;
    margin: auto;
    max-width: 1300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const InfoContainer = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    svg{
        font-size: 10rem;
        float:right;
        fill: ${({theme}) => theme.text};
    }

    h1{
        text-align: left;
        width: 100%;
        font-size: 40px;
        text-transform: uppercase;
        color: ${({theme}) => theme.button};
    }
    h2, h3,h4  {
        text-align: left;
        width: 100%;
    }
   h4{
       margin-top: 10px;
       color: #666;
   }
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

export const LottieContainer = styled.div`
    position: absolute;
    top: 50px;
    right: 50px;
    width: 400px;
`;
    
