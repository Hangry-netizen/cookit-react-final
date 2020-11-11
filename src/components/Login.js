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
  Alert
} from "reactstrap";
import { url } from "../App";
import { UncontrolledAlert } from "react";

// import { useHistory } from "react-router-dom";

export default function Login({ buttonLabel, className }) {
  const {
    name,
    setName,
    password,
    setPassword,
    toggleLogIn,
    toggleLoginModal,
    showLoginModal,
    setLoggedIn
  } = useContext(SessionContext);
 
  //   let history = useHistory();

  const handleSubmit = (event) => {
    console.log(`Name: ${name}, Password: ${password}`);
    axios({
      method: "POST",
      url: `${url}/sessions/login`,
      data: {
        name: name,
        password: password,
      },
    })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("jwt", response.data.auth_token);
        console.log(response.data.Error);
        if (response.data.Error !== "Invalid credentials") {
          toggleLoginModal();
          toggleLogIn();
        }
      })
      .catch((error) => {
        console.error(error.response);
        return (
          <div>
            <UncontrolledAlert color="danger">
              Incorrect username or password!
            </UncontrolledAlert>
          </div>
        );
      });
  };

  return (
    <div>
      <Modal
        isOpen={showLoginModal}
        toggleLoginModal={toggleLoginModal}
        className={className}
      >
        <ModalHeader toggleLoginModal={toggleLoginModal}>
          User Login
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Enter username"
                onChange={(e) => setName(e.target.value)}
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
            Login
          </Button>
          <Button color="secondary" onClick={toggleLoginModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
