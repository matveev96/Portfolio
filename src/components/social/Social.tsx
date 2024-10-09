import React from "react";
import { Icon } from '../icon/Icon';
import styled from "styled-components";

export const Social = () => {
    return (
        <StyledSocial>
            <a href="">
                <Icon iconId={"githubMini"} height="30" width="30" viewBox="0 0 30 30"/>
            </a>

            <a href="">
                <Icon iconId={"twitterMini"} height="30" width="30" viewBox="0 0 30 30"/>
            </a>

            <a href="">
                <Icon iconId={"linkdInMini"} height="30" width="30" viewBox="0 0 30 30"/>
            </a>
        </StyledSocial>
    )
}

const StyledSocial = styled.div`
    display: flex;
`