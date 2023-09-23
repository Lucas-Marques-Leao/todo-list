import React, { memo } from 'react';

type LoadingSpinnerProps = {
  isLoading?: boolean;
};

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ isLoading }) => {
  return (
    isLoading && (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="p-10 w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    )
  );
};

export default memo(LoadingSpinner);
