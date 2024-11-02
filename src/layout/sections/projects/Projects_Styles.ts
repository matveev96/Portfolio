import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import svgSprite from "./../../../assets/images/icons_sprite.svg"

// Projects section

const Projects = styled.section`
    
`

const GridWrapper = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 375px);
    grid-column-gap: 34px;
    grid-row-gap: 62px;

    @media ${theme.media.miniDesktop} {
        grid-column-gap: 62px;
    }

    @media ${theme.media.proTablet} {
        grid-column-gap: 24px;
        grid-row-gap: 34px;
    }

    @media ${theme.media.miniTablet} {
        grid-template-columns: repeat(auto-fill, 335px);
        grid-column-gap: 24px;
        grid-row-gap: 34px;
    }
`

// Project

const Project = styled.div`
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    max-width: 375px;
    width: 100%;
`

const ImageBox = styled.div`
    height: 260px;
    margin-bottom: 27px;
`

const ContentBox = styled.div`
    max-width: 315px;
    width: 100%;
    min-height: 280px;
    margin: 0 auto;
    padding-bottom: 25px;

    display: flex;
    flex-direction: column;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
`

const StackList = styled.span`
    font-weight: 300;
    font-size: 1.4rem; 
`

const Stack = styled.h4`
    color: ${theme.colors.font.darkTitle};
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6;
    margin-bottom: 20px;
`

const LinkBox = styled.div`
    display: flex;
    gap: 48px;
    color: ${theme.colors.font.black};
`

const Link = styled.a<{iconId?: string, beforeSize?: string}>`
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6;
    text-decoration: underline;
    color: ${theme.colors.font.black};
    padding-left: 32px;

    position: relative;

    &::before {
        content: "";
        top: 50%;
        left: 0;
        transform: translate(0, -50%);
        width: 20px;
        height: 20px;
        mask-image: ${props => `url(${svgSprite}#${props.iconId})`};
        background-color: currentColor;
        color: ${theme.colors.font.black};

        position: absolute;
    }
`

export const S = {
    Projects,
    GridWrapper,
    Project,
    ImageBox,
    ContentBox,
    Image,
    StackList,
    Stack,
    LinkBox,
    Link
}