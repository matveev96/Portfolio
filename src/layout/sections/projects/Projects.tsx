import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { SectionSubtitle } from "../../../components/SectionSubtitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";
import projectOne from "../../../assets/images/project_1.webp";
import projectTwo from "../../../assets/images/project_2.webp";
import projectThree from "../../../assets/images/project_3.webp";
import projectFour from "../../../assets/images/project_4.webp";
import projectFive from "../../../assets/images/project_5.webp";
import projectSix from "../../../assets/images/project_6.webp";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Projects = () => {
    return (
        <StyledProjects id="3">
            <Container>
                <SectionTitle align="center" fontSize={48} color={theme.colors.font.darkTitle} marginBtm="50px" marginBtmTablet="20px">Projects</SectionTitle>
                <SectionSubtitle fontSize={32} align="center" color={theme.colors.font.darkContent} marginBtm="124px" marginBtmTablet="50px">Things I’ve built so far</SectionSubtitle>
                <GridWrapper>
                    <Project src={projectOne} title={"Project Tile goes here"} list={"HTML , JavaScript, SASS, React"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} />
                    <Project src={projectTwo} title={"Project Tile goes here"} list={"HTML , JavaScript, SASS, React"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} />
                    <Project src={projectThree} title={"Project Tile goes here"} list={"HTML , JavaScript, SASS, React"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} />
                    <Project src={projectFour} title={"Project Tile goes here"} list={"HTML , JavaScript, SASS, React"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} />
                    <Project src={projectFive} title={"Project Tile goes here"} list={"HTML , JavaScript, SASS, React"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} />
                    <Project src={projectSix} title={"Project Tile goes here"} list={"HTML , JavaScript, SASS, React"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} />
                </GridWrapper>
            </Container>
        </StyledProjects>
    )
}

const StyledProjects = styled.section`
    
`

const GridWrapper = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(auto, 375px));
    grid-column-gap: 34px;
    grid-row-gap: 62px;

    @media ${theme.media.miniDesktop} {
        grid-column-gap: 62px;
    }

    @media ${theme.media.proTablet} {
        grid-column-gap: 24px;
        grid-row-gap: 34px;
    }
`