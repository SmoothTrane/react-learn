
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Contact extends Component{

  state = {
    contacts: []

  }

  componentDidMount(){
    fetch("https://randomuser.me/api/?results=10")
    .then(res => res.json())
    .then(data => {
      console.log(data.results);
        this.setState({
          contacts: data.results
        })
    })
  }

  render(){

  const contacts = this.state.contacts;
  console.log(this.state.contacts)

    return (
      <div className = "User">

          {contacts.map( (contact) => {
              return (
                <h1>{contact.email}</h1>
              )
            })
          }
        </div>


    );
  }
}

export default Contact;
