import {
    NavContainer,
    NavWrapper,
    NavItem,
    CustomButton
} from './Navbar.elements';
import RKGG from '../../assets/RKGG.pdf';


const Navbar = () => {
    return (
        <>
            <NavContainer>
                <NavWrapper>
                    <NavItem href='#about'>Sobre mí</NavItem>
                    <NavItem href='#projects'>Proyectos</NavItem>
                    {/* <NavItem href='#experience'>Experiencia</NavItem> */}
                    <NavItem href='#contact' >Contacto</NavItem>
                    <CustomButton href={RKGG} alt='RKGG' target='_blank'>Resumen</CustomButton>
                </NavWrapper>
            </NavContainer>
        </>
    )
}

export default Navbar;