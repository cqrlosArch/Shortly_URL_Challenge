import React from "react";
import styled from "styled-components";

import bgi from "../assets/images/bg-boost-desktop.svg";

const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-image: url(${bgi});
  background-color: var(--darkVioletMain);
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;

  .title_section {
    text-align: center;
    color: #fff;
    font-weight: 700;
    font-size: 1.8rem;
    margin-bottom: -30px;
  }
  .btn_started {
    background-color: var(--cyanMain);
    border-radius: 25px;
    color: #fff;
    padding: 0.5rem 1.5rem;
    width: 150px;
    border:none;
  }
  .btn_started:hover {
    background-color: rgba(42, 207, 207, 0.8);
  }
`;

const Section = () => {
  return (
    <SectionStyled>
      <h2 className="title_section">Boost your links today</h2>
      <button className="btn btn_started">Get Started</button>
    </SectionStyled>
  );
};

export default Section;
