import styled from "@emotion/styled";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

const Container = styled.div`
  width: 475px;
  margin: 100px auto 0 auto;
  text-align: center;
  color: #ff914d;
`;


const SuccessPage = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }, 100);
  });

  let history = useHistory();

  function changeToOrange(e) {
    e.target.style.background = '#ff914d';
    e.target.style.border = 'whitesmoke'
  }

  function changeToGrey(e) {
    e.target.style.background = 'grey';
    e.target.style.border = 'none';
  }

  return (
    <Container>
      <Confetti width={width} height={height} numberOfPieces={450} />
      <h1>Congrats!</h1>
      <p>Cookit has successfully processed your payment</p>
      <Button 
      onMouseOver={changeToOrange}
      onMouseOut={changeToGrey}
      onClick={() => {history.push("/")}}>Home</Button>
    </Container>
  );
};

export default SuccessPage
