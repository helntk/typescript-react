import styled from 'styled-components';
import React from  'react';





const LogoElement: React.FC = ()=>{

    return(

        <Logo>

        game.<span style={{color: '#fc0  '}}>hub</span>
       </Logo>
    )
 
}

const Logo = styled.div `
    color: black;
    font-size: 2rem;
    font-family: 'Poppins', 'sans-serif';
    font-weight: 900;
    font-style: italic



  
`

export default LogoElement

