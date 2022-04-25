import {AvailableThemes, ThemeAction, ThemeActionTypes} from "../../utils/types/ThemeTypes";

export const setCurrentTheme = (theme: AvailableThemes): ThemeAction => {
    return {type: ThemeActionTypes.SET_CURRENT_THEME, payload: theme}
}

