import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";
import styled from "styled-components";
import svgSprite from "./../../../assets/images/icons_sprite.svg"

const About = styled.section`
    position: relative;
    overflow: hidden;

    &::after {
        content: "";
        top: -10%;
        left: 70%;
        display: block;
        width: 935px;
        height: 1019px;
        background-image: url(${svgSprite}#bricksWhiteMode);

        position: absolute;
    }

    @media ${theme.media.proTablet} {
        &::after {
            display: none;
        }
    }
`

const AboutInfo = styled.div`
    max-width: 710px;
    width: 100%;
    overflow: hidden;
`

const InfoBlock = styled.div`
    margin-bottom: 38px;

    &:last-of-type {
        margin-bottom: 0;
    }
`

const Title = styled.h3`
    ${font({weight: 700, Fmax: 42, Fmin: 32})};
    color: ${theme.colors.font.darkTitle};
    margin-bottom: 3.8rem;

    @media ${theme.media.proTablet} {
        text-align: center;
        margin-bottom: 2.2rem;
    }
`

export const S = {
    About,
    AboutInfo,
    InfoBlock,
    Title
}