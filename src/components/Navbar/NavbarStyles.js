import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
	background: rgba(15, 15, 15);
	margin-bottom: -60px;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: fixed;
	top: 0;
	z-index: 50;
	width: 100%;
	transition: background-color 0.3s ease-in;
	-webkit-box-shadow: 1px 18px 25px -15px #000000; 
	box-shadow: 1px 18px 24px -15px #000000;
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: start;
	height: 60px;
	${Container}
	
`;

export const NavLogo = styled(Link)`
	color: #fff;
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	z-index: 50;
`;

export const NavIcon = styled.img`
	margin-right: 1rem;
	width: 3rem;
`;

export const MobileIcon = styled.div`
	display: none;
	z-index: 50;
	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	width: 100%;
	@media screen and (max-width: 960px) {
		flex-direction: column;
		width: 100%;
		height: 100vh;
		position: fixed;
		padding-top: 20%;
		top: 0;
		left: 0;
		opacity: ${({ show }) => (show ? 1 : 0)};
		visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
		transform: translateY(${({ show }) => (show ? '0' : '-10px')});
		transition: opacity 0.5s ease;
		background-color: rgba( 15, 15, 15);
	}
	> li:first-child {
		margin-left: auto;
	}
`;

export const NavItem = styled.li`
	height: 60px;
	cursor: pointer;
	@media screen and (max-width: 960px) {
		width: 100%;
		&:hover {
			border: none;
		}
	}
`;

export const NavLinks = styled.a`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.3rem 1rem;
	height: 100%;
	&:hover {
		color: #008B8B;
		transition: all 0.3s ease;
	}
	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;
		&:hover {
			color: #008B8B;
			transition: all 0.3s ease;
		}
	}
`;

export const NavBtnLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
`;