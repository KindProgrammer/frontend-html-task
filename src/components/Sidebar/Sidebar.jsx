import { useState } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

const SidebarContainer = styled.div`
    background: ${({ theme }) => theme.sidebarBackground};
    color: ${({ theme }) => theme.text};
    width: 200px;
    height: 80vh;
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.sidebarBackgroundHover};
    padding: 1rem;
    display: flex;
    flex-direction: column;
`

const LogoImg = styled.img`
    width: 2rem;
`

const LogoContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    margin-bottom: 3rem;
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

const MenuItem = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-left: 1rem;
`

const ExtraInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: auto;
`

const Sidebar = (props) => {
    const { theme } = useTheme();
    const { color } = props;
    const [isOpened, setIsOpened] = useState(false);
    const containerClassnames = classnames('sidebar', { opened: isOpened });

    const goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    const toggleSidebar = () => {
        setIsOpened(v => !v);
    };

    return (
        <SidebarContainer className={ containerClassnames }>
            <LogoContainer>
                <LogoImg src={ logo } alt="TensorFlow logo"/>
                <span>TensorFlow</span>
                <ToggleArrow onClick={ toggleSidebar }>
                    <FontAwesomeIcon icon={ isOpened ? 'angle-left' : 'angle-right' }/>
                </ToggleArrow>
            </LogoContainer>
            <MenuSidebar>
                {
                    routes.map(route => (
                        <MenuItem
                            key={ route.title }
                            onClick={() => {
                                goToRoute(route.path);
                            }}
                        >
                            <FontAwesomeIcon icon={ route.icon }/>
                            <span>{ route.title }</span>
                        </MenuItem>
                    ))
                }
            </MenuSidebar>
            <ExtraInfo>
                {
                    bottomRoutes.map(route => (
                        <MenuItem
                            key={ route.title }
                            onClick={() => {
                                goToRoute(route.path);
                            }}
                        >
                            <FontAwesomeIcon icon={ route.icon }/>
                            <span>{ route.title }</span>
                        </MenuItem>
                    ))
                }
            </ExtraInfo>
        </SidebarContainer>
    );
};

Sidebar.propTypes = {
    color: PropTypes.string,
};

export default Sidebar;
