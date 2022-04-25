import React from 'react';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {AvailableThemes, themeDark, themeLight,} from "../utils/types/ThemeTypes";
import {setThemeStyles} from "../utils/themeUtils";
const Layout = ({children}: any) => {

    const {themePreference} = useTypedSelector(state=>state.theme)



    function getThemeClass(){
        console.log(themePreference)
        if(themePreference === AvailableThemes.THEME_DARK){
            setThemeStyles(themeDark)
            return 'theme_dark'
        } else{
            setThemeStyles(themeLight)
            return 'theme_light'
        }
    }

    return (
        <div className={getThemeClass()}>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;