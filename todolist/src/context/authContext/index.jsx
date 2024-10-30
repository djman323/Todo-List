import { auth } from "firebase/auth";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}
export function AuthContext({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userloggedIn, setUserloggedIn] = useState(false);
  const [loading, setLoding] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user) {
    if (user) {
      setCurrentUser({ ...user });
      setUserloggedIn(true);
    } else {
      setCurrentUser(null);
      setUserloggedIn(false);
    }
    setLoding(false);
  }

  const value = {
    currentUser,
    userloggedIn,
    loading,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
