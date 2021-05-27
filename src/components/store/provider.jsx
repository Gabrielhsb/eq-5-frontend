import React from 'react';
import Context from './context.js';
import useStorage from '../../utils/useStorage.js';

const StoreProvider = ({ children }) => {
  const [ token, setToken ] = useStorage('token');
  return (
    <Context.Provider value={{token, setToken}}>
      {children}
    </Context.Provider>
  )
}

export default StoreProvider;