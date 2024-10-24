import styles from './Login.module.scss';
import google from './assets/google.png';

/// Helpers
import { useState, useReducer } from 'react';
import { LoginProps } from './interface';

import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

/// Components
import LogoSvg from '../../../public/icons/LogoSvg';
import { Alert } from 'antd';


type FormType = {
    username?: string,
    password?: string,
}

const initialState = {
    username: '',
    password: ''
}

const reducer = (state: FormType, action: FormType) => {
    return {...state, ...action}
}



const LoginPage = ({searchParams}: LoginProps) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [wrongCredentials, setWrongCredentials] = useState(false);
    const [incompleteUsername, setIncompleteUsername] = useState(false);
    const [incompletePassword, setIncompletePassword] = useState(false);
    
    /// redirecting to access page
    const router = useRouter();
    const searchParam = useSearchParams();
    

    const handleSubmit = async () => {

        if(state.password && state.username)
        {
            const result = await signIn("credentials",{
                username: state.username,
                password: state.password,
                redirect: false,
            })

            if (result && result?.ok) {
                const callbackUrl = searchParam?.get('callbackUrl') || '/'; 
                router.push(callbackUrl);
            } else {
                setIncompleteUsername(false);
                setIncompletePassword(false);
                setWrongCredentials(true);
            }

        } else {
            
            if(!state.password && !state.username){
                setIncompleteUsername(true);
                setIncompletePassword(true);
            } else if(!state.username){
                setIncompleteUsername(true);
            } else {
                setIncompletePassword(true);
            }

        }
    }

    return ( 
        <div className={styles.wrapper}>
            <div className={styles.sideImage}>
            </div>

            <div className={styles.signInForm}>

                <LogoSvg/>

                <h1>Login to your Account</h1>
                <small>See what is going on with your bussiness</small>

                <div className={styles.google}>

                        <img src={google.src} alt="google logo" />
                        <span>Continue with Google</span>

                </div>

                <div className={styles.limit}>
                    <p>
                        ---------- or Sign in with Account ----------   
                    </p>
                </div>

                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder='username' name='username' id='username' onChange={(e) => dispatch({username: e.target.value})}/>
                    {
                        incompleteUsername && 
                            <Alert message="Please fill out username input." type="warning" showIcon />
                    }

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='password' name='password' id='password' onChange={(e) => dispatch({password: e.target.value})}/>
                    {
                        incompletePassword && 
                            <Alert message="Please fill out password input." type="warning" showIcon />
                    }
    
                    {
                        wrongCredentials &&
                            <Alert message="Invalid username or password." type="error" showIcon />
                    }
                
                </form>

                <button onClick={handleSubmit}>
                    Log in
                </button>

            </div>
        </div>
    );
}
 
export default LoginPage;