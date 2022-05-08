import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import Social from "../Social/Social";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {

  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if(loading || sending){
    return <Loading></Loading>
}

  if(user){
    navigate(from, { replace: true });
  }

  if (error){
    errorElement = <p className='text-danger'>Error: {error?.message}</p>
}

  const handleSignIn = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);

  }

  const navigateRegister = event => {
    navigate('/register')
  }

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if(email){
      await sendPasswordResetEmail(email);
      toast('Sent email');
    }
    else{
      toast('please enter your email address');
    }

    

  }


  return (
    <div className="container max-auto w-50 login-container">
      <h2 className="text-primary text-center mt-5" >Please Login</h2>

      <Form onSubmit={handleSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>


        <Button className="w-25 mb-3 d-block mx-auto" variant="primary" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}


    <p>Are you new here? <Link to="/register" className="text-decoration-none pe-auto text-primary" onClick={navigateRegister}>Please Register</Link></p>

    <p>Forget Password? <button className="text-primary pe-auto btn btn-link text-decoration-none" onClick={resetPassword}> Reset Password</button></p>

    <Social></Social>
    <ToastContainer/>

    </div>
  );
};

export default Login;
