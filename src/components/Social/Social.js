import {
    FaGithub, 
    FaLinkedin, 
    FaTwitter, 
    FaWhatsapp
} from 'react-icons/fa'
import {SocialContainer, SocialList, SocialItem} from './Social.elements';

const Social = () =>{
    return(
        <SocialContainer>
            <SocialList>
                <SocialItem><a href='https://github.com/Kevinrkg97/' target='_blank' rel="noreferrer"><FaGithub /><span>github</span></a></SocialItem>
                <SocialItem><a href='https://www.linkedin.com/in/kevinrkg97/' target='_blank' rel="noreferrer"><FaLinkedin /><span>linkedin</span></a></SocialItem>
                <SocialItem><a href='https://twitter.com/kevinrkg97' target='_blank' rel="noreferrer"><FaTwitter /><span>Twitter</span></a></SocialItem>
                <SocialItem><a href='https://wa.me/+5215539650500/' target='_blank' rel="noreferrer"><FaWhatsapp /><span>whatsapp</span></a></SocialItem>

            </SocialList>
        </SocialContainer>
    )
}

export default Social;