import styled from "styled-components";

export const MainHomeContainer = styled.div`
    background-color ${({theme}) => theme.bgc};
    color: ${({theme}) => theme.text};
    transition: 0.5s all ease-in;
`;