import styled from "styled-components";
import python from '../../../assets/python.png';
import node from '../../../assets/nodejs.png';
import postgres from '../../../assets/postgres.png';
import flutter from '../../../assets/flutter.png';
import react from '../../../assets/react.png';
import java from '../../../assets/java.png';
import wordpress from '../../../assets/wordpress.png';
import mysql from '../../../assets/mysql.png';


export const SkillsSection = styled.section`
    width: 100%;
    margin: auto;
   

`;

export const Content = styled.div`
  
    @media(min-width: 768px){
        display: flex;
    }
`;

export const SkillsWrapper = styled.div`
    width: 95%;
    margin:auto;
    max-width: 1500px;
    
    

    .technologies{
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        @media(min-width: 768px){
            width: 55%;
        }
    }
    
    
    .circular-chart {
        display: block;
        margin: 30px;
        max-height: 100px;
        background-size: 50%;
        background-position: center;
        background-repeat: no-repeat;
      }
    
       .flutter, .circle1{
        stroke: #215732;
        background-image: url(${node});
      } .flask, .circle2{
        stroke: #357da1;
        background-image: url(${react});
      } .pandas, .circle3{
        stroke: #130654 ;
        background-image: url(${postgres});
      } .react, .circle4{
        stroke: #61dafb;
        background-image: url(${flutter});
      } .sql, .circle5{
        stroke: #f29221;
        background-image: url(${python});
      } .wordpress, .circle6{
        stroke: #D0A384;
        background-image: url(${java});
      }
      .wordpress1, .circle7{
        stroke: #0073aa;
        background-image: url(${wordpress});
      }.mysql, .circle8{
        stroke: #f8f8f8;
        background-image: url(${mysql});
      }
      
      
      
      .circle {
        fill: none;
        stroke-width: 1.3;
        stroke-linecap: round;
        animation: progress 1s ease-out forwards;
      }
      
      @keyframes progress {
        0% {
          stroke-dasharray: 0 100;
        }
      }
`;

export const Title = styled.span`
    position: relative;
    left: 10px;
    top: 70px;
`;

export const TextTitle = styled.span`
    font-size: 70px;
    color: #008b8b25;
    transition: all 0.3s ease-out;
    user-select: none;
    &:hover{
        color: #222;
        transform: translateY(5px);
    }
    @media(max-width: 550px){
        font-size: 50px;
    }
`;

export const CarouselContainer = styled.div`
    padding-top: 70px;
    width: 95%;
    margin: auto;
    @media(min-width: 768px){
        width: 40%;
    }
`;

export const SlideHolder = styled.div`
    width: 100%;
    height: 300px;
    
`;

export const CardShadow = styled.span`
    -webkit-box-shadow: inset 0px 0px 50px 18px #000000; 
    box-shadow: inset 0px 0px 50px 18px #000000;
    position: absolute;
    width: 100%;
    height: 300px;
    transition: all 0.18s ease-in;
    
    a, img{
        display: none;
    }
    `

export const ImageSlider = styled.img`
    width: 100%;
    object-fit: cover;
    height: 100%;
    padding: 0 10px;
    
`;

export const ContainerIcons = styled.span`
    position: absolute;
    top: 0px;
    width: 100%;
    margin: auto;
    overflow: hidden;
    z-index: -1;
    p{
        font-size: 70px;
        width: 100%;
        animation: example1 15s linear;
        animation-iteration-count: infinite;
        opacity: 0.1;
        color: #008B8B;
        @keyframes example1 {
            0%   { 
            transform: translateX(-100%); 		
            }
            50%{
                transform: translateX(0%); 

            }
            100% { 
            transform: translateX(100%); 
            }
        }
    }

    
`;