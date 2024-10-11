import React from "react";
import { Icon } from '../icon/Icon';
import styled from "styled-components";

export const Social = () => {
    return (
        <SocialList>
            <SocialItem>
                <SocialLink href="">
                    <Icon iconId={"githubMini"} height="30" width="30" viewBox="0 0 30 30"/>
                </SocialLink>
            </SocialItem>
            <SocialItem>
                <SocialLink href="">
                    <Icon iconId={"twitterMini"} height="30" width="30" viewBox="0 0 30 30"/>
                </SocialLink>
            </SocialItem>
            <SocialItem>
                <SocialLink href="">
                    <Icon iconId={"linkdInMini"} height="30" width="30" viewBox="0 0 30 30"/>
                </SocialLink>
            </SocialItem>
        </SocialList>
    )
}

const SocialList = styled.ul`
    display: flex;
`

const SocialItem = styled.li`
    list-style: none;
`
const SocialLink = styled.a`
    
`