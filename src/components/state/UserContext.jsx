/* eslint-disable no-unused-vars */
import {
  createContext,
  useContext,
  useState,
  useEffect,

} from 'react'; 

import {
  getLocalUser, 
  signUpUser,
  logInUser,
  logOutUser,
  verifyUser,
  storeLocalUser,
} from '../services/auth';

const UserContext = createContext();

export function UserProvider({ children }) {
  const localUser = getLocalUser();
  const [user, setUserState] = useState(localUser);

  const verify = async () => {
    const response = await verifyUser();
    setUser(response.user || null);
  };

  useEffect(() => {
    verify();
  }, []);

  const setUser = (user) => {
    storeLocalUser(user);
    setUserState(user);
  };

  const value = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const { user } = useContext(UserContext);
  return user;
}

export function useAuth() {
  const [error, setError] = useState(null);
  const { setUser } = useContext(UserContext);


  const handleResponse = ({ user, error }) => {
    if (error) {
      console.log(error);
      setError(error);
    } else {
      setUser(user);
      setError(null);
    }
  };
    
  const signUp = async (credentials) => {
    const response = await signUpUser(credentials);
    handleResponse(response);
  };

  const logIn = async (credentials) => {
    const response = await logInUser(credentials);
    handleResponse(response);
  };

  const logOut = async () => {
    const response = await logOutUser();
    response.user = null;
    handleResponse(response);
  };
    
  return { error, signUp, logIn, logOut };
}
