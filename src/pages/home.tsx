import React from 'react'
import styled from  'styled-components';
import hero from '../assets/images/hero-1.jpg'
import {Container} from 'semantic-ui-react';
import {SubHeader, HeaderElement} from '../elements/textElement'

export default function Home() {
    return (
        <Greetings >
          <Container text>
            <HeaderElement main={true}>Bem vindo(a) ao game.hub</HeaderElement>
           <SubHeader main={true}>Um lugar onde você pode organizar seus games e acompanhar o progresso em suas aventuras. Espero que  goste!</SubHeader>
          </Container>
         

       

        </Greetings>
    )
}


const Greetings = styled.div `
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  height: 90vh;
  margin-top:.5rem;
  background-image: url(${hero});
  background-size: cover;


    span{
     color: 'red'
  
  
  
  }

`