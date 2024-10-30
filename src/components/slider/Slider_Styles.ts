import { font } from "../../styles/Common";
import svgSprite from "../../assets/images/icons_sprite.svg";
import styled from "styled-components";
import dude from "../../assets/images/Dude.webp";
import { theme } from "../../styles/Theme";

const Slider = styled.div`
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

const ButtonsBox = styled.div`
    display: flex;
    gap: 10px;
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
`

const Dot = styled.span`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: ${theme.colors.font.lightTitle};
    cursor: pointer;
    transition: .2s;

    &:hover {
        background-color: ${theme.colors.font.darkContent};
    }
`

export const S = {
    Slider,
    SliderContent,
    ImageWrapper,
    UserName,
    ClientAssessment,
    Stars,
    ButtonsBox,
    Dot
}