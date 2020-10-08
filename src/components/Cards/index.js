import React from "react";
import Icon1 from "../../images/svg-8.svg";
import {
  CardsContainer,
  CardsBody,
  CardsH1,
  CardsH2,
  CardsIcon,
  CardsP,
  CardsWrapper,
} from "./CardsElements";

function Cards() {
  return (
    <CardsContainer id="sigup">
      <CardsH1> STEAM SCIENCE</CardsH1>
      <CardsWrapper>
        <CardsBody>
          <CardsIcon src={Icon1} />
          <CardsH2> Free Science Lessons</CardsH2>
          <CardsP>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            reprehenderit necessitatibus pariatur
          </CardsP>
        </CardsBody>
      </CardsWrapper>
    </CardsContainer>
  );
}

export default Cards;
