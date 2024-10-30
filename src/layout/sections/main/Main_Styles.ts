import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"
import photo from "../../../assets/images/avatar.webp"
import svgSprite from "./../../../assets/images/icons_sprite.svg"

const Main = styled.section`
    display: flex;
    height: 80vh;
    overflow: hidden;
    @media ${theme.media.proTablet} {
        height: auto;
    }
`

const TextWrapper = styled.div`
    max-width: 636px;
    ${font({weight: 700, Fmax: 58, Fmin: 36, color: `${theme.colors.font.darkTitle}`})};

    @media ${theme.media.proTablet} {
        margin: 50px 0;
        padding-right: 20px;
    }
`

const MainName = styled.h2`
    font-size: inherit;
    background: ${theme.colors.font.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const MainTitle = styled.h1`
    font-size: inherit;
    white-space: nowrap;
    @media ${theme.media.mobile} {
        white-space: normal;
    }
`

const MainText = styled.p`
    font-size: inherit;
`

const PhotoWrapper = styled.div`
    position: relative;
    border-radius: 230px;
    width: 350px;
    height: 350px;
    background-image: url(${photo});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    &::before {
        content: "";
        position: absolute;
        top: -9px;
        bottom: -9px;
        right: -9px;
        left: -9px;
        background: ${theme.colors.font.gradient};
        border-radius: 230px;
        z-index: -1;
    }

    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 770px;
        height: 770px;
        background-image: url(${svgSprite}#abstractionMain);
        z-index: -2;
    }

    @media ${theme.media.proTablet} {
        width: 250px;
        height: 250px;
        margin: 10px 0;
        &::after {
            display: none;
        }
    }
`

export const S = {
    Main,
    TextWrapper,
    MainName,
    MainTitle,
    MainText,
    PhotoWrapper
}

