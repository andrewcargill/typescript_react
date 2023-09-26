import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the global state
interface AppState {
  isActive: boolean;
  ridersReady: boolean;
  toggleActive: () => void;
  handleRidersReady: () => void;
  storedNames: string[];
  updateStoredNames: (names: string[]) => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export const useAppContext = (): AppState => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [storedNames, setStoredNames] = useState<string[]>([]);
  const [ridersReady, setRidersReady] = useState<boolean>(false);

    const handleRidersReady = () => {
        setRidersReady(!ridersReady);
        console.log('riders ready: ' + ridersReady);
      };
      

  const toggleActive = () => {
    setIsActive((prevActive) => !prevActive);
    console.log(isActive);
  };

  const updateStoredNames = (names: string[]) => {
    setStoredNames(names);
    console.log(storedNames);
  };

  const state: AppState = {
    isActive,
    toggleActive,
    storedNames,
    updateStoredNames,
    handleRidersReady,
    ridersReady,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};
