import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './Contact';
import { BrowserRouter, Route} from 'react-router-dom'


//
// var user = {
//   name: "",
//   phoneNumber: "",
//   email: "",
//   homeAddress: ""
//
// }

class App extends Component {


    state = {
      user:{
        name: "",
        location:""
      }
    };


  componentDidMount(){
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
       this.setState({
         user: data.results[0]
       })
  })

}
  render() {
    return (
      <BrowserRouter>
      <div>
        <nav>

          <Link to= "/contacts">Contacts </Link>
          </nav>
          <Route path="/home" component={Contact}> </Route>
          </div>
          </BrowserRouter>
/
    );

  }


}

export default App;
