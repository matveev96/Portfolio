import React from "react";
import styled from "styled-components";
import iconsSprite from "../../assets/images/icons_sprite.svg";
import { Icon } from '../icon/Icon';

type ComponentPropsType = {
    position: string,
    occupation: string,
    organization: string,
    city?: string,
    period: string,
}

export const AboutComponent = (props:ComponentPropsType) => {
    return (
        <div>
            <StyledDiv>
                <h3>{props.position || "null"}</h3>
                <span>{props.occupation || "null"}</span>
            </StyledDiv>
            
            <StyledDiv>
                <StyledIconSpanContainer>
                    <Icon iconId={"building"} height="12" width="16" viewBox="0 0 16 12"/>
                    <span>{props.organization || "null"}</span>
                </StyledIconSpanContainer>
                
                <StyledIconSpanContainer>
                    <Icon iconId={"map"} height="12" width="16" viewBox="0 0 16 12"/>
                    <span>{props.city}</span>
                </StyledIconSpanContainer>

                <StyledIconSpanContainer>
                    <Icon iconId={"calendar"} height="12" width="16" viewBox="0 0 16 12"/>
                    <span>{props.period || "null"}</span> 
                </StyledIconSpanContainer>
            </StyledDiv>
        </div>
    )
}

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
`

const StyledIconSpanContainer = styled.div`
    display: flex;
`