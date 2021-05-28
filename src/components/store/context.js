import { createContext } from 'react';

const StoreContext = createContext({
  token: null,
  user: {},
  perfil: {},
  setPerfil: () => {},
  setToken: () => {},
  setUser: () => {},
});

export default StoreContext;