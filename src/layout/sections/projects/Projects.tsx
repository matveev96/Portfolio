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
        <StyledProjects>
            <Container>
                <SectionTitle align="center" fontSize="4.8rem" color={theme.colors.font.darkTitle} marginBtm="50px">Projects</SectionTitle>
                <SectionSubtitle fontSize="3.2rem" align="center" color={theme.colors.font.darkContent} marginBtm="130px">Things I’ve built so far</SectionSubtitle>
                <FlexWrapper wrap={"wrap"} justfy="space-between" gap="34px">
                    <Project src={projectOne} title={"Project Tile goes here"} list={"HTML , JavaScript, SASS, React"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} />
                    <Project src={projectTwo} title={"Project Tile goes here"} list={"HTML , JavaScript, SASS, React"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} />
                    <Project src={projectThree} title={"Project Tile goes here"} list={"HTML , JavaScript, SASS, React"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} />
                    <Project src={projectFour} title={"Project Tile goes here"} list={"HTML , JavaScript, SASS, React"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} />
                    <Project src={projectFive} title={"Project Tile goes here"} list={"HTML , JavaScript, SASS, React"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} />
                    <Project src={projectSix} title={"Project Tile goes here"} list={"HTML , JavaScript, SASS, React"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} />
                </FlexWrapper>
            </Container>
        </StyledProjects>
    )
}

const StyledProjects = styled.section`
    
`