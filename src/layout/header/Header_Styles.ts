import styled, { css } from "styled-components"
import { theme } from "../../styles/Theme"

const Header = styled.header<{isOpen?: boolean}>`

    background-color: ${theme.colors.pageBg.lightMode};
    padding-top: 40px;
    padding-bottom: 10px;
    position: fixed;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
    top: 0;
    right: 0;
    left: 0;
    z-index: 9999;

    transform: translateY(-100%);
    transition: ${theme.animations.transition};

    ${props => props.isOpen && css<{isOpen?: boolean}>`
    transform: translateY(0);
    transition: ${theme.animations.transition};

    `}

    @media ${theme.media.proTablet} {
        padding-top: 20px;
    }
    @media ${theme.media.miniTablet} {
        padding-top: 40px;
    }

`

const HeaderMenuDesktop = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 790px;
    width: 100%;
    padding-top: 8px;

    @media ${theme.media.proTablet} {
        max-width: 900px;
        padding-top: 10px;
        flex-wrap: nowrap;
        
        gap: 30px;
        justify-content: center;
    }

`

export const S = {
    Header,
    HeaderMenuDesktop

}