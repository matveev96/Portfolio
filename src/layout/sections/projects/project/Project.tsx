import React from "react";
import styled from "styled-components";
import { SectionSubtitle } from "../../../../components/SectionSubtitle";
import { SectionText } from "../../../../components/SectionText";
import { Icon } from "../../../../components/icon/Icon";

type ProjectPropsType = {
    title: string,
    text: string,
    src: string,
    list: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src}/>
            <SectionSubtitle>{props.title}</SectionSubtitle>
            <SectionText>{props.text}</SectionText>
            <StyledStackList>Tech stack: <StyledStack>{props.list}</StyledStack> </StyledStackList>

            <StyledLinkContainer>
                <StyledLinkContainer>
                    <Icon iconId={"chain"} height="20" width="20" viewBox="0 0 20 20"/>
                    <Link href="#">Live Preview</Link>
                </StyledLinkContainer>
                
                <StyledLinkContainer>
                    <Icon iconId={"githubMini"} height="20" width="20" viewBox="0 0 30 30"/>
                    <Link href="#">View Code</Link>
                </StyledLinkContainer>
            </StyledLinkContainer>

        </StyledProject>
    )
}

const StyledProject = styled.section`
    background-color: beige;
    width: 30%;
    margin: 5px;
`

const Image = styled.img`
width: 100%;
height: 260px;
object-fit: cover;
`

const Link = styled.a`
    
`

const StyledStackList = styled.p`
`

const StyledStack = styled.span`
`

const StyledLinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
