import {createContext, useState} from 'react';

interface AuthContext {
   user: null | { 
      id: string | null
   };
   isLogged: () => boolean;
   login: () => void;
   logout: () => void;
}

export const AuthContext = createContext<AuthContext>(
   { user: 
      {
         id: null
      },
      isLogged: () => false,
      login: ()=> {},
      logout: ()=> {},
   });

interface Props {
   children?: React.ReactChild
}

const AuthProvider = (props: Props) => {

   const [user, setUser] = useState<any>(null);
   //const [user, setUser] = useState({id: null});

   const login = () => setUser({id: '1'});
   const logout = () => setUser(null);

   const isLogged = () => !!user;

   const contextValue= {
      user,
      isLogged,
      login,
      logout
   }

   return (
      <AuthContext.Provider value={contextValue}>
         {props.children}
      </AuthContext.Provider>
   );
}

export default AuthProvider;