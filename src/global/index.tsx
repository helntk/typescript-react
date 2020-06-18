import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle `


 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box
 };
 .link{
    color: black
 }

 @media screen and (max-width:700px)
{
   html{
      font-size: 12px
   }
} 
`

export default GlobalStyle