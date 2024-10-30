import { font } from "../../styles/Common";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Footer = styled.footer`
    padding-bottom: 60px;
`

const ContactsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 60px;
    color: ${theme.colors.font.darkTitle};

    @media ${theme.media.miniTablet} {
        margin-top: 20px;
        flex-direction: column;
        align-items: flex-end;
        gap: 10px;
    }
`

const Link = styled.a`
    display: block;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 400;
    color: ${theme.colors.font.darkTitle};
`

const Copyright = styled.small`
    ${font({weight: 400, Fmax: 18, Fmin: 12})};
    background: ${theme.colors.font.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    @media ${theme.media.miniTablet} {
        position: absolute;
        bottom: -20%;
        width: 360px;
    }
`

const ColorText = styled.span`
    color: ${theme.colors.font.darkContent};
`

const InfoBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media ${theme.media.miniTablet} {
        flex-direction: column;
        align-items: flex-start;
    }

    &:first-child {
        padding-bottom: 45px;
        margin-bottom: 45px;
        
        @media ${theme.media.miniTablet} {
            align-items: flex-end;
            padding-bottom: 0;
            margin-bottom: 0;
        }
        &::after {
            content: "";
            width: 100%;
            height: 2px;
            background-color: ${theme.colors.font.lightContent};
            bottom: 0;

            position: absolute;

            @media ${theme.media.miniTablet} {
                display: none;
            }
        }
    }

`

export const S = {
    Footer,
    ContactsContainer,
    Link,
    Copyright,
    ColorText,
    InfoBox
}