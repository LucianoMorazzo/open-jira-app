import { createContext } from 'react';

interface ContextProps {
    SideMenuOpen: boolean;
}

export const UIContext = createContext({} as ContextProps);