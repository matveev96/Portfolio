import React from "react";
import styled, { css } from "styled-components";
import { Icon } from '../../../../components/icon/Icon';
import { theme } from "../../../../styles/Theme";
import { font } from "../../../../styles/Common";
import svgSprite from "../../../../assets/images/icons_sprite.svg"

type CardPropsType = {
    position: string,
    occupation: string,
    organization: string,
    city?: string,
    period: string,
    display?: string,
    margin?: string,
    iconId?: string
}

export const Card = (props: CardPropsType) => {
    return (
        <CardStyle margin={props.margin}>
            <CardContainerTop>
                <Position>{props.position || "null"}</Position>
                <Occupation>{props.occupation || "null"}</Occupation>
            </CardContainerTop>

            <CardContainerBottom>
                <Info iconId="building">{props.organization || "null"}</Info>
                <Info iconId="map" display={props.display} >{props.city}</Info>
                <Info iconId="calendar">{props.period || "null"}</Info>
            </CardContainerBottom>
        </CardStyle>
    )
}


const CardStyle = styled.div<{margin?: string}>`
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
    font-weight: 500;
    font-size: 1.2rem;
    letter-spacing: 0.08em;
    color: ${theme.colors.font.lightContent};
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
    ${font({weight: 400, Fmax: 20, Fmin: 16})};
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
    color: ${theme.colors.font.occupationFont};
    font-weight: 600;
    font-size: .9rem;
    line-height: 2.8;
    text-align: center;
`

