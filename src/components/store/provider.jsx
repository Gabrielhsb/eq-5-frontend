import React from 'react';
import Context from './context.js';
import useStorage from '../../utils/useStorage.js';

const StoreProvider = ({ children }) => {
  const [ token, setToken ] = useStorage('token');
  const [ user, setUser ] = useStorage('user');
  const [ perfil, setPerfil ] = useStorage('perfil');
  const [ idUser, setIdUser ] = useStorage('idUser');
  const [ idPerfil, setIdPerfil ] = useStorage('idPerfil');
  return (
    <Context.Provider value={{token, setToken, user, setUser, perfil, setPerfil, idUser, setIdUser,idPerfil, setIdPerfil}}>
      {children}
    </Context.Provider>
  )
}

export default StoreProvider;