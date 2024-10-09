import React from "react";
import { FlexWrapper } from '../../../components/FlexWrapper';
import styled from "styled-components";
import { AboutComponent } from '../../../components/aboutComponent/AboutComponent';
import { Icon } from '../../../components/icon/Icon';

export const About = () => {
    return (
            <StyledAbout>
                <FlexWrapper direction="column">
                    <div>
                        <h2>About Me</h2>
                        <p>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</p>
                    </div>

                    <div>
                        <h2>Work Experience</h2>
                        <AboutComponent position="Junior Web Developer" occupation="Full Time" organization="Dr. Rajkumar’s Learning App" city="Bengaluru" period="Sep 2021 - Dec 2021"/>
                        <AboutComponent position="Web Development Intern" occupation="Internship" organization="IonPixelz Web Solutions" city="Bengaluru" period="Sep 2021 - Dec 2021"/>
                        <AboutComponent position="SEO / SEM Specialist" occupation="Internship" organization="HAAPS" city="Bengaluru" period="Sep 2021 - Dec 2021"/>
                    </div>

                    <div>
                        <h2>Education</h2>
                        <AboutComponent position="Bachelor in Electronics & Communication" occupation="Full Time" organization="Bangalore Instutute of Technology" period="Aug 2015 - Dec 2020"/>
                        
                    </div>

                    <Icon iconId="bricksWhiteMode" width="591" height="1019" viewBox="0 0 591 1019"/>
                </FlexWrapper>
            </StyledAbout>

    )
}

const StyledAbout = styled.div`
    background-color: #c8c899;
`