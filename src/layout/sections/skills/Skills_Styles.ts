import styled from "styled-components"
import { theme } from "../../../styles/Theme"

// Skills section

const Skills = styled.section`
    
`

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 120px);
    grid-auto-rows: 120px; 
    gap: 95px;
    justify-content: center;

    @media ${theme.media.miniDesktop} {
        grid-template-columns: repeat(4, 120px);
    }
    @media ${theme.media.miniTablet} {
        grid-template-columns: repeat(auto-fill, 120px);
    }
    @media ${theme.media.mobile} {
        grid-template-columns: repeat(2, 120px);
        grid-column-gap: 40px;
        grid-row-gap: 20px;
    }
`

// Skill

const Skill = styled.div`
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const S = {
    GridWrapper,
    Skills,
    Skill
}