import React from "react";
import { Icon } from '../icon/Icon';
import styled from "styled-components";

type SocialPropsType = {
    color: string
}

export const Social = (props:SocialPropsType) => {
    return (
        <SocialList>
            <SocialItem>
                <SocialLink href="">
                    <Icon iconId={"githubMini"} height="30" width="30" viewBox="0 0 30 32" color={props.color}/>
                </SocialLink>
            </SocialItem>
            <SocialItem>
                <SocialLink href="">
                    <Icon iconId={"twitterMini"} height="30" width="30" viewBox="0 0 30 32" color={props.color}/>
                </SocialLink>
            </SocialItem>
            <SocialItem>
                <SocialLink href="">
                    <Icon iconId={"linkdInMini"} height="30" width="30" viewBox="0 0 30 30" color={props.color}/>
                </SocialLink>
            </SocialItem>
        </SocialList>
    )
}

const SocialList = styled.ul`
    display: flex;
    justify-content: space-between;
    gap: 20px;
`

const SocialItem = styled.li`
    list-style: none;
`
const SocialLink = styled.a`
    
`