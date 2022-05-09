import React from "react";
import { Button, Form } from "react-bootstrap";
import contact from '../../../images/contact.png';
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="container">
        <h2 className="text-primary text-center mt-5 pt-5">Contact Me</h2>

        <div className="row">
          <div className="g-3 col-sm-12 col-lg-6">
              <img src={contact} alt="" />
          </div>

          <div className="g-3 col-sm-12 col-lg-6 mt-5">
            <Form className="mt-5">
              <Form.Group className="mb-3 contact-text" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>

              <Form.Group className="mb-3 contact-text" controlId="formBasicPassword">
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>

              <Form.Group
                className="mb-3 contact-text"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Your Feedback"
                  rows={5}
                />
              </Form.Group>

              <Button variant="primary w-50 mx-auto d-block " type="submit">
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
