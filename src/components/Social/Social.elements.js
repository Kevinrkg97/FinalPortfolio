import styled from 'styled-components';

export const SocialContainer = styled.div`
    position: fixed;
    width: 60px;
    margin-top: 250px;
    z-index: 99;
    border: 1px solid;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, .6);
    border: none;
    @media (max-width: 760px){
        display: none;
    }
`;

export const SocialList = styled.ul`

`;

export const SocialItem = styled.li`
    height: 50px;
    position: relative;
    background: ${({theme}) => theme.button};
  

    a{
        display: block;
        color: ${({theme}) => theme.text};
        width: 100%;
        height: 100%;
        line-height: 50px;
        border-bottom: 1px solid #000;
        padding-left: 20px;
        text-decoration: none;
        transition: all .2s linear;
        overflow: hidden;
        background: ${({theme}) => theme.button};

        span{
            color: ${({theme}) => theme.text};
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
            margin-left: 50px;
            display: none;
            color: black;
        }

        &:hover{
            width: 180px;
            border: 1px solid #000;
            border-top-right-radius: 25px;
            border-bottom-right-radius: 25px;
            box-shadow: 2px 5px 10px rgb(0, 0, 0, 0.6);
        }

        &:hover span{
            display: block;
        }
    }

    svg{
        position: absolute;
        font-size: 30px;
        top: 8px;
        left: 14px;
        right: 14px;
    }
`;