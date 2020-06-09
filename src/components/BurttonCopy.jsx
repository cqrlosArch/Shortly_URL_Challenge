import React from 'react'
import styled from "styled-components";

const ButtonStyled = styled.button`

     background-color:${({copy})=>copy ?'var(--darkVioletMain)':'var(--cyanMain)'}; 
     border-radius:10px;
     border:none;
     color: #fff;
     padding:.5rem 1.5rem;
     margin-left:2rem;
     width:7rem;
     text-align:center;

     &:hover{
        background-color:${({copy})=>copy ?'rgba(59, 48, 84,0.5)':'rgba(42, 207, 207,0.5)'}; 
        
     }

     @media only screen and (max-width: 375px) {
            width:100%;
            margin:0 auto 1rem;
            border-radius:5px;
            font-weight:700;
    }
   
`

const BurttonCopy = ({link, copyLink,children}) => {
    return (
        <ButtonStyled copy={link.copy} onClick={()=>copyLink(link)}>
            {children}
        </ButtonStyled>
    )
}

export default BurttonCopy
