import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the Rider object
interface Rider {
  name: string;
  time: number;
  finished: boolean;
  fault: number;
}

// Define the shape of the global state
interface AppState {
  activeTimer: boolean;
  isActive: boolean;
  ridersReady: boolean;
  toggleActive: () => void;
  toggleTimer: () => void;
  handleRidersReady: () => void;
  handleActiveRound: () => void;
  storedNames: Rider[]; 
  rankedRiders: Rider[];
  updateStoredNames: (names: Rider[]) => void;
  updateRankedRiders: (names: Rider[]) => void;
  nextRider: number;
  timerValue: number;
  updateNextRider: (index: number) => void;
  updateTimerValue: (time: number) => void;
  activeRound: boolean;
  timerReset: boolean;
  updateTimerReset: (value: boolean) => void;


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
  const [storedNames, setStoredNames] = useState<Rider[]>([]);
  const [rankedRiders, setRankedRiders] = useState<Rider[]>([]);
  const [ridersReady, setRidersReady] = useState<boolean>(true);
  const [activeTimer, setActiveTimer] = useState<boolean>(false);
  const [activeRound, setActiveRound] = useState<boolean>(false);
  const [timerReset, setTimerReset] = useState<boolean>(false);
  const [nextRider, setNextRider] = useState<number>(0);
  const [timerValue, setTimerValue] = useState<number>(0);
  const updateNextRider = (index: number) => {
    setNextRider(index);
  };
  const updateTimerValue= (time: number) => {
    setTimerValue(time);
  };
  const handleActiveRound = () => {
    setActiveRound(!activeRound);
  };
  const handleRidersReady = () => {
    setRidersReady(!ridersReady);
  };
  const toggleTimer = () => {
    setActiveTimer((prevActive) => !prevActive);
  };
  const toggleActive = () => {
    setIsActive((prevActive) => !prevActive);
  };
  const updateStoredNames = (names: Rider[]) => {
    setStoredNames(names);
  };
  const updateRankedRiders = (names: Rider[]) => {
    setRankedRiders(names);
  };
  const updateTimerReset = (value: boolean) => {
    setTimerReset(value);
  };

  const state: AppState = {
    isActive,
    toggleActive,
    storedNames,
    updateStoredNames,
    handleRidersReady,
    toggleTimer,
    ridersReady,
    activeTimer,
    nextRider,
    updateNextRider,
    timerValue,
    updateTimerValue,
    handleActiveRound,
    activeRound,
    timerReset,
    updateTimerReset,
    updateRankedRiders,
    rankedRiders,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};
