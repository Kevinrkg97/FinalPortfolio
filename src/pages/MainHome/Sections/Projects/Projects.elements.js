import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    width: 100%;
    justify-content: center;
    transition: 0.5s all ease-in;
    padding: 50px 0
`;

export const ProjectsWrapper = styled.div`
    width: 80%;
    margin: auto;
    
    h2{
        margin: 20px 0;
        color: ${({theme}) => theme.button}
    }
    @media (max-width: 760px){
        width: 100%;
        text-align: center;

    }
`;

export const ItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;  
    justify-content: space-between;
    @media (max-width: 760px){
        justify-content: center;
    }
`;

export const Card = styled.div`
    width: 300px;
    margin: 15px 0;
    height: 200px;
    overflow: hidden;
    -webkit-box-shadow: 6px 2px 17px 0px rgba(0,0,0,0.64);
    -moz-box-shadow: 6px 2px 17px 0px rgba(0,0,0,0.64);
    box-shadow: 6px 2px 17px 0px rgba(0,0,0,0.64);
    transition: 0.2s all ease-in;

    img{
        width: 100%; 
    }

    &:hover{
        transform: translateY(-1rem);
    }

    

`;