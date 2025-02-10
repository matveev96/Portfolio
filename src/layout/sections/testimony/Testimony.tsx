import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from "../../../styles/Theme";
import { SectionTitle } from "../../../components/SectionTitle";
import { SectionSubtitle } from "../../../components/SectionSubtitle";

export const Testimony: React.FC = () => {
    return (
        <></>
        // <StyledTestimony id="testimony">
        //     <Container>
        //         <SectionTitle align="center" fontSize={48} color={theme.colors.font.darkTitle} marginBtm="50px" marginBtmTablet="20px">Testimony</SectionTitle>
        //         <SectionSubtitle fontSize={32} align="center" color={theme.colors.font.darkContent} marginBtm="124px" marginBtmTablet="50px">Reviews of my work</SectionSubtitle>
        //         <FlexWrapper justfy="center" align="center" direction="column" gap="40px">
        //             <Slider/>
        //         </FlexWrapper>
        //     </Container>
        //
        // </StyledTestimony>
    )
}

const StyledTestimony = styled.section`
`
