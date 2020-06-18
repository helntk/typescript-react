import React from 'react';
import '../node_modules/semantic-ui-css/semantic.min.css'
import 
  {Switch,
   Route
   } 
   
from  'react-router-dom';
import GlobalStyle from './global'
import Login from './pages/login';
import SignUp from './pages/sign-up';
import Home from './pages/home';
import Logout from './pages/logout'
import Navbar from './components/Navbar';


function App() {
  return (

    <>
        <Navbar />
      <GlobalStyle />
      <Switch>



        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/' component={Home} />
        <Route path='/logout' component={Logout} />

      </ Switch>
    

    


</>
   
    
  );
}

export default App;
