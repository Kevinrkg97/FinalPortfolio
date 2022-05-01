import styled from "styled-components";


export const ExperienceContainer = styled.div`
    width: 100%;
`;

export const ExperienceWrapper = styled.div`
    width: 75%;
    margin: auto;

    @media (min-width: 1400px){
        width: 60%;
    }
    h2{
        color: ${({theme}) => theme.button}
    }
`;

export const ExperienceInfo = styled.div`

`;