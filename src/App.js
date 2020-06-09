import React, { useEffect, useState } from "react";
import GlobalStyled from "./styles/GlobalStyled";
import styled from "styled-components";

import Navigation from "./components/Navigation.jsx";
import Header from "./components/Header.jsx";
import Form from "./components/Form";
import ListLinkUser from "./components/ListLinkUser";

import {
  getStorage,
  setStorage,
  setItemStorage,
  updateLinkStorage,
} from "./services/localStorage";
import Aside from "./components/Aside";
import Section from "./components/Section";
import Footer from "./components/Footer";

const MainStyled = styled.div`
  position: relative;
  .contenedor {
    background-color: rgba(0, 0, 0, 0.05);
    position: absolute;
    top: -80px;
    padding: 0;
    margin: 0;
    width: 100%;
    z-index: -10000;
  }
`;

const listLink = [
  {
    linkOrigin: "https://www.google.com/",
    linkShort: "https://rel.ink/gp7lw9",
    copy: false,
  },
  {
    linkOrigin: "https://elpais.com/",
    linkShort: "https://rel.ink/gx6Ora",
    copy: false,
  },
];

function App() {
  const [linksUser, setLinksUser] = useState([]);
  const [linkCopy, setLinkCopy] = useState("");

  useEffect(() => {
    const init = () => {
      if (localStorage.getItem("link")) {
        getStorage("link").then((links) => setLinksUser(links));
      } else {
        console.log("feo");
        setStorage(listLink);
        setLinksUser(listLink);
      }
    };

    init();
  }, []);

  useEffect(() => {
    updateLinkStorage(linkCopy);
    getStorage("link").then((links) => setLinksUser(links));
  }, [linkCopy]);

  const updateStorage = (data) => {
    const newLink = {
      linkOrigin: data.url,
      linkShort: ` https://rel.ink/${data.hashid}`,
      copy: false,
    };

    setLinksUser(linksUser.concat(newLink));
    setItemStorage(newLink);
  };

  const copyLink = async (link) => {
    console.log(link);
    const copiedLink = {
      linkOrigin: link.linkOrigin,
      linkShort: link.linkShort,
      copy: !link.copy,
    };
    console.log(copiedLink);
    await setLinkCopy(copiedLink);
    clipBoard(copiedLink);
  };

  const clipBoard = (copiedLink) => {
    const dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute("id", "dummy_id");
    dummy.setAttribute("value", copiedLink.linkShort);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  };

  return (
    <>
      <GlobalStyled />
      <Navigation />
      <Header />
      <Form className="container" updateStorage={updateStorage} />
      <MainStyled>
        <div className="contenedor">
          <ListLinkUser linksUser={linksUser} copyLink={copyLink} />
          <Aside />
          <Section />
          <Footer />
        </div>
      </MainStyled>
    </>
  );
}

export default App;
