import styled from "styled-components";


export const FooterSection = styled.footer`
    padding-top: 100px;
`;

export const FooterWrapper = styled.div`
    width: 95%;
    margin: auto;    
`;

export const Line = styled.div`
    border-bottom: 2px solid #008B8B;
    text-align: right;
    font-size: 25px;
    a{
        color: #fff;
        transition:  0.5s;
        &:hover{
            transform: translateY(10px);
            color: #008B8B;
        }
    }
    svg{
        margin: 0 5px;
    }
`;

