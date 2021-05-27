import { createContext } from 'react';

const StoreContext = createContext({
  token: null,
  user: {},
  setToken: () => {},
  setUser: () => {},


});

export default StoreContext;