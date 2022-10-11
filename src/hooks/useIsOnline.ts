import { useState, useEffect } from 'react';
import { onlineManager } from 'react-query';

const useIsOnline = () => {
  const [status, setStatus] = useState<boolean>(navigator.onLine);

  const handleSetStatus = () => {
    setStatus(navigator.onLine);
    onlineManager.setOnline(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener('online', handleSetStatus);
    window.addEventListener('offline', handleSetStatus);

    return () => {
      window.removeEventListener('online', handleSetStatus);
      window.removeEventListener('offline', handleSetStatus);
    };
  }, []);

  return status;
};

export default useIsOnline;
