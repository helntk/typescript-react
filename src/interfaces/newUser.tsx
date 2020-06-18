export  interface newUser{
    name: string;
    password: string;
    email: string;
    cpf: string;
    endereco : {
        cep: string;
        cidade: string;
        bairro: string;
        rua: string;
        numero: string;
    }
    
   }
   

   export  interface Errors{
    name: string;
    password: string;
    email: string;
    cpf: string;
    endereco: {
        cep: string;
        cidade: string;
        bairro: string;
        rua: string;
        numero: string;
    }
    
   }
   