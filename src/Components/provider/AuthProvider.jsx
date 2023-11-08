import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
// eslint-disable-next-line no-unused-vars
import  { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import axios from 'axios';



export const AuthContext = createContext(null)
const googleprovider = new GoogleAuthProvider()


const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)


    const googlelogin = () => {
        setloading(true)

        return signInWithPopup(auth, googleprovider)
    }
    const createuser = (email, password) => {
        setloading(true)

        return createUserWithEmailAndPassword(auth,email,password)
    }

    const handleupdateprofile = (name, photo) => {
        setloading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })

    }
    const signin = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setloading(true)
        return signOut(auth)
    }

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, currentuser =>
    //          {
    //             const userEmail=currentuser?.email || user.email
    //             const loggeduser={email:userEmail}
    //             setuser(currentuser)
    //         console.log('user in the auth state changed', currentuser);
          
    //         setloading(false)
    //         if (currentuser){
              
    //             axios.post('http://localhost:5000/jwt',
    //             loggeduser,{withCredentials:true})
    //             .then(res=>{
    //                 console.log ('token ressss',res.data)
    //             })

    //         }
    //         else{
    //             axios.post('http://localhost:5000/logout',
    //             loggeduser,
    //             {
    //                 withCredentials:true
    //             }
    //             )
    //             .then(res=>{
    //                 console.log(res.data);
    //             })
    //         }
    //     })
    //     return () => {
    //         unsubscribe()
    //     }
    // }, [])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            const userEmail = currentuser?.email;
                const loggeduser = { email: userEmail };
            setuser(currentuser);

            console.log('user in the auth state changed', currentuser);
            setloading(false);
    
            if (currentuser) {
                
                axios
                    .post('http://localhost:5000/jwt', loggeduser, { withCredentials: true })
                    .then((res) => {
                        console.log( res.data);
                    });
            } else {
                axios
                    .post('http://localhost:5000/logout', loggeduser, {
                        withCredentials: true,
                    })
                    .then((res) => {
                        console.log(res.data);
                    });
            }
        });
    
        return () => {
            unsubscribe();
        };
    }, []);
    
    const authinfo = {
        googlelogin,
        createuser, user, loading, handleupdateprofile, signin, logout
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;