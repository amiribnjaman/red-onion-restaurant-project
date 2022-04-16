import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const useFirebase = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleSigninWithGoogle = () => {
        signInWithGoogle()
    }

    if(user){
        navigate('/')
    }

    return { handleSigninWithGoogle }
}

export default useFirebase