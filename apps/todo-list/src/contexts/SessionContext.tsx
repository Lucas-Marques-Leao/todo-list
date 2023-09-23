'use client';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

type SessionContextProps = {
  children: React.ReactNode;
};

const SessionContextProvider: React.FC<SessionContextProps> = ({
  children,
}) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionContextProvider;
