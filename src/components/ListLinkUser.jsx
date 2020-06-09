import React from "react";
import styled from "styled-components";
import BurttonCopy from "./BurttonCopy";

const ListLinkUserStyled = styled.div`
  .list {
    padding-top: 100px;
  }
  .link {
    padding: 1rem;
    margin: 0.5rem;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    border-radius: 5px;
  }

  .short {
    color: var(--cyanMain);
  }

  @media only screen and (max-width: 375px) {
    .link {
      padding: 0;
    }
    .origin {
      border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
      padding: 0.8rem;
      width: 100%;
    }

    .short {
      margin: 1rem 0;
      & p {
        text-align: left !important ;
      }
    }

  }
`;

const ListLinkUser = ({ linksUser, copyLink }) => {
  return (
    <ListLinkUserStyled>
      <ul className="list-group list">
        {linksUser.map((link, idx) => (
          <div className="container" key={idx}>
            <div className="link row">
              <div className="col-md-5 origin">
                <p className="d-block m-auto ">{link.linkOrigin}</p>
              </div>
              <div className="col-md-5 short">
                <p className="d-block m-auto text-right">{link.linkShort}</p>
              </div>
              <div className="col-md-2">
                {/* <button className="btn sendBtn" onClick={()=>copyLink(link)}>{link.copy ? 'Copied' : 'Copy'}</button> */}
                <BurttonCopy className="boton" link={link} copyLink={copyLink}>
                  {link.copy ? "Copied!" : "Copy"}
                </BurttonCopy>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </ListLinkUserStyled>
  );
};

export default ListLinkUser;
