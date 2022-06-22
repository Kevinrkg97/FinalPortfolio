import styled from 'styled-components';

export const ScrollToTopBtn = styled.button`
    position: fixed;
    color: #fff;
    bottom: 30px;
    right: 30px;
    font-size: 30px;
    background-color: #008B8B;
    z-index: 10;
    border-radius: 50%;
    padding: 5px 10px;
    cursor: pointer;
    border: none;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, .6);
    &:hover{
        background-color: #444;
    }
`;