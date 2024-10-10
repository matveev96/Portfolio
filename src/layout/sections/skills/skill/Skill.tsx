import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type SkillPropsType = {
    iconId: string,
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`
    margin: 5px;
    width: 15%;
    background-color: antiquewhite;
    display: flex;
    justify-content: center;
`