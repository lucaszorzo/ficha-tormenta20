import React, { Component } from 'react';
import { Container, TextField, Grid } from '@material-ui/core'
import './App.css';
import './App.css'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tormentaArray1: [
        { id: "nomePersonagem", helperText: "Nome do Personagem", value: "", },
        { id: "nomeJogador", helperText: "Jogador", value: "", },

      ],
      tormentaArray2: [
        { id: "raca", helperText: "Raça", value: "", },
        { id: "origem", helperText: "Origem", value: "", },
        { id: "class_lvl", helperText: "Classe e Nível", value: "", },
      ]
    }
  }

  fieldsIpunt(array) {

    //console.log(array);
    return array.map(element => {
      // console.log(element);

      return (
        <Grid item xl={6}>
          <TextField
            key={element.id}
            id={element.id}
            defaultValue={element.value}
            helperText={element.helperText}
          >
          </ TextField>
        </Grid>
      )
    })

  }

  render() {

    return (
      <div className="App" >
        {/* <header className="App-header">

        </header> */}
        <Container>
          <Container className="Container-base1" spacing={2}>
            <Grid container className="Root">
              {this.fieldsIpunt(this.state.tormentaArray1)}
              <br />
              {this.fieldsIpunt(this.state.tormentaArray2)}
            </Grid>
          </Container>
        </Container>
      </div>
    )
  }
}

