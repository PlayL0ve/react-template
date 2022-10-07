import {
    createContext,
    useContext,
    useState,
    useEffect,

} from 'react'; 

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(localUser);
    const localUser = getLocalUser();