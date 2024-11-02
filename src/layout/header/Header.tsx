import React from "react";
import { Logo } from "../../components/logo/Logo";
import { Socials } from "../../components/socials/Socials";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";
import { MenuMobile } from "../../components/menu/MenuMobile";
import { MenuDesktop } from "../../components/menu/MenuDesktop";
import { S } from "./Header_Styles";


export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 769;
    const [position, setPosition] = React.useState(document.documentElement.scrollTop)
    const [visible, setVisible] = React.useState(true)
    // const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

    // Изменение меню desktop на mobile

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    // Открытие-закрытие header по свайпу и скроллу

    React.useEffect(() => {
        const handlescroll = () => {

                let moving = document.documentElement.scrollTop;

                setVisible(position > moving);
                setPosition(moving) 
            
        };

        window.addEventListener("scroll", handlescroll);
        
        return(() => {
            window.removeEventListener("scroll", handlescroll)
        })
    }, [position])

    return (
        <S.Header isOpen={visible}>
            <Container>
                <FlexWrapper justfy="space-between"  tabletJustify="center" miniTabletJustify="space-between" wrap="wrap" >
                    <Logo variation={'logoGradient'} />

                    {width < breakpoint ?   <MenuMobile/>
                                        :   <S.HeaderMenuDesktop>
                                                <MenuDesktop />
                                                <Socials colorSVG={theme.colors.font.darkContent} hoverColor={theme.colors.font.lightContent}/>
                                            </S.HeaderMenuDesktop> 
                    }
                </FlexWrapper>
            </Container>
            
        </S.Header>
    )
}

