import React,{useState} from 'react';
import colors from '../theming/colors'
import styled from 'styled-components';
import NavList from '../elements/nav-ul'
export default function Navbar() {

    const [active, setActive] = useState('')
  return (
    <header>

      <Nav>
       <NavList />
      </Nav>

    </header>



  )
}

const Nav = styled.nav `
 box-shadow: 0 0 10px 0 rgba(128, 126, 119,.5);
 background-color: ${colors.white};
`