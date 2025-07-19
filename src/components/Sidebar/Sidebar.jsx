import { useState } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';
import { 
    SidebarContainer,
    LogoContainer,
    LogoImg,
    LogoText,
    LinkText,
    ToggleArrow,
    MenuSidebar,
    MenuItem,
    ExtraInfo,
    ExtraInfoItem,
} from '../StyledComponents';
import getReverseDelay from '../../utils';

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

const Sidebar = (props) => {
    const [isOpened, setIsOpened] = useState(true);
    const [activePath, setActivePath] = useState('/');
    const containerClassnames = classnames('sidebar', { opened: isOpened });
    let animationDelayCount = 0.1;

    const goToRoute = (path) => {
        setActivePath(path);
        console.log(`going to "${path}"`);
    };

    const toggleSidebar = () => {
        setIsOpened(v => !v);
    };

    return (
        <SidebarContainer  $narrow={isOpened} className={ containerClassnames }>
            <LogoContainer style={{'animationDelay' : `${animationDelayCount += 0.1}s`}}>
                <LogoImg src={ logo } alt="TensorFlow logo"/>
                <LinkText $narrow={isOpened}><LogoText>TensorFlow</LogoText></LinkText>
                <ToggleArrow $narrow={isOpened} $delay={'1s'} onClick={ toggleSidebar }>
                    <FontAwesomeIcon icon={ isOpened ? 'angle-left' : 'angle-right' }/>
                </ToggleArrow>
            </LogoContainer>
            <MenuSidebar>
                {
                    routes.map(( route ) => (
                        <MenuItem 
                            $narrow={isOpened}
                            $isActive={activePath === route.path}
                            style={{'animationDelay' : `${animationDelayCount += 0.1}s`}}
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
                    bottomRoutes.map(( route, index ) => (
                        <ExtraInfoItem 
                            $narrow={isOpened}
                            $isActive={activePath === route.path}
                            $delay={`${getReverseDelay(index, bottomRoutes.length)}s`}
                            style={{'animationDelay' : `${animationDelayCount += 0.1}s`}}
                            key={ route.title }
                            onClick={() => {
                                goToRoute(route.path);
                            }}
                        >
                            <FontAwesomeIcon icon={ route.icon }/>
                            <LinkText $narrow={isOpened}>{ route.title }</LinkText>
                        </ExtraInfoItem>
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
