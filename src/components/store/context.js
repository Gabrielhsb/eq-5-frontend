import { createContext } from 'react';

const StoreContext = createContext({
  token: null,
  user: {},
  id: null,
  perfil: {},
  setPerfil: () => {},
  setId: () => {},
  setToken: () => {},
  setUser: () => {},
});

export default StoreContext;