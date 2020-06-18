import React, {useState} from 'react'

import { Button, Container, Form } from 'semantic-ui-react'
import HeaderSpace from '../elements/HeaderSpace';
import {HeaderElement} from   '../elements/textElement';
import {ErrorMessage} from '../elements/ErrorMessage';
import jwt from 'jsonwebtoken';
import axios from 'axios';

const LoginForm: React.FC = () => {
//Nome, CPF, Email, CEP, Rua, Número, Bairro e Cidade

const [user, setUser] = useState<{password: string, email: string, token?: string}>({
 
  password: '',
  email: ''
  

})
const [errors, setError] = useState<{
 email: string,
 password: string

}>({
  
    email: '',
    password: ''
  
})



const submitForm = (e: React.FormEvent<HTMLFormElement>) =>{
  e.preventDefault();
  const validateEmail = ()=>{

    axios.get( `http://localhost:5000/usuarios?email=${user.email}`)
    .then(res => {
      
      if(res.data[0].password === user.password){console.log('match')}
      else{
        setError(errors =>({
          ...errors,
          password: 'senha inválida'
        }))
      }
  } )
    .catch(e=>console.log(e))



 }

  validateEmail()

  if(user.email === ''){
    setError(errors =>(
      {
        ...errors,
        email: 'Email inválido'
      }
    ))

  }


  if(user.password === ''){
   setError(errors =>(
     {
       ...errors,
       password: 'Senha incorreta'
     }
   ))
  }

 


 


}
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
  e.preventDefault();
  e.persist()
  let value = e.target.value;
  let field = e.target.name

  setUser(user =>({
    ...user,
    [field]: value
}))

}

return(
    <HeaderSpace>
    <Container>
    <HeaderElement main={false}>Login</HeaderElement>

<Form onSubmit={submitForm}>
    <Form.Field>
      <label>Email</label>
      <input  onChange={(e)=>handleInputChange(e)} name='email' placeholder='Insira seu email' />
      {errors.email !== '' && <ErrorMessage>{errors.email}</ErrorMessage>}

    </Form.Field>
    <Form.Field>
      <label>Senha</label>
      <input onChange={(e)=>handleInputChange(e)} name='password' placeholder='Insira sua senha' />
      {errors.password !== '' && <ErrorMessage>{errors.password}</ErrorMessage>}

    </Form.Field>


 
    
    <Button type='submit' color='green'>Entrar</Button>
  </Form>
    </Container>
    </HeaderSpace>
)

}




export default LoginForm
