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

// import { useHistory } from "react-router-dom";

export default function AdminSignUp({ buttonLabel, className }) {
  const {
    name,
    setName,
    password,
    setPassword,
    email,
    setEmail,
    signUp,
    setSignUp,
    toggleSignUp,
    showSignUpModal,
    toggleSignUpModal,
    toggleLogIn,
    setLoggedIn,
    setAdminLoggedIn,
    toggleAdminSignUpModal,
    showAdminSignUpModal,
  } = useContext(SessionContext);

  //   let history = useHistory();

  const handleSubmit = () => {
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);

    axios({
      method: "POST",
      url: `${url}/admins/`,
      data: {
        name: name,
        email: email,
        password: password,
      },
    })
      .then((response) => {
        console.log(response.data.status);
        if (response.data.status === "success") {
          toggleAdminSignUpModal();
          setAdminLoggedIn(true);
          setLoggedIn(false);
        }
      })
      .catch((error) => {
        console.error(error.response); // so that we know what went wrong if the request failed
      });
  };

  return (
    <div>
      <Modal
        isOpen={showAdminSignUpModal}
        toggleSignUpModal={toggleAdminSignUpModal}
        className={className}
      >
        <ModalHeader toggleSignUpModal={toggleAdminSignUpModal}>
          Admin Sign Up
        </ModalHeader>
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
          <Button color="secondary" onClick={toggleAdminSignUpModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
