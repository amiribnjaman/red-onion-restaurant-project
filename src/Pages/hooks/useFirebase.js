import { useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const useFirebase = () => {
    const navigate = useNavigate()
    const [errors, setErros] = useState({
        email: '',
        password: '',
        confirmPass: '',
        others: ''
    })
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        signupUser,
        singupLoading,
        signUPError,
    ] = useCreateUserWithEmailAndPassword(auth);

    // Singin with google
    const handleSigninWithGoogle = () => {
        signInWithGoogle()
    }

    // Sing up with email and password
    const handleSingUpWithEmailAndPassword = (name, email, password, confirmPassword) => {
        if (name !== '' && email !== '' && password !== '' && confirmPassword !== '') {
            const emailRegex = /^\S+@\S+\.\S+$/
            const emailValidate = emailRegex.test(email)
            if (emailValidate) {
                // const passwordRegex = /{8,20}/
                // const passValidate = passwordRegex.test(password)
                if (password.length >= 6) {
                    if (password === confirmPassword) {
                        createUserWithEmailAndPassword(email, password)
                        setErros({ others: 'User created successfully.' })
                    } else {
                        setErros({ confirmPass: 'Confirm password doesn\'t matched' })
                        // setErros({...errors, password: '',confirmPass: '',
                        // others: ''})
                    }
                } else {
                    setErros({ password: 'Password is too short' })
                    // setErros({ ...errors, email: '' })
                }
            } else {
                setErros({ ...errors, email: 'Please provide a valid email.' })
            }
        } else {
            setErros({ ...errors, others: 'Star mark fields are required.' })
        }
    }

    // if(user){
    //     navigate('/')
    // }

    return { handleSigninWithGoogle, handleSingUp: handleSingUpWithEmailAndPassword, errors }
}

export default useFirebase