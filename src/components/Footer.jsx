import React from "react";
import styled from "styled-components";

import { ReactComponent as Logo } from "../assets/images/logo.svg";

import { ReactComponent as TwitterIcon } from "../assets/images/icon-twitter.svg";
import { ReactComponent as PinterestIcon } from "../assets/images/icon-pinterest.svg";
import { ReactComponent as FacebookIcon } from "../assets/images/icon-facebook.svg";
import { ReactComponent as InstagramIcon } from "../assets/images/icon-instagram.svg";

const FooterStyled = styled.footer`
  display: grid;
  grid-template-columns: 30% 45% 25%;
  background-color: hsl(260, 8%, 14%);
  height: auto;
  color: #fff;
 

  .logo {
    text-align: center;
    margin-top: 3rem;
    & svg {
      scale: 0.8;
    }
    & path {
      fill: #fff;
    }
  }

  .links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 3rem;
    grid-gap: 3rem;

    .title_links {
      font-size: 0.8rem;
      margin-bottom: 1.8rem;
      font-weight: 700;
    }

    .list_item {
      list-style: none;
      padding: 0;
    }

    .item {
      font-size: 0.7rem;
      margin-bottom: 0.8rem;
    }
  }

  .social_medias {
   
    .icons {
     margin-top:3rem;
     margin-right:3rem;
     padding:0;
    
      & svg {
        scale: 0.8;
        margin-right: .7rem;
      }
    }
  }
`;
const Footer = () => {
  return (
    <FooterStyled>
      <div className="logo">
        <Logo />
      </div>
      <div className="links">
        <div className="list">
          <h3 className="title_links">Features</h3>
          <ul className="list_item">
            <li className="item">Link Shortening</li>
            <li className="item">Branded Links</li>
            <li className="item">Analytics</li>
          </ul>
        </div>
        <div className="list">
          <h3 className="title_links">Resources</h3>
          <ul className="list_item">
            <li className="item">Blog</li>
            <li className="item">Developers</li>
            <li className="item">Support</li>
          </ul>
        </div>
        <div className="list">
          <h3 className="title_links">Company</h3>
          <ul className="list_item">
            <li className="item">About</li>
            <li className="item">Our Team</li>
            <li className="item">Careers</li>
            <li className="item">Contact</li>
          </ul>
        </div>
      </div>
      <div className="social_medias">
        <div className="icons">
          <FacebookIcon />
          <TwitterIcon />
          <PinterestIcon />
          <InstagramIcon />
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
