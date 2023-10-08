'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';
import { useLoading } from '../../contexts/LoadingContext';

const Index: React.FC = () => {
  //* hooks
  const { data: session } = useSession();
  const { setLoading } = useLoading();
  console.log(session);

  //* effects
  useEffect(() => {
    setLoading(true);
    if (session === null) {
      setLoading(false);
      redirect('/auth/login');
    } else {
      setLoading(false);
      redirect('/dashboard');
    }
  }, [session, setLoading]);

  //* render
  return <></>;
};

export default Index;
