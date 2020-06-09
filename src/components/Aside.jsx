import React from "react";
import styled from "styled-components";

import { ReactComponent as IconBrand } from "../assets/images/icon-brand-recognition.svg";
import { ReactComponent as IconDetailed } from "../assets/images/icon-detailed-records.svg";
import { ReactComponent as IconFully } from "../assets/images/icon-fully-customizable.svg";

const AsideStyled = styled.aside`
  margin:8rem 0;
  .head {
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title_aside {
      font-weight: 700;
    }
    .info_aside {
      text-align: center;
      width: 400px;
      margin: 1rem 0;
      color: rgba(0, 0, 0, 0.4);
    }
  }

  .cards {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    grid-column-gap: 2rem;
    height: 320px;
    width:80%;
    margin:5rem auto;;

    .card {
      width: 250px;
      height: 250px;
    }
    .title_card {
      padding-top: 2rem;
  
      font-size: 1rem;
      font-weight: 700;
    }
    .text_card {
      padding: 0.5rem;
      font-size: 0.8rem;
      color: rgba(0, 0, 0, 0.4);
      line-height:1.5rem;
      height:100px;
      width:260px;

      
    }
    .brand {
      align-self: flex-start;
    }
    .fully {
      align-self: flex-end;
    }
    .line {
      position: absolute;
      z-index: -100;
      height: 5px;
      width: 100%;
      background-color: var(--cyanMain);
    }
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      position: absolute;
      background-color: var(--darkVioletMain);
      position: absolute;
      top: -40px;
      left: 35px;
    }
  }
`;

const Aside = () => {
  return (
    <AsideStyled>
      <div className="head">
        <h2 className="title_aside">Advanced Statistics</h2>
        <p className="info_aside">
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>
      <div className="cards">
        <span className="line"></span>
        <div className="card card-body brand">
          <div className="icon">
            <IconBrand />
          </div>
          <h3 className="title_card">Brand Recognition</h3>
          <p className="text_card">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content
          </p>
        </div>
        <div className="card card-body detailed">
          <div className="icon">
            <IconDetailed />
          </div>
          <h3 className="title_card">Detailed Records</h3>
          <p className="text_card">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions
          </p>
        </div>
        <div className="card card-body fully">
          <div className="icon">
            <IconFully />
          </div>
          <h3 className="title_card">Fully Customizable</h3>
          <p className="text_card">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement
          </p>
        </div>
      </div>
    </AsideStyled>
  );
};

export default Aside;
