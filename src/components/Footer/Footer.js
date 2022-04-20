import {
    FooterContainer,
    FooterContent,
    FooterWrapper
} from './Footer.elements';
import { FaCopyright } from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterContent>
                    <h4><FaCopyright /> 2022, Kevin Guzmán</h4>
                </FooterContent>
            </FooterWrapper>
        </FooterContainer>
    );
}

export default Footer;