import React from 'react';
import Context from './context.js';
import useStorage from '../../utils/useStorage.js';

const StoreProvider = ({ children }) => {
  const [ token, setToken ] = useStorage('token');
  const [ user, setUser ] = useStorage('user');
  return (
    <Context.Provider value={{token, setToken, user, setUser}}>
      {children}
    </Context.Provider>
  )
}

export default StoreProvider;