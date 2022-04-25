import {AvailableThemes, ThemeAction, ThemeActionTypes, ThemeState} from "../../utils/types/ThemeTypes";



// @ts-ignore
const defaultState: ThemeState = AvailableThemes.THEME_LIGHT

export const themeReducer = (state = defaultState, action: ThemeAction): ThemeState=>{
    switch (action.type) {
        case ThemeActionTypes.GET_CURRENT_THEME:
            return state
        case ThemeActionTypes.SET_CURRENT_THEME:
            return {...state,themePreference: action.payload}
        default:
            return state
    }
}