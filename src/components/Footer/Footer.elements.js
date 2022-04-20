import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background-color ${({theme}) => theme.bgc};
    color: ${({theme}) => theme.text};
    padding: 20px 0;
    transition: 0.5s all ease-in;
`;

export const FooterWrapper = styled.footer`
    width: 80%;
    margin: auto;
`;
export const FooterContent = styled.footer`
    border-top: 2px solid ${({theme}) => theme.button};

    h4{
        margin-top: 5px;
    }
`;