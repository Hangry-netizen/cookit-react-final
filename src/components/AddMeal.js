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

export default function AddMeal({ buttonLabel, className }) {
  const {
    name,
    setName,
    setLoggedIn,
    showAddMealModal,
    toggleShowAddMealModal,
    setIngredients,
    setPrepTime,
    setCookware,
    ingredients,
    prepTime,
    cookware,
    imgUrl,
    setUrl,
  } = useContext(SessionContext);

  //   let history = useHistory();

  const handleSubmit = () => {
    console.log(
      `Name: ${name}, ingredients: ${ingredients}, Prep_Time: ${prepTime}`,
      `Cookware: ${cookware}`,
      `Url: ${imgUrl}`
    );

    axios({
      method: "POST",
      url: `${url}/meals/`,
      data: {
        name: name,
        ingredients: ingredients,
        prep_time: prepTime,
        cookware: cookware,
        url: imgUrl,
      },
    })
      .then((response) => {
        console.log(response);
        if (response.data.status === "success") {
          toggleShowAddMealModal();
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
        isOpen={showAddMealModal}
        toggleShowAddMealModal={toggleShowAddMealModal}
        className={className}
      >
        <ModalHeader toggleSignUpModal={toggleShowAddMealModal}>
          Add Meal
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Meal Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Meal Name"
                onChange={(e) => setName(e.target.value)}
              />
              <Label className="mt-3" for="email">
                Ingredients
              </Label>
              <Input
                type="text"
                name="ingredients"
                id="ingredients"
                placeholder="Enter Ingredients"
                onChange={(e) => setIngredients(e.target.value)}
              />
              <Label className="mt-3" for="password">
                Prep Time
              </Label>
              <Input
                type="text"
                name="preptime"
                id="preptime"
                placeholder="Enter Prep Time"
                onChange={(e) => setPrepTime(e.target.value)}
              />
              <Label className="mt-3" for="password">
                Cookware
              </Label>
              <Input
                type="text"
                name="cookware"
                id="cookware"
                placeholder="Enter Cookware"
                onChange={(e) => setCookware(e.target.value)}
              />
              <Label className="mt-3" for="password">
                Image Url
              </Label>
              <Input
                type="text"
                name="imgUrl"
                id="imgUrl"
                placeholder="Enter Image Url"
                onChange={(e) => setUrl(e.target.value)}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => handleSubmit()}>
            Submit Meal
          </Button>
          <Button color="secondary" onClick={toggleShowAddMealModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
