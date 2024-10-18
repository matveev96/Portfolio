import React from "react";
import styled from "styled-components";
import { SectionSubtitle } from "../../../../components/SectionSubtitle";
import { SectionText } from "../../../../components/SectionText";
import { Icon } from "../../../../components/icon/Icon";
import { theme } from "../../../../styles/Theme";

type ProjectPropsType = {
    title: string,
    text: string,
    src: string,
    list: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <ImageBox>
                <Image src={props.src}/>
            </ImageBox>

            <ContentBox>
                <SectionSubtitle weight="500" color={theme.colors.font.black} fontSize="2.8rem" align="left" marginBtm="17px">{props.title}</SectionSubtitle>
                <SectionText weight="300" color={theme.colors.font.darkContent} marginBtm="12px">{props.text}</SectionText>
                <Stack>Tech stack: <StyledStackList>{props.list}</StyledStackList></Stack>

                <LinkBox>
                    <LinkItem>
                        <Icon iconId={"chain"} height="20" width="20" viewBox="0 0 20 20" color="transparent"/>
                        <Link href="#">Live Preview</Link>
                    </LinkItem>
                    
                    <LinkItem>
                        <Icon color={theme.colors.font.black} iconId={"githubMini"} height="20" width="20" viewBox="0 0 30 30"/>
                        <Link href="#">View Code</Link>
                    </LinkItem>
                </LinkBox>
            </ContentBox>
        </StyledProject>
    )
}

const StyledProject = styled.div`
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    width: 375px;
`

const ImageBox = styled.div`
    height: 260px;
    margin-bottom: 27px;
`

const ContentBox = styled.div`
    width: 315px;
    margin: 0 auto;
    padding-bottom: 25px;
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
    line-height: 162%;
    margin-bottom: 20px;
`

const LinkBox = styled.div`
    display: flex;
    gap: 48px;
    
`

const LinkItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${theme.colors.font.black};
`

const Link = styled.a`
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 162%;
    text-decoration: underline;
    color: ${theme.colors.font.black};
`
