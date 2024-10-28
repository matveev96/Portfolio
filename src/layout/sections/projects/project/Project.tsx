import React from "react";
import styled from "styled-components";
import { SectionSubtitle } from "../../../../components/SectionSubtitle";
import { SectionText } from "../../../../components/SectionText";
import { Icon } from "../../../../components/icon/Icon";
import { theme } from "../../../../styles/Theme";
import svgSprite from "../../../../assets/images/icons_sprite.svg"

type ProjectPropsType = {
    title: string,
    text: string,
    src: string,
    list: string,
    iconId?: string,
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <ImageBox>
                <Image src={props.src}/>
            </ImageBox>

            <ContentBox>
                <SectionSubtitle weight="500" color={theme.colors.font.black} fontSize={28} align="left" marginBtm="17px" marginBtmMobile="10px">{props.title}</SectionSubtitle>
                <SectionText weight="300" color={theme.colors.font.darkContent} marginBtm="12px" grow={1} >{props.text}</SectionText>
                <Stack>Tech stack: <StyledStackList>{props.list}</StyledStackList></Stack>

                <LinkBox>
                    <Link href="#" iconId="chain">Live Preview</Link>
                    <Link href="#" iconId="gh-project">View Code</Link>
                </LinkBox>
            </ContentBox>
        </StyledProject>
    )
}

const StyledProject = styled.div`
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

const StyledStackList = styled.span`
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

