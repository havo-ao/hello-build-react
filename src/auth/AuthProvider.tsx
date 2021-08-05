import {createContext, useState} from 'react';
import { Interface } from 'readline';

interface prop {
   user: { id: string | null}
}

export const AuthContext = createContext<prop>({ user: {id: null} });

interface Props {
   children?: React.ReactChild
}

const AuthProvider = (props: Props) => {

   const [user, setUser] = useState({id: 'useridstring12345'});
   //const [user, setUser] = useState({id: null});

   console.log(user)

   const contextValue= {
      user,
   }

   return (
      <AuthContext.Provider value={contextValue}>
         {props.children}
      </AuthContext.Provider>
   );
}

export default AuthProvider;