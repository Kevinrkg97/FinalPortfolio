import { useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import { ScrollToTopBtn } from './ScrollToTop.elements';

const ScrollToTop = () => {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 300){
            setVisible(true)
        }
        else if (scrolled <= 300){
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0, behavior: 'smooth'
        });
    }

    window.addEventListener('scroll', toggleVisible);

    return(     
        <ScrollToTopBtn  onClick={scrollToTop} style={{display : visible ? 'inline' : 'none',}} >
            <FaAngleUp   />
        </ScrollToTopBtn>
    );
}

export default ScrollToTop;