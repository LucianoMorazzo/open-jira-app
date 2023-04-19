import React, { FC, useReducer } from "react"
import { UIContext } from "./UIContex"
import { uiReducer } from "./uiReducer"

export interface UIState{
    sidemenuOpen: boolean
}

interface Props{
    children?: React.ReactNode
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false
}

export const UIProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer( uiReducer, UI_INITIAL_STATE);

    const openSidebar = () => {
        dispatch({ type: 'UI - Open sidebar'})
    }

    return (
        <UIContext.Provider value={{ ...state, openSidebar }}>
            { children }
        </UIContext.Provider>
    )
}