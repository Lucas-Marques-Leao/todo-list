import React from 'react';
import Footer from '../../components/molecules/Footer';
import NavBar from '../../components/molecules/NavBar';
import SessionContextProvider from '../../contexts/SessionContext';

interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <SessionContextProvider>
      <NavBar />
      <div className="flex-grow p-4">{children}</div>
      <Footer />
    </SessionContextProvider>
  );
};

export default MainLayout;
