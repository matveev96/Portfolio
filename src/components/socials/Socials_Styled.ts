import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { SocialPropsType } from "./Socials";

const SocialList = styled.ul`
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media ${theme.media.proTablet} {
        gap: 30px;
    }
`

const SocialItem = styled.li`
    list-style: none;
`

const SocialLink = styled.a<SocialPropsType>`
    display: inline-block;
    color: ${props => props.colorSVG};
    transition: ${theme.animations.transition};
    &:hover {
        color: ${props => props.hoverColor};
        transform: translateY(-5%);
    }
`

export const S = {
    SocialList,
    SocialItem,
    SocialLink
}