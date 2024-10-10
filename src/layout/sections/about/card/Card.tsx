import React from "react";
import styled from "styled-components";
import { Icon } from '../../../../components/icon/Icon';

type CardPropsType = {
    position: string,
    occupation: string,
    organization: string,
    city?: string,
    period: string,
}

export const Card = (props:CardPropsType) => {
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