import React, {useState} from 'react';
import {  FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import {
	Nav,
	NavbarContainer,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
} from './NavbarStyles.js';
import { useLocation, useHistory } from 'react-router-dom';
import { data } from '../../data/navbarData';



const Navbar = () => {
    const [show, setShow] = useState(false);

	let history = useHistory();
	let location = useLocation();

    const handleClick = () => {
        setShow(!show);
    };
    
    const scrollTo = (id) => {
        const element = document.getElementById(id);
    
        element.scrollIntoView({
            behavior: 'smooth',
        });
    };
    
    
    const closeMobileMenu = (to, id) => {
        if (id && location.pathname === '#') {
            scrollTo(id);
        }
    
        history.push(to);
        setShow(false);
    };

    return (
            <Nav>
                <NavbarContainer>
                    <MobileIcon onClick={handleClick}>
                        { show ? <FaTimes color='#fff' /> : <CgMenuRight color='#fff' /> }
                    </MobileIcon>
                    <NavMenu show={show}>
                            {data.map((el, index) => (
                                <NavItem key={index}>
                                    <NavLinks href={el.to}>
                                        {el.text}
                                    </NavLinks>
                                </NavItem>
                            ))}
                    </ NavMenu>
                </NavbarContainer>
            </Nav>

    )
}

export default Navbar;