import styled from 'styled-components';

export const NavContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 7vh;
    background-color ${({theme}) => theme.bgc};
    transition: 0.5s all ease-in;
    z-index: 100;
    -webkit-box-shadow: 6px 2px 17px 0px rgba(0,0,0,0.64);
    -moz-box-shadow: 6px 2px 17px 0px rgba(0,0,0,0.64);
    box-shadow: 6px 2px 17px 0px rgba(0,0,0,0.64);
`;

export const NavWrapper = styled.div`
    width:100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 12px;
`;

export const NavItem = styled.a`
    text-decoration: none;
    margin: 0 10px;
    color: ${({theme}) => theme.text};
    
    &:hover{
        color ${({theme}) => theme.button};
        cursor: pointer;
    }
`;

export const CustomButton = styled.a`
    color: ${({theme}) => theme.text};
    background-color: transparent;
    text-decoration: none;
    font-size: 1rem;
    border: 1px solid ${({theme}) => theme.button};
    border-radius: 10px;
    padding: 0px 15px;
    cursor: pointer;
    margin: 0 10px;

    &:hover{
        border: 1px solid ${({theme}) => theme.hover};
        transition: 0.4s ease-in;
    }
`;