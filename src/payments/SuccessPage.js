import styled from "@emotion/styled";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";


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

  return (
    <Container>
      <Confetti width={width} height={height} numberOfPieces={450} />
      <h1>Congrats!</h1>
      <p>Cookit has successfully processed your payment</p>
    </Container>
  );
};

export default SuccessPage
