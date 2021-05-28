import { createContext } from 'react';

const StoreContext = createContext({
  token: null,
  user: {},
  perfil: {},
  id: null,
  setId: () => {},
  setPerfil: () => {},
  setToken: () => {},
  setUser: () => {},
});

export default StoreContext;