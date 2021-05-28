import React from 'react';
import Context from './context.js';
import useStorage from '../../utils/useStorage.js';

const StoreProvider = ({ children }) => {
  const [ token, setToken ] = useStorage('token');
  const [ id, setId ] = useStorage('id');
  const [ user, setUser ] = useStorage('user');
  const [ perfil, setPerfil ] = useStorage('perfil');
  
  return (
    <Context.Provider value={{token, setToken, user, setUser, id, setId, perfil, setPerfil}}>
      {children}
    </Context.Provider>
  )
}

export default StoreProvider;