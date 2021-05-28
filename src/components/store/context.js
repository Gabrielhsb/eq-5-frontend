import { createContext } from 'react';

const StoreContext = createContext({
  token: null,
  user: {},
  perfil: {},
  idPerfil: null,
  setIdPerfil: () => {},
  idUser: null,
  setIdUser: () => {},
  setPerfil: () => {},
  setToken: () => {},
  setUser: () => {},
});

export default StoreContext;