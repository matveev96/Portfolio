import React from "react";
import { Icon } from '../icon/Icon';
import styled from "styled-components";
import { theme } from "../../styles/Theme";

type SocialPropsType = {
    hoverColor?: string,
    colorSVG?: string
}

export const Socials = (props:SocialPropsType) => {
    return (
        <SocialList>
            <SocialItem>
                <SocialLink href="#" colorSVG={props.colorSVG} hoverColor={props.hoverColor}>
                    <Icon iconId={"githubMini"} height="30" width="30" viewBox="0 0 30 32" />
                </SocialLink>
            </SocialItem>
            <SocialItem>
                <SocialLink href="#" colorSVG={props.colorSVG} hoverColor={props.hoverColor}>
                    <Icon iconId={"twitterMini"} height="30" width="30" viewBox="0 0 30 32" />
                </SocialLink>
            </SocialItem>
            <SocialItem>
                <SocialLink href="#" colorSVG={props.colorSVG} hoverColor={props.hoverColor}>
                    <Icon iconId={"linkdInMini"} height="30" width="30" viewBox="0 0 30 30" />
                </SocialLink>
            </SocialItem>
        </SocialList>
    )
}

const SocialList = styled.ul`
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media ${theme.media.proTablet} {
        gap: 40px;
    }
`

const SocialItem = styled.li`
    list-style: none;
`

const SocialLink = styled.a<SocialPropsType>`
    display: inline-block;
    color: ${props => props.colorSVG};
    &:hover {
        color: ${props => props.hoverColor};
        transform: translateY(-5%);
    }
`