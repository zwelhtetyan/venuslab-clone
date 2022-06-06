import { createContext, useContext, useEffect, useState } from 'react';

const MenuContext = createContext(null);

const ContextWrapper = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isRAQOpen, setIsRAQOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 6000);
    }, []);

    const handleMenuOpen = (_) => setIsOpen((open) => !open);

    const handleRAQOpen = (_) => setIsRAQOpen((open) => !open);

    const contextValue = {
        isOpen,
        handleMenuOpen,
        isRAQOpen,
        handleRAQOpen,
        isLoading,
    };

    return (
        <MenuContext.Provider value={contextValue}>
            {children}
        </MenuContext.Provider>
    );
};

export default ContextWrapper;

export const useHandleMenu = () => {
    return useContext(MenuContext);
};
