import React, { Component } from 'react';
import './App.css';
import { Container, TextField } from '@material-ui/core'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
    this.tormentaArray = [
      {
        id: "",
        helperText: "",
        value: "",
      }
    ]
  }


  fieldsIpunt(array) {

    console.log(array);

    array.forEach(element => {
      console.log(element);

      return (
        <TextField
          id={element.id}
          value={element.value}
          helperText={element.helperText}>
        </TextField>
      )
    });
  }

  render() {

    return (
      <div className="App" >
        <header className="App-header">
          <Container maxWidth="false">
            {this.fieldsIpunt(this.tormentaArray)}
          </Container>
        </header>
      </div>
    )
  }
}

