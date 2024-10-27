import React from "react";
import styled from "styled-components";
import { SectionSubtitle } from "../SectionSubtitle";
import dude from "../../assets/images/Dude.webp"
import { SectionText } from "../SectionText";
import { Icon } from '../icon/Icon';
import svgSprite from "../../assets/images/icons_sprite.svg"
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";


export const Slider = () => {
    return (
        <StyledSlider>
            <SliderContent>
                <ImageWrapper/>
                <UserName>Adams Ademola</UserName>
                <ClientAssessment>Happy Client</ClientAssessment>
                <SectionText marginTop="20px" marginBtm="12px">“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”</SectionText>
                <Stars>
                    <Icon iconId="star" viewBox="0 0 26 24" color={theme.colors.star} width="26px" height="26px"/>
                    <Icon iconId="star" viewBox="0 0 26 24" color={theme.colors.star} width="26px" height="26px"/>
                    <Icon iconId="star" viewBox="0 0 26 24" color={theme.colors.star} width="26px" height="26px"/>
                    <Icon iconId="star" viewBox="0 0 26 24" color={theme.colors.star} width="26px" height="26px"/>
                    <Icon iconId="star" viewBox="0 0 26 24" color={theme.colors.star} width="26px" height="26px"/>
                </Stars>

            </SliderContent>

        </StyledSlider>
    )
}

const StyledSlider = styled.div`
    max-width: 726px;
    width: 100%;
    
    background-color: ${theme.colors.pageBg.lightMode};
    border-radius: 140px 0;
    box-shadow: 40px 40px 200px 0 rgba(0, 0, 0, 0.2);

    position: relative;

    @media ${theme.media.mobile} {
        border-radius: 80px 0;
    }

    &:after {
        content: "";
        position: absolute;
        width: 110px;
        height: 86px;
        top: 66px;
        left: 81px;
        mask-image: url(${svgSprite}#quote);
        background-color: currentColor;
        mask-repeat: no-repeat;
        color: ${theme.colors.font.darkContent};

        @media ${theme.media.miniTablet} {
            display: none;
        }

    }
`

const SliderContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 52px 57px;

    @media ${theme.media.mobile} {
        margin: 32px 37px;
    }
`

const ImageWrapper = styled.div`
    width: 104px;
    height: 104px;
    border: 1px solid ${theme.colors.font.black};
    border-radius: 100px;
    background-image: url(${dude});
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`

const UserName = styled.h5`
    margin-top: 20px;
    margin-bottom: 4px;
    ${font({weight: 600, Fmax: 24, Fmin: 16, })};
`

const ClientAssessment = styled.span`
    ${font({weight: 400, Fmax: 18, Fmin: 14, color:`${theme.colors.font.contactsTitle}` })};
`
const Stars = styled.div`
    display: flex;
    gap: 6px;
`
