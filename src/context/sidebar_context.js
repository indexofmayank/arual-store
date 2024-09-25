import React, {useEffect, useReducer, useContext, useState} from "react";
import reducer from '../reducer/sidebar_reducer';
import {
    SIDEBAR_CLOSE,
    SIDEBAR_OPEN
} from '../actions';

const initialState = {
    isSidebarOpen: false
};

const SidebarContext = React.createContext();

export const SidebarProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);
  

    const openSidebar = () => {
        dispatch({type: SIDEBAR_OPEN});
    }

    const closeSidebar = () => {
        dispatch({type: SIDEBAR_CLOSE});
    }

    return (
        <SidebarContext.Provider
            value={{
                ...state,
                openSidebar,
                closeSidebar, onOpen, onClose
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
}

export const useSidebarContext = () => {
    return useContext(SidebarContext);
}