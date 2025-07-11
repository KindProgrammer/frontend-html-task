import { useState } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { useTheme } from '../../context/ThemeContext';

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

const appearDown = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const appearUp = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
    from { opacity: 1; }
    to { opacity: 0; display: hidden; }
`;

const SidebarContainer = styled.div`
    animation: ${appearDown} 0.6s ease-out forwards;
    background: ${({ theme }) => theme.sidebarBackground};
    color: ${({ theme }) => theme.text};
    width: ${props => props.$narrow ? '200px' : '2rem'};
    height: 80vh;
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.sidebarBackgroundHover};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    transition: all 0.5s ease;
`

const LogoImg = styled.img`
    width: 2rem;
`

const LogoContainer = styled.div`
    opacity: 0;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    margin-bottom: 3rem;
    animation: ${appearDown} 0.6s ease-out forwards;
`

const ToggleArrow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: -2rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.sidebarBackgroundHover};
`

const MenuSidebar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const LinkText = styled.span`
    opacity: 0;
    transition: 
        opacity 0.3s ease,
        height 0.3s ease;
    
    ${props => props.$narrow && `
        opacity: 1;
        transition: 
            opacity 0.3s ease 0.1s;
    `}
`

const MenuItem = styled.div`
    height: 1.5rem;
    opacity: 0;
    display: flex;
    gap: 1.5rem;
    align-items: center;
    transition: all 0.5s ease;
    margin-left: 0.5rem;
    animation: ${appearDown} 0.6s ease-out forwards;
`

const ExtraInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: auto;
    animation: ${appearUp} 0.6s ease-out forwards;
`

const ExtraInfoItem = styled.div`
    height: 1.5rem;
    opacity: 0;
    display: flex;
    gap: 1.5rem;
    align-items: center;
    transition: all 0.5s ease;
    margin-left: 0.5rem;
    animation: ${appearUp} 0.6s ease-out forwards;
`

const Sidebar = (props) => {
    const [isOpened, setIsOpened] = useState(true);
    const containerClassnames = classnames('sidebar', { opened: isOpened });
    let animationDelayCount = 0.1;

    const goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    const toggleSidebar = () => {
        setIsOpened(v => !v);
    };

    return (
        <SidebarContainer  $narrow={isOpened} className={ containerClassnames }>
            <LogoContainer style={{'animationDelay' : `${animationDelayCount += 0.1}s`}}>
                <LogoImg src={ logo } alt="TensorFlow logo"/>
                <LinkText $narrow={isOpened}>TensorFlow</LinkText>
                <ToggleArrow onClick={ toggleSidebar }>
                    <FontAwesomeIcon icon={ isOpened ? 'angle-left' : 'angle-right' }/>
                </ToggleArrow>
            </LogoContainer>
            <MenuSidebar>
                {
                    routes.map((route, index) => (
                        <MenuItem $narrow={isOpened} style={{'animationDelay' : `${animationDelayCount += 0.1}s`}}
                            key={ route.title }
                            onClick={() => {
                                goToRoute(route.path);
                            }}
                        >
                            <FontAwesomeIcon  icon={ route.icon }/>
                            <LinkText $narrow={isOpened}>{ route.title }</LinkText>
                        </MenuItem>
                    ))
                }
            </MenuSidebar>
            <ExtraInfo>
                {
                    bottomRoutes.reverse().map(( route, index ) => (
                        <ExtraInfoItem $narrow={isOpened} style={{'animationDelay' : `${animationDelayCount += 0.1}s`}}
                            key={ route.title }
                            onClick={() => {
                                goToRoute(route.path);
                            }}
                        >
                            <FontAwesomeIcon icon={ route.icon }/>
                            <LinkText $narrow={isOpened}>{ route.title }</LinkText>
                        </ExtraInfoItem>
                    )).reverse()
                }
            </ExtraInfo>
        </SidebarContainer>
    );
};

Sidebar.propTypes = {
    color: PropTypes.string,
};

export default Sidebar;
