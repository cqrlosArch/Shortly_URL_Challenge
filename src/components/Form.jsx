import React, { useState } from "react";
import styled, { css } from "styled-components";
import svg from "../assets/images/bg-shorten-desktop.svg";

const FormStyled = styled.div`
  .form {
    background-image: url(${svg});
    background-color: var(--darkVioletMain);
    background-repeat: no-repeat;
    background-size: cover;
    height: 150px;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    position: relative;
    top: 50%;
  }

  .input {
    background-color: #fff;
    position: relative;
    width: 800px;
    padding: 0.5rem 1rem;
    border-radius: 5px;
   
  }
  .error{
       border: 2px solid var(--redSecondary);
        color: var(--redSecondary);
  }
  .msg::after {
    content: "Please add a link";
    color: var(--redSecondary);
    position: absolute;
    bottom: -25px;
    left: 20px;
    display: block;
    ${({ error }) =>
      error===false &&
      css`
       display: none;
      `}
  }

  .input::-moz-placeholder {
    color: inherit;
    font-family: inherit;
    opacity: 0.5;
  }

  .shortBtn {
    background-color: var(--cyanMain);
    border-radius: 10px;
    color: #fff;
    padding: 0.5rem 1.5rem;
  }
  .shortBtn:hover {
    background-color: rgba(42, 207, 207, 0.8);
  }

  @media only screen and (max-width: 375px) {
    .form {
      margin: 0.1rem;
    }

    .input {
      background-color: #fff;
      width: 270px;
      margin: 0.8rem auto;
      padding: 0.5rem 1rem;
      border-radius: 5px;
    }
    .boton {
      text-align: center !important;
    }
    .shortBtn {
      padding: 0.6rem 1.5rem !important;
      border-radius: 5px;
      width: 270px;
      padding: 0;
      font-weight: 700;
    }
  }
`;

const Form = ({ updateStorage }) => {
  const [link, setLink] = useState("");
  const [error, setError] = useState(false);

  const sendLink = async (e) => {
    document.querySelector('.input').classList.remove('error')
    e.preventDefault();
    if (link === "") {
      setError(true);
      document.querySelector('.input').classList.add('error')
    } else {
      setError(false);
      fetch("https://rel.ink/api/links/", {
        method: "POST",
        body: JSON.stringify({
          url: link,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => updateStorage(data));
    }
  };

  return (
    <FormStyled className="container">
      <div className="form">
        <form className="form-inline row" onSubmit={sendLink}>
          <div className="form-group mb-2 col-md-10">
             <input
        
              type="text"
              className="form-control-plaintext input "
              id="staticEmail2"
              value={link}
              placeholder="Shorten a link here..."
              setLink={setLink}
            />
            {error && <span className="msg"></span>}
          </div>
          <div className="col-md-2 boton">
            <button type="submit" className="btn mb-2 shortBtn">
              Shorten It!
            </button>
          </div>
        </form>
      </div>
    </FormStyled>
  );
};

export default Form;
