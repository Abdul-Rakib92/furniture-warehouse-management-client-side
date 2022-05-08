import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from "../../../firebase.init";
import Social from "../Social/Social";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {


  const [
    createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);


    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate("/login");
    }

    if(loading || updating){
      return <Loading></Loading>
  }

    if (user) {
      console.log('user', user);  
     }


    const handleRegister = async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      console.log('Updated profile');
      navigate('/home');

    }



  return (
    <div className="container w-50 mx-auto register-container">
      <h2 className="text-primary text-center mt-5">Please Register</h2>

      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Your Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" name="terms" id="terms" label="Accept Terms and Conditions" />
        </Form.Group>

        <Button className="w-25 mb-3" variant="primary" type="submit">
          Register
        </Button>
      </Form>

      <p>Already have an account? <Link to="/login" className="text-decoration-none pe-auto text-primary" onClick={navigateLogin}>Please Login</Link></p>
      
      <Social></Social>
    </div>
  );
};

export default Register;
