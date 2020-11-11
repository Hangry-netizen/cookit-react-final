import React, { useContext } from "react";
import axios from "axios";
import SessionContext from "../contexts/SessionContext";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { url } from "../App";

export default function SignUp({ className }) {
  const {
    name,
    setName,
    password,
    setPassword,
    email,
    setEmail,
    showSignUpModal,
    toggleSignUpModal,
    setLoggedIn,
    setAdminLoggedIn,
  } = useContext(SessionContext);

  const handleSubmit = () => {
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);

    axios({
      method: "POST",
      url: `${url}/users/`,
      data: {
        name: name,
        email: email,
        password: password,
      },
    })
      .then((response) => {
        console.log(response.data.status);
        if (response.data.status === "success") {
          toggleSignUpModal();
          setLoggedIn(true);
          setAdminLoggedIn(false);
        }
      })
      .catch((error) => {
        console.error(error.response); // so that we know what went wrong if the request failed
      });
  };

  return (
    <div>
      <Modal
        isOpen={showSignUpModal}
        toggleSignUpModal={toggleSignUpModal}
        className={className}
      >
        <ModalHeader toggleSignUpModal={toggleSignUpModal}>Sign Up</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Username</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Enter username"
                onChange={(e) => setName(e.target.value)}
              />
              <Label className="mt-3" for="email">
                Email
              </Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label className="mt-3" for="password">
                Password
              </Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => handleSubmit()}>
            Sign Up
          </Button>
          <Button color="secondary" onClick={toggleSignUpModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
