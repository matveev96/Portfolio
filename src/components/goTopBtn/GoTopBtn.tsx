import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from '../icon/Icon';
import { theme } from "../../styles/Theme";
import { animateScroll as scroll } from 'react-scroll';


const scrollOptions = {
    duration: 50,
    smooth: false
};

export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 500) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [showBtn])

    return (

        <>
            {showBtn && 
                <StyledGoTopBtn onClick={() => {scroll.scrollToTop(scrollOptions)}}>
                    <Icon iconId="arrow" width="40px" height="40px" color="#666" viewBox="-2 -2 20 20"/>
                </StyledGoTopBtn>
            }
        </>
        
    )
};

const StyledGoTopBtn = styled.button`
    width: 60px;
    height: 60px;
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: ${theme.colors.occupationBg};
    box-shadow: 2px 5px 17px 6px rgba(0, 0, 0, 0.2);
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`