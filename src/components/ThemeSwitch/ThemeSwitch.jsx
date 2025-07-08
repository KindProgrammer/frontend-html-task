import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext';

const LightTheme = styled.button`
    height: 1.5rem;
    width: 1.5rem;
    background: yellow;
    border-radius: 50%;
    outline: none;
`

const DarkTheme = styled.button`
    height: 1.5rem;
    width: 1.5rem;
    background: blue;
    border-radius: 50%;
    outline: none;
`

const ThemeSwitchContainer = styled.div`
    width: 2rem;
    display: flex;
    gap: 0.5rem;
`

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <ThemeSwitchContainer>
            { theme === 'light' ? 
                <LightTheme onClick={() => { toggleTheme('dark') }}>L</LightTheme> 
                : 
                <DarkTheme onClick={() => { toggleTheme('light') }}>D</DarkTheme>
            }
        </ThemeSwitchContainer>
    )
}

export default ThemeSwitch;