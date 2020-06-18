import React,{useState} from 'react'
import { Button, Container, Form } from 'semantic-ui-react'
import HeaderSpace from '../elements/HeaderSpace';
import {HeaderElement} from '../elements/textElement'
import {newUser, Errors} from '../interfaces/newUser'
import { ErrorMessage}  from '../elements/ErrorMessage'
import axios from 'axios';


const SignupForm: React.FC = () => {
    const [user, setUser] = useState<newUser>({
        name : '',
        password: '',
        email: '',
        cpf: '',
        endereco:{
          cep: '',
          cidade: '',
          bairro: '',
          numero: '',
          rua: ''
        }

    })
    const [errors, setError] = useState<Errors>({
      name : '',
      password: '',
      email: '',
      cpf: '',
      endereco:{
        cep: '',
        cidade: '',
        bairro: '',
        numero: '',
        rua: ''
      }

  })

    const getCep = (cep: string)=>{

      //`/`
      fetch(`https://viacep.com.br/ws/${cep}/json`).then(res=>{
         if(res.status === 200){
          return res.json()
         }

      }).then(data =>{
        const {localidade, logradouro, bairro} = data;

        setUser(user =>({
          ...user,
          endereco:{
          ...user.endereco,
          cidade: localidade,
          bairro: bairro,
          rua: logradouro,
          cep,
          

          }
      }))
      }).catch(error=>{
       console.log(error)
      })


      }


  //Nome, CPF, Email, CEP, Rua, Número, Bairro e Cidade


 const submitForm = (e: React.FormEvent<HTMLFormElement>) =>{
   e.preventDefault();
  setError({
    name : '',
    password: '',
    email: '',
    cpf: '',
    endereco:{
      cep: '',
      cidade: '',
      bairro: '',
      numero: '',
      rua: ''
    }
    
  })
   const passLenght = user.password.length;
   if(user.email ===''){
     setError(errors =>(
       {
         ...errors,
         email: 'Insira um em email válido'
       }
     ))
   


   }


   if(passLenght < 3){
    setError(errors =>(
      {
        ...errors,
        password: 'A senha precisa de no mínimo 4 cáracteres'
      }
    ))



  }
  if(user.cpf ===''){
    setError(errors =>(
      {
        ...errors,
        cpf: 'Insira um em cpf válido'
      }
    ))
    }
    if(user.name ===''){
      setError(errors =>(
        {
          ...errors,
          name: 'Insira um em nome válido'
        }
      ))

  }
  if(user.endereco.cep.length !== 8){
    setError(errors =>(
      {
        ...errors,
         endereco:{
          ...errors.endereco,

           cep: 'Insira um cep com 8 dígitos'
         }
      }
    ))
  }


    if(user.endereco.numero === ''){
    setError(errors =>(
      {
        ...errors,
         endereco:{
           ...errors.endereco,
           numero: 'Insira um número válido'
         }
      }
    ))
  }

  if(user.endereco.rua ===  '' ){

    setError(errors =>(
      {
        ...errors,
        endereco:{
          ...errors.endereco,
          rua: 'Insira uma rua válida'
        }
      }
    ))
  }


  
  if(user.endereco.bairro ===  '' ){

    setError(errors =>(
      {
        ...errors,
        endereco:{
          ...errors.endereco,
          bairro: 'Insira um bairro válido'
        }
      }
    ))
  }

  
  if(user.endereco.cidade ===  '' ){

    setError(errors =>(
      {
        ...errors,
        endereco:{
          ...errors.endereco,
          cidade: 'Insira uma cidade válida'
        }
      }
    ))
  }
 // CEP, Rua, Número, Bairro e Cidade
  
   
   axios.post( '//localhost:5000/usuarios',user).then(res => console.log(res.data)).catch(e => console.log(e))
    
 }

 
 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
  e.preventDefault();
  e.persist()
  let value = e.target.value;
  let field = e.target.name
  let cepLenght = value.length;
    if(field === 'email' || field === 'password' || field === 'cpf' || field === 'name'){
    setUser(user =>({
        ...user,
        [field]: value
    }))
  }
     if(field === 'numero' || field === 'cep' || field === 'bairro' || field === 'cidade' || field === 'rua'){
      setUser(user =>({
        ...user,
       endereco:{
        ...user.endereco,
          [field]: value
        }
        
    }))
   
   }

    if(field === 'cep' && cepLenght === 8) {

    getCep(value)


    }
    // if(field === 'password'){

    // }
 }

return(
    <HeaderSpace>
    <Container>
    <HeaderElement main={false}>Cadastro</HeaderElement>

<Form onSubmit={submitForm}>
    <Form.Field>
      <label>Nome</label>
      <input name='name' onChange={(e)=>handleInputChange(e)} placeholder='Insira seu nome' />
      {errors.name !== '' && <ErrorMessage>{errors.name}</ErrorMessage>}
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input name='email' type='email' onChange={(e)=>handleInputChange(e)} placeholder='Insira seu Email' />
      {errors.email !== '' && <ErrorMessage>{errors.email}</ErrorMessage>}

    </Form.Field>

    <Form.Field>
      <label>Senha</label>
      <input name='password'type='password' onChange={(e)=>handleInputChange(e)} placeholder='Insira sua senha' />
      {errors.password !== '' && <ErrorMessage>{errors.password}</ErrorMessage>}

    </Form.Field>
    <Form.Field>
      <label>CPF</label>
      <input name='cpf' onChange={(e)=>handleInputChange(e)} placeholder='Insira seu CPF' />
      {errors.cpf !== '' && <ErrorMessage>{errors.cpf}</ErrorMessage>}

    
    </Form.Field>
    <Form.Field>
      <label>CEP</label>
      <input name='cep'  onChange={(e)=>handleInputChange(e)}  placeholder='Insira seu CEP' />
      {errors.endereco.cep !== ''  && <ErrorMessage>{errors.endereco.cep}</ErrorMessage>}

    </Form.Field>

    <Form.Field>
      <label>Cidade</label>
      <input name='cidade' value={user.endereco.cidade}  onChange={(e)=>handleInputChange(e)} placeholder='Insira sua cidade' />
      {errors.endereco.cidade !== '' && <ErrorMessage>{errors.endereco.cidade}</ErrorMessage>}

    </Form.Field>

    <Form.Field>
      <label>Bairro</label>
      <input name='bairro'value={user.endereco.bairro}   onChange={(e)=>handleInputChange(e)} placeholder='Insira seu bairro' />
      {errors.endereco.bairro !== '' && <ErrorMessage>{errors.endereco.bairro}</ErrorMessage>}

    </Form.Field>

    <Form.Field>
      <label>Rua</label>
      <input name='rua' value={user.endereco.rua}  onChange={(e)=>handleInputChange(e)} placeholder='Insira sua Rua' />
      {errors.endereco.rua !== '' && <ErrorMessage>{errors.endereco.rua}</ErrorMessage>}

    </Form.Field>

     <Form.Field>
      <label>Numero</label>
      <input name='numero'   onChange={(e)=>handleInputChange(e)} placeholder='Insira seu numero' />
      {errors.endereco.numero !== ''  && <ErrorMessage>{errors.endereco.numero}</ErrorMessage>}

    </Form.Field>

    <Button type='submit'  color='green'>Confirmar</Button>
  </Form>
    </Container>
    </HeaderSpace>
)

}




export default SignupForm