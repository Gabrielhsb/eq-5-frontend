import React from 'react';
import Context from './context.js';
import useStorage from '../../utils/useStorage.js';

const StoreProvider = ({ children }) => {
  const [ token, setToken ] = useStorage('token');
  const [ user, setUser ] = useStorage('user');
  const [ perfil, setPerfil ] = useStorage('perfil');
  const [ id, setId ] = useStorage('id');
  return (
    <Context.Provider value={{token, setToken, user, setUser, perfil, setPerfil, id, setId}}>
      {children}
    </Context.Provider>
  )
}

export default StoreProvider;