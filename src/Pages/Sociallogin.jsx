import React, { useContext } from 'react';
import { AuthContext } from '../components/provider/AuthProvider';

const Sociallogin = () => {
    const{user,googlelogin}=useContext(AuthContext)
    const handlesociallogin=()=>{
        googlelogin()
        .then((result) => {
            
            console.log(result.user);
        })
        .catch((error) => {
           
            console.error(error);
        });
        

    }
    return (
        <div>
            <button onClick={handlesociallogin} className='btn btn-ghost'>Google login</button>
        </div>
    );
};

export default Sociallogin;