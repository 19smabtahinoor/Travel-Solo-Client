import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import initAuthentication from '../config/firebase';

// initialize firebase 
initAuthentication()

const useFirebase = () => {
    const [user,setUser] = useState({});
    const history = useHistory();
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true);
    const currentUser = auth.currentUser;

    //on State Change 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, [auth])

    //google sign in 
    const handleGoogleSignIn = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                swal("Good job!", "Account has been created!", "success");
                history.push('/');
            }).catch((error) => {
                swal("Something went wrong!", `${error.message}`, "error")
            }).finally(() => {
                setIsLoading(false);
            })
    }

    //Sign out
    const signOutUser = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
            swal("Logout Successful!", "You are logged out!", "success");
            history.push('/register');
        }).catch((err) => {
            swal("Something went wrong!", `${err.message}`, "error")
        }).finally(() => setIsLoading(false));
    }

    return {
        currentUser,
        user,
        handleGoogleSignIn,
        signOutUser,
        isLoading
    }
}

export default useFirebase
