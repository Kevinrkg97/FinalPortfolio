import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Sora', sans-serif;
        background: #111;
        color: #fff;
    }

    html{
        scroll-behavior: smooth;
    }

    strong{
        color: #008B8B;
        text-transform: uppercase;
    }

    h1{
        font-size: 30px;
        font-weight: 800;
        color: #ddd;
    }

    h2{
        color: #008B8B;
        font-weight: 600;
        font-size: 25px;
    }

    h3{
        font-weight: 400;
        
    }
    
    p{
        font-weight: 200;
    }

    * {
    scrollbar-width: auto;
    scrollbar-color: #008b8b #ffffff;
  }

    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 16px;
    }

    *::-webkit-scrollbar-track {
        background: transparent;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #008b8b;
        border-radius: 10px;
        border: 5px solid #111;
    }
`;

export const Container = styled.div`
	width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 50px;
	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
`;

export const CustomButton = styled.a`
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




export default GlobalStyle;