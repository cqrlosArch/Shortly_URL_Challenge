import {createGlobalStyle} from 'styled-components'

const GlobalStyled = createGlobalStyle`
    :root{
        --cyanMain: hsl(180, 66%, 49%);
        --darkVioletMain: hsl(257, 27%, 26%);
        --redSecondary: hsl(0, 87%, 67%);
        --grayNeutral: hsl(0, 0%, 75%);
        --grayishVioletNeutral: hsl(257, 7%, 63%);
        --veryDarkBlueNeutral: hsl(255, 11%, 22%);
        --veryDarkVioletNeutral: hsl(260, 8%, 14%);
    }
    html{
        margin:0;
        padding:0;
    }
    body{
      
        width:100%;
        height:auto;
        padding-top:1rem;
        box-sizing:border-box;
        font-family: 'Poppins', sans-serif;
        font-size:14px;
        overflow-x:hidden;
    }
`

export default GlobalStyled;