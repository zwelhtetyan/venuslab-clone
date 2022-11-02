import { createContext, useContext, useEffect, useState } from 'react';

const MyContext = createContext(null);

const ContextWrapper = ({ children }) => {
   const [isOpen, setIsOpen] = useState(false);
   const [isRAQOpen, setIsRAQOpen] = useState(false);
   const [isLoading, setIsLoading] = useState(true);

   const handleMenuOpen = (_) => setIsOpen((open) => !open);

   const handleRAQOpen = (_) => setIsRAQOpen((open) => !open);

   useEffect(() => {
      if (isRAQOpen) {
         document.body.style.overflow = 'hidden';
      } else {
         document.body.style.overflow = 'unset';
      }
   }, [isRAQOpen]);

   const contextValue = {
      isOpen,
      handleMenuOpen,
      isRAQOpen,
      handleRAQOpen,
      isLoading,
      setIsLoading,
   };

   return (
      <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
   );
};

export default ContextWrapper;

export const useAction = () => {
   return useContext(MyContext);
};
