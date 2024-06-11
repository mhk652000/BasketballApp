import React, { useState, useEffect } from 'react';
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    HamburgerIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
 } from './Navbar.elements';
 
import logo from '../../images/logo.jpg';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [accessToken, setAccessToken] = useState('');
    const [uName, setUName] = useState('');

    const [homeClick, setHomeClick] = useState(false);
    const [servicesClick, setServicesClick] = useState(false);
    const [productsClick, setProductsClick] = useState(false);

    const handleHomeClick = () => {
        setHomeClick(true);
        setProductsClick(false);
        setServicesClick(false);
    }
    const handleServicesClick = () => {
        setHomeClick(false);
        setProductsClick(false);
        setServicesClick(true);
    }
    const handleProductsClick = () => {
        setHomeClick(false);
        setProductsClick(true);
        setServicesClick(false);
    }

    const handleClick = () =>  setClick(!click);
    
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
        const storedAccessToken = localStorage.getItem('accessToken');
        const userNamee= localStorage.getItem('userName');

        if (storedAccessToken) {
            setAccessToken(storedAccessToken);
        }
        if( userNamee){
            setUName(userNamee);
        }
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav style={{backgroundColor: '#000000'}}>
                <NavbarContainer>
                    <NavLogo to='/'> 
                        {/* <NavIcon /> */}
                        <img src={logo} alt="Logo" style={{ width: '300px'}}/>
                    </NavLogo>
                    <HamburgerIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </HamburgerIcon>
                    <NavMenu onClick={handleClick} click={click} >
                        <NavItem onClick={handleHomeClick} homeClick={homeClick}>
                            <NavLinks to='/' onClick={closeMobileMenu}>
                                Home
                            </NavLinks>
                        </NavItem>
                    
                    
                        <NavItem onClick={handleServicesClick} servicesClick={servicesClick}>
                            <NavLinks to='/games' onClick={closeMobileMenu}>
                                Games
                            </NavLinks>
                        </NavItem>
                    
                    
                        <NavItem onClick={handleProductsClick} productsClick={productsClick}>
                            <NavLinks to='/Products' onClick={closeMobileMenu}>
                                Live
                            </NavLinks>
                        </NavItem>

                        {accessToken ? (
                            <NavItemBtn>
                                <NavLinks to='/sign-up' onClick={closeMobileMenu}>
                                    {uName}
                                </NavLinks>
                            </NavItemBtn>
                        ) : (
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to='/sign-up'>
                                        <Button primary>Login/Register</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to='/sign-up'>
                                        <Button onClick={closeMobileMenu} fontBig primary>Login/Register</Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        )}
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>    
        </>
    )
}

export default Navbar;

