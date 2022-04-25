import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons"
import {useDispatch} from "react-redux";
import {AvailableThemes} from "../../utils/types/ThemeTypes";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {setCurrentTheme} from "../../store/actions/themeActions";

const buttonClasses = {
    border: 'unset',
    background: 'unset',
    cursor: 'pointer',
}

const ThemeSwitchButton = () => {
    const {themePreference} = useTypedSelector(state=>state.theme)
    const dispatch = useDispatch()
    const [themeIcon, setThemeIcon] = useState(faMoon)


    function setDarkTheme(){
        setThemeIcon(faSun)
        dispatch(setCurrentTheme(AvailableThemes.THEME_DARK))
    }

    function setLightTheme(){
        setThemeIcon(faMoon)
        dispatch(setCurrentTheme(AvailableThemes.THEME_LIGHT))
    }

    function switchTheme(){
        if(themePreference === AvailableThemes.THEME_DARK){
            setLightTheme()
            return
        }
        setDarkTheme()
    }

    return (
        <button style={buttonClasses} onClick={()=>switchTheme()}>
            <FontAwesomeIcon icon={themeIcon} size="lg" />
        </button>
    );
};

export default ThemeSwitchButton;