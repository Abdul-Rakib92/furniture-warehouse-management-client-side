import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/icon/google.png';
import Loading from '../../Shared/Loading/Loading';

const Social = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    const navigate = useNavigate();

    let errorElement;

    if(loading){
        return <Loading></Loading>
    }

    if (error){
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if(user){
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height: '1px'}} className='bg-dark w-50'></div>
            </div>

            {errorElement}

            <div>
                <button onClick={() => signInWithGoogle()} className='d-block mx-auto btn btn-info w-50 my-5 rounded-pill'>
                    <img className='rounded-pill' src={google} style={{width: '40px'}} alt="" />
                    <span className='px-3'>Google SignIn</span>
                </button>
            </div>

        </div>
    );
};

export default Social;