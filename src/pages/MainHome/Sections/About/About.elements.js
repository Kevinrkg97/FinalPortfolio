import styled from 'styled-components';

export const AboutContainer = styled.div`
    width 100%;
`;

export const AboutWrapper = styled.div`
    width: 70%;
    margin: auto;
`;

export const AboutContent = styled.div`
    h4{
        padding: 40px 0;
        width: 60%;
        font-weight: 400;
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
`;


export const ItemsTech = styled.div`
    width: 70%;
    display: flex;
    flex-wrap: wrap;
`;

export const ItemTech = styled.h4`
    border-radius: 2px;
    border: 1px solid ${({theme}) => theme.button};
    margin: 5px 10px;
    padding: 0px 15px
`;
