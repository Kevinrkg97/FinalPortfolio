import styled from 'styled-components';

export const AboutContainer = styled.div`
    width: 100%;
    margin: auto;
`;

export const AboutWrapper = styled.div`
    width: 75%;
    margin: auto;
    @media (max-width: 760px){
        text-align: center;
        width: 100%;
    }
    @media (min-width: 1400px){
        width: 60%;
    }
    
`;

export const AboutContent = styled.div`

    h4{
        padding: 40px 0;
        width: 60%;
        font-weight: 400;
        @media (max-width: 760px){
            text-align: center;
                width: 90%;
                margin: auto;
            
        }
    }
    h2{
        color: ${({theme}) => theme.button}
    }
`;

export const ProfileImage = styled.img`
    position: absolute;
    right: 100px;
    width: 300px;
    height: 250px;
    border-radius: 50%;
    background-size: cover;
    -webkit-box-shadow: 6px 2px 17px 0px rgba(0,0,0,0.64);
    -moz-box-shadow: 6px 2px 17px 0px rgba(0,0,0,0.64);
    box-shadow: 6px 2px 17px 0px rgba(0,0,0,0.64);
    @media (max-width: 760px){
        position: relative;
        right: 0;
        margin-bottom: 15px;
    }
    @media (min-width: 1400px){
        right: 300px;
    }
    `;


export const ItemsTech = styled.div`
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 760px){
        width: 90%;
    }
   
`;

export const ItemTech = styled.h4`

    border-radius: 2px;
    border: 1px solid ${({theme}) => theme.button};
    margin: 5px 10px;
    padding: 0px 15px
`;
