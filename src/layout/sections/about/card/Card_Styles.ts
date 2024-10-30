import styled, { css } from "styled-components";
import { theme } from "../../../../styles/Theme";
import { font } from "../../../../styles/Common";
import svgSprite from "../../../../assets/images/icons_sprite.svg"

const Card = styled.div<{margin?: string}>`
    border-bottom: 2px solid ${theme.colors.borderBg};
    margin-bottom: ${props => props.margin};
    padding-bottom: 20px;
`

const CardContainerTop = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 10px;
`

const CardContainerBottom = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media ${theme.media.mobile} {
        margin-top: 10px;
        flex-direction: column;
        gap: 10px;
    }
`

const Info = styled.span<{iconId?: string, display?: string}>`
    ${font({weight: 500, Fmax: 12, Fmin: 12, color: `${theme.colors.font.lightContent}`})};
    letter-spacing: 0.08em;
    padding-left: 20px;
    display: flex;
    align-items: center;
    position: relative;
    
    &:nth-of-type(1) {
        flex: 1 0 35%;
    }
    &:nth-of-type(2) {
        flex: 6 0 20%;
        display: ${props => props.display};
    }
    &:nth-of-type(3) {
        flex: 1 -1 20%;

    }

    &::before {
        content: "";
        top: 50%;
        left: 0;
        transform: translate(0, -50%);
        width: 16px;
        height: 12px;
        mask-image: ${props => `url(${svgSprite}#${props.iconId})`};
        background-color: currentColor;
        color: ${theme.colors.font.lightContent};

        position: absolute;
    }
`

const Position = styled.h4`
    ${font({weight: 400, Fmax: 20, Fmin: 16, color: `${theme.colors.font.darkContent}`})};
    line-height: 1.4;
    letter-spacing: 0.05em;

    @media ${theme.media.mobile} {
        flex-basis: 70%;
    }
`
const Occupation = styled.span`
    border-radius: 100px;
    width: 84px;
    height: 24px;
    background-color: ${theme.colors.occupationBg};
    ${font({weight: 600, Fmax: 9, Fmin: 9, color: `${theme.colors.font.occupationFont}`, lineHeight: 2.8})};
    text-align: center;
`

export const S = {
    Card,
    CardContainerTop,
    CardContainerBottom,
    Info,
    Position,
    Occupation
}
