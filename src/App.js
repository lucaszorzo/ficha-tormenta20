import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import FieldsInput from './components/FieldsInput'
import AttributeInput from './components/AttributeInput'
import PericiasInput from './components/PericiasInput'
import './App.css'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reload: false
    }
    this.tormentaArray1 = [
      { id: "nomePersonagem", helperText: "Nome do Personagem", value: "", size: 6 },
      { id: "nomeJogador", helperText: "Jogador", value: "", size: 6 },
    ]
    this.tormentaArray2 = [
      { id: "raca", helperText: "Raça", value: "", size: 3 },
      { id: "origem", helperText: "Origem", value: "", size: 3 },
      { id: "class", helperText: "Classe", value: "", size: 3 },
      { id: "lvl", helperText: "Nível", value: 2, size: 3 },
    ]
    this.tormentaArray3 = [
      { id: "for", label: "For", helperText: "0", value: "" },
      { id: "dex", label: "Des", helperText: "0", value: "" },
      { id: "con", label: "Con", helperText: "0", value: "" },
      { id: "int", label: "Int", helperText: "0", value: "" },
      { id: "sab", label: "Sab", helperText: "0", value: "" },
      { id: "car", label: "Car", helperText: "0", value: "" },
    ]
    this.tormentaArray4 = [
      { id: "acr", label: "Acrobacia *", value: 0, type: "dex", treino: 0, outros: 0, size: 12 },
    ]
  }

  render() {

    return (
      <div className="App" >
        <header className="App-header">
          <div>Tormenta 20</div>
        </header>
        <Container>
          <br />
          <Container className="Left-side" >
            <Row className="justify-content-md-center">
              <FieldsInput array={this.tormentaArray1} />
            </Row>
            <Row className="justify-content-md-center">
              <FieldsInput array={this.tormentaArray2} />
            </Row>
          </Container>
          <Container className="Right-side" >
            <Row style={{ minHeight: "120px", alignContent: "center" }} className="justify-content-md-center">
              <Col xs={12} align="center">
                <h1 style={{ marginBottom: 0 }}>TORMENTA 20</h1>
              </Col>
            </Row>
          </Container>
          <Container className="Left-side">
            <br />
            <Row className="justify-content-md-center">
              <AttributeInput array={this.tormentaArray3} />
            </Row>
          </Container>
          <Container className="Right-side">
            <Row style={{ minHeight: "120px", alignContent: "center" }} className="justify-content-md-center">
              <PericiasInput array={this.tormentaArray4} lvl={this.tormentaArray2[3].value} mod={this.tormentaArray3} />
            </Row>
          </Container>
        </Container>
      </div >
    )
  }
}

