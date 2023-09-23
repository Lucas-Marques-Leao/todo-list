import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}
const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-[75vh] w-full mt-3 flex items-center justify-center">
      <div className="bg-white border border-blue-700 rounded-lg p-8 max-w-lg w-full lg:max-w-xl">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
