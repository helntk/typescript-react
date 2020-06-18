import styled from 'styled-components';


export const TextElement = styled.p`
  font-size:'1.4rem';
  
`

export const SubHeader = styled.h2<{main:boolean}>`
 font-size:2rem; 
 color: ${props => props.main ? 'white' : 'black'}; 
 padding: ${props => props.main ? '.5rem 0' : '0'}
`


export const HeaderElement = styled.h1<{main:boolean}>`
 font-size:${props=> props.main ?'4rem' : '2rem'}; 
  color: ${props => props.main ? 'white' : 'black'}; 

 
`