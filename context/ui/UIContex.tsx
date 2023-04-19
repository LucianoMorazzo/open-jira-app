import { createContext } from 'react';

interface ContextProps {
    sidemenuOpen: boolean;
    //methods
    openSidebar: () => void;
    closeSidebar: () => void;
}

export const UIContext = createContext({} as ContextProps);