import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    User,
    UserCredential,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup,
  } from "firebase/auth";
  import { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../../components/firebase/Firebase.config";
import { UserProfile } from "../../interfaces/Signup.interface";
  
type authContextProps = {
    user:User|null,
    createUser:(email:string,password:string)=>Promise<UserCredential>,
    updateUserProfile: (profile: UserProfile) => Promise<void>;
    loginUser:(email:string,password:string)=>Promise<UserCredential>,
    logOut:()=>Promise<void>,
    signInWithGoogle: () => Promise<UserCredential>;
    loading:boolean
}

  export const AuthContext = createContext<authContextProps | null>(null);
  
  const AuthProvider = ( { children }: { children: ReactNode; }) => {
    const [loading, setLoading] = useState(true);
    const [user,setUser] = useState<User|null>(null);
    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
      setLoading(false);
      return signInWithPopup(auth, provider);
    };
  
    const createUser = (email:string, password:string) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const loginUser = (email:string, password:string) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    };

    const updateUserProfile = async (profile: UserProfile) => {
        if (auth.currentUser) {
           return await updateProfile(auth.currentUser, profile);
        } else {
            throw new Error("No authenticated user found");
        }
    };
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
       setUser(currentUser);
        setLoading(false);
      });
  
      return () => {
        unsubscribe();
      };
    }, []);
  
    const authValue:authContextProps = {
      user,
      createUser,
      loginUser,
      logOut,
      updateUserProfile,
      signInWithGoogle,
      loading,
    };
  
    return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
  };
  
  export default AuthProvider;