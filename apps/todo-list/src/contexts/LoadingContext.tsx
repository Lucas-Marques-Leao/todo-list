'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import LoadingSpinner from '../components/atoms/LoadingSpinner';

export interface isLoading {
  loading: boolean;
  setLoading: (newState: boolean) => void;
}

const initialValue = {
  loading: false,
  setLoading: () => ({} as boolean),
};

export const LoadingContext = createContext<isLoading>(initialValue);

interface LoadingProviderProps {
  children: React.ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({
  children,
}) => {
  //* hooks
  const [loading, setLoading] = useState<boolean>(initialValue.loading);

  //* constants
  const value = useMemo(() => ({ loading, setLoading }), [loading, setLoading]);

  //* handlers
  const pageLoaded = () => {
    setLoading(false);
  };

  //* effects
  useEffect(() => {
    window.addEventListener('load', pageLoaded);
    return () => {
      window.removeEventListener('load', pageLoaded);
    };
  }, []);

  //* render
  return (
    <LoadingContext.Provider value={value}>
      <LoadingSpinner isLoading={loading} />
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within an LoadingProvider');
  }
  return context;
};
