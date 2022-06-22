import React from "react";
import {
    SkillsSection,
    SkillsWrapper,
    Title,
    TextTitle,
    CarouselContainer,
    SlideHolder,
    ImageSlider,
    CardShadow,
    Content
} from './SkillsStyles';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { certificates } from "../../../data/certificatesData";

const Skills = () => {
    return (
        <SkillsSection id="skills">
           
            <SkillsWrapper>
            <Title>
                    <TextTitle>H</TextTitle>
                    <TextTitle>a</TextTitle>
                    <TextTitle>b</TextTitle>
                    <TextTitle>i</TextTitle>
                    <TextTitle>l</TextTitle>
                    <TextTitle>i</TextTitle>
                    <TextTitle>d</TextTitle>
                    <TextTitle>a</TextTitle>
                    <TextTitle>d</TextTitle>
                    <TextTitle>e</TextTitle>
                    <TextTitle>s</TextTitle>
                </Title>
                <Content>
                <CarouselContainer>
                    <Carousel 
                        showThumbs={false}
                        showStatus={false}
                        infiniteLoop
                        autoPlay
                        emulateTouch
                        useKeyboardArrows
                        transitionTime={1000}
                        //    axis="vertical"
                        centerMode
                            
                        //    selectedItem={1}
                    >
                        {certificates.map((el, index) => (
                            <SlideHolder  key={index}>    
                                <CardShadow />        
                                <ImageSlider src={el.image} alt='flutter' loading="lazy" />
                            </SlideHolder>
                        ))}
                    </Carousel>
                </CarouselContainer>
                 <div className='technologies'>
                        <svg viewBox="0 0 36 36" class="circular-chart flutter">
                            <path class="circle1 circle"
                                stroke-dasharray="90, 100"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                        </svg>
                        <svg viewBox="0 0 36 36" class="circular-chart flask">
                            <path class="circle2 circle"
                                stroke-dasharray="90, 100"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                        </svg>
                        <svg viewBox="0 0 36 36" class="circular-chart pandas">
                            <path class="circle3 circle"
                                stroke-dasharray="85, 100"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                        </svg>
                        
                        <svg viewBox="0 0 36 36" class="circular-chart react">
                            <path class="circle4 circle"
                                stroke-dasharray="70, 100"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                        </svg>
             
                        <svg viewBox="0 0 36 36" class="circular-chart sql">
                            <path class="circle5 circle"
                                stroke-dasharray="60, 100"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                        </svg>
             
                        <svg viewBox="0 0 36 36" class="circular-chart wordpress">
                            <path class="circle6 circle"
                                stroke-dasharray="40, 100"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                        </svg>
                        <svg viewBox="0 0 36 36" class="circular-chart wordpress1">
                            <path class="circle7 circle"
                                stroke-dasharray="75, 100"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                        </svg>
                        <svg viewBox="0 0 36 36" class="circular-chart mysql">
                            <path class="circle8 circle"
                                stroke-dasharray="70, 100"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                        </svg>
                
            </div>
                </Content>
               
            </SkillsWrapper>
        </SkillsSection>
    )
}

export default Skills;