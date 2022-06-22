import React from "react";
import { 
    FooterSection,
    FooterWrapper,
    Line
 } from './FooterStyles';
import { SocialNetWorks } from "../../data/socialData";

const Footer = () => {
    return (
        <FooterSection>
                <FooterWrapper>
                   <Line>
                        {SocialNetWorks.map((el, index) => (
                         <a key={index} href={el.url} target='_blank' rel="noreferrer"><el.icon /></a>
                        ))}
                        
                   </Line>
                   <h4>Kevinrkg97</h4>
                </FooterWrapper>
        </FooterSection>
    )
}

export default Footer;