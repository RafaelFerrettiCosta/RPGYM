import { Mission } from '@/types/mission';
import { User } from '@/types/user';
import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';

type AppState = {
  initialized: boolean; // app já montou o contexto (pronto p/ render)
  authToken: string | null; // token JWT (se houver)
  user: User | null; // dados do usuário (placeholder por enquanto)
};

type AppContextType = AppState & {
  setAuth: (token: string | null) => void; // definir/limpar token
  setUser: (u: User | null) => void; // definir/limpar usuário
  resetAll: () => void; // limpar tudo (logout)
};

const AppContext = createContext<AppContextType | null>(null);

const initialState: AppState = {
  initialized: false,
  authToken: null,
  user: null,
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>(initialState);

  // Quando o app sobe, marcamos como inicializado.
  // (Depois podemos hidratar cache/AsyncStorage aqui)
  useEffect(() => {
    setState((s) => ({ ...s, initialized: true }));
  }, []);

  const setAuth = (token: string | null) => setState((s) => ({ ...s, authToken: token }));

  const setUser = (u: User | null) => setState((s) => ({ ...s, user: u }));

  const resetAll = () => setState({ ...initialState, initialized: true });

  const value = useMemo(() => ({ ...state, setAuth, setUser, resetAll }), [state]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp deve ser usado dentro de <AppProvider>');
  return ctx;
};
