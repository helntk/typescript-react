import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import  {NavItem} from './nav-item'
import LogoElement from './logo'
import{Container, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom'

const NavList: React.FC = ()=>{

const [currentPage, setPage] = useState<String>('')


  useEffect(() => {
    
     
    return () => {
      console.log("unmount")
    }
  }, [currentPage])
  


  return(

    <Container>



<NavUl >

    <div>
    <a className='link' href='https://github.com/helntk' >
        <Icon name='github' link size='large' />

    </a>

    </div>
    
      
        <div style={{position: 'absolute', left: '50%', transform:'translate(-50%,0)'}}  >
        <LogoElement    />

        </div>

        <div style={{display:'flex'}}>

        
        {currentPage !== 'login' && <Link to='login'onClick={()=>setPage('login')} >

        
              <NavItem >Login</NavItem>

        
        </Link>}
        
         {currentPage !== 'signup' &&  <Link to='signup'  onClick={()=>setPage('signup')}>
         
           <NavItem>Cadastro</NavItem>

       </Link>
         }
 
         
     
         </div>
    
      
      </NavUl>
    </Container>

  )
}


const NavUl = styled.ul`

display: flex;
list-style: none;
align-items: center;
justify-content: space-between;
margin: 0;
padding: 0

    
`


export default NavList