import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export const UserProvider = ({ children }) => {
  const [ name, setName] = useState('');
  const [ userId, setUserId ] = useState()

  useEffect(() => {
    if (userId) {
        sessionStorage.setItem("userId", userId)
    }
  }, [userId])

  return (
    <AppContext.Provider
      value={{
        name,
        setName,
        userId,
        setUserId
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useUserContext = () => useContext(AppContext);
