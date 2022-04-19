import styled from 'styled-components';

export const SwitchContainer= styled.div`
    position: fixed;
    right: 0px;
    bottom: 50%;
    background-color ${({theme}) => theme.bgc};
    transition: 0.5s all ease-in;
`;

export const SwitchWrapper = styled.div`
    max-width: 1300px;
    margin: auto;
    padding-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
`;

export const SwitcBGC = styled.div`
    position: relative;
    width: 35px;
    height: 70px;
    margin-right: 15px;
    border-radius: 30px;
    background-color: ${({theme}) => theme.toggle};
    transition: 1s all ease-in;
`;

export const ButtonSwitch = styled.button`
    position: absolute;
    cursor: pointer;
    right: 5px;
    top: ${({position}) => position ? '40px' : '5px'};
    width: 25px;
    height: 25px;
    border: none;
    border-radius: 50%;
    background-color: #fff;
    transition: 0.4s all ease-in;
    outline: none;
`;