import React from "react";
import { FlexWrapper } from '../../../components/FlexWrapper';
import styled from "styled-components";
import { Card } from './card/Card';
import { Icon } from '../../../components/icon/Icon';
import { SectionTitle } from "../../../components/SectionTitle";
import { SectionText } from "../../../components/SectionText";


export const About = () => {
    return (
            <StyledAbout>
                <FlexWrapper direction="column">
                    <StyledAboutSection>
                        <SectionTitle>About Me</SectionTitle>
                        <SectionText>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</SectionText>
                    </StyledAboutSection>

                    <StyledAboutSection>
                        <SectionTitle>Work Experience</SectionTitle>
                        <Card position="Junior Web Developer" occupation="Full Time" organization="Dr. Rajkumar’s Learning App" city="Bengaluru" period="Sep 2021 - Dec 2021"/>
                        <Card position="Web Development Intern" occupation="Internship" organization="IonPixelz Web Solutions" city="Bengaluru" period="Sep 2021 - Dec 2021"/>
                        <Card position="SEO / SEM Specialist" occupation="Internship" organization="HAAPS" city="Bengaluru" period="Sep 2021 - Dec 2021"/>
                    </StyledAboutSection>

                    <StyledAboutSection>
                        <SectionTitle>Education</SectionTitle>
                        <Card position="Bachelor in Electronics & Communication" occupation="Full Time" organization="Bangalore Instutute of Technology" period="Aug 2015 - Dec 2020"/>
                        
                    </StyledAboutSection>

                    <Icon iconId="bricksWhiteMode" width="591" height="1019" viewBox="0 0 591 1019"/>
                </FlexWrapper>
            </StyledAbout>

    )
}

const StyledAbout = styled.section`
    background-color: #c8c899;
`

const StyledAboutSection = styled.div`
    background-color: #96ba9a;
`