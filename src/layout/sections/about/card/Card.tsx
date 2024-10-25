import React from "react";
import styled, { css } from "styled-components";
import { Icon } from '../../../../components/icon/Icon';
import { theme } from "../../../../styles/Theme";
import { font } from "../../../../styles/Common";

type CardPropsType = {
    position: string,
    occupation: string,
    organization: string,
    city?: string,
    period: string,
    display?: "none",
    margin?: string
}

export const Card = (props: CardPropsType) => {
    return (
        <CardStyle margin={props.margin}>
            <CardContainerTop>
                <Position>{props.position || "null"}</Position>
                <Occupation>{props.occupation || "null"}</Occupation>
            </CardContainerTop>

            <CardContainerBottom>
                <InfoContainer>
                    <Icon iconId={"building"} height="12" width="16" viewBox="0 0 16 12" />
                    <Info>{props.organization || "null"}</Info>
                </InfoContainer>

                <InfoContainer display={props.display}>
                    <Icon iconId={"map"} height="12" width="16" viewBox="0 0 16 12" />
                    <Info>{props.city}</Info>
                </InfoContainer>

                <InfoContainer>
                    <Icon iconId={"calendar"} height="12" width="16" viewBox="0 0 16 12" />
                    <Info>{props.period || "null"}</Info>
                </InfoContainer>
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

    & :nth-of-type(3){
        justify-content: flex-end;
    }

    @media ${theme.media.mobile} {
        margin-top: 10px;
        flex-direction: column;
        gap: 10px;

        & :nth-of-type(3){
            justify-content: flex-start;
        }
    }
`

const InfoContainer = styled.div<{display?: "none"}>`
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1 1 33%;
    color: ${theme.colors.font.lightContent};

    ${props => props.display === "none" && css`
        display: none;
    `}
`

const Info = styled.span`
    font-weight: 500;
    font-size: 1.2rem;
    letter-spacing: 0.08em;
    color: ${theme.colors.font.lightContent};
`

const Position = styled.h4`
    ${font({weight: 400, Fmax: 20, Fmin: 16})};
    /* font-weight: 400;
    font-size: 2rem; */
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

