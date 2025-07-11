import styled, { keyframes } from 'styled-components';

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

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const SidebarContainer = styled.div`
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

export const LogoImg = styled.img`
    width: 2rem;
`
export const LogoText = styled.span`
    color: ${({ theme }) => theme.textLogo};
    font-weight: bold;
`

export const LogoContainer = styled.div`
    opacity: 0;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    margin-bottom: 3rem;
    animation: ${appearDown} 0.6s ease-out forwards;
`

export const ToggleArrow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: -4rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.sidebarBackgroundHover};
    transition: all 0.5s ease;
    opacity: 0;
    transform: translateX(100%);
    animation: ${slideIn} 0.8s ease-out forwards;
    animation-delay: ${props => props.$delay || '0s'};

    ${props => props.$narrow && `
        right: -2rem;
    `}
`

export const MenuSidebar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const LinkText = styled.span`
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

export const MenuItem = styled.div`
    height: 1.5rem;
    opacity: 0;
    display: flex;
    gap: 1.5rem;
    align-items: center;
    transition: all 0.5s ease;
    padding: 0.5rem;
    border-radius: 10px;
    animation: ${appearDown} 0.6s ease-out forwards;
    color: ${props => props.$isActive 
        ? props.theme.textActive 
        : 'none'
        };

    &:hover {
        color: ${({ theme }) => theme.textHover};
    }
`

export const ExtraInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: auto;
    animation: ${appearUp} 0.6s ease-out forwards;
`

export const ExtraInfoItem = styled.div`
    height: 1.5rem;
    opacity: 0;
    display: flex;
    gap: 1.5rem;
    align-items: center;
    transition: all 0.5s ease;
    padding: 0.5rem;
    border-radius: 10px;
    animation: ${appearUp} 0.6s ease-out forwards;
    color: ${props => props.$isActive 
        ? props.theme.textActive 
        : 'none'
        };

    &:hover {
        color: ${({ theme }) => theme.textHover};
    }
`