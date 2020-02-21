import React, { Component } from 'react';
import { TextField } from '@material-ui/core'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
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
      { id: "class_lvl", helperText: "Classe e Nível", value: "", size: 6 },
    ]
    this.tormentaArray3 = [
      { id: "for", label: "For", helperText: "0", value: "" },
      { id: "dex", label: "Des", helperText: "0", value: "" },
      { id: "con", label: "Con", helperText: "0", value: "" },
      { id: "int", label: "Int", helperText: "0", value: "" },
      { id: "sab", label: "Sab", helperText: "0", value: "" },
      { id: "car", label: "Car", helperText: "0", value: "" },
    ]
  }

  handleFieldChange = (e) => {
    let value = e.target.value
    let id = e.target.id


    if (id === "for") {
      this.tormentaArray3[0].value = value
      this.tormentaArray3[0].helperText = this.attribMod(value)
    }
    if (id === "dex") {
      this.tormentaArray3[1].value = value
      this.tormentaArray3[1].helperText = this.attribMod(value)
    }
    if (id === "con") {
      this.tormentaArray3[2].value = value
      this.tormentaArray3[2].helperText = this.attribMod(value)
    }
    if (id === "int") {
      this.tormentaArray3[3].value = value
      this.tormentaArray3[3].helperText = this.attribMod(value)
    }
    if (id === "sab") {
      this.tormentaArray3[4].value = value
      this.tormentaArray3[4].helperText = this.attribMod(value)
    }
    if (id === "car") {
      this.tormentaArray3[5].value = value
      this.tormentaArray3[5].helperText = this.attribMod(value)
    }

    this.setState({ reload: true })
  }

  fieldsIpunt(array) {
    //console.log(array);
    return array.map(element => {
      // console.log(element);
      return (
        <Col xs={element.size} key={element.id} >
          <TextField
            key={element.id}
            id={element.id}
            defaultValue={element.value}
            helperText={element.helperText}
          >
          </ TextField>
        </Col>
      )
    })
  }

  attribMod = (value) => {
    console.log(value);

    let mod = ""

    if (value === "1") {
      mod = "-5"
    } else if (value === "2" || value === "3") {
      mod = "-4"
    } else if (value === "4" || value === "5") {
      mod = "-3"
    } else if (value === "6" || value === "7") {
      mod = "-2"
    } else if (value === "8" || value === "9") {
      mod = "-1"
    } else if (value === "10" || value === "11") {
      mod = "0"
    } else if (value === "12" || value === "13") {
      mod = "1"
    } else if (value === "14" || value === "15") {
      mod = "2"
    } else if (value === "16" || value === "17") {
      mod = "3"
    } else if (value === "18" || value === "19") {
      mod = "4"
    } else if (value === "20" || value === "21") {
      mod = "5"
    } else if (value === "22" || value === "23") {
      mod = "6"
    } else if (value === "24" || value === "25") {
      mod = "7"
    } else {
      mod = ""
    }

    console.log(mod);

    return mod
  }

  attributeInput(array) {
    return array.map(element => {

      return (
        <Col key={element.id}>
          <TextField
            key={element.id}
            id={element.id}
            label={element.label}
            defaultValue={element.value}
            helperText={element.helperText}
            onChange={this.handleFieldChange}
            InputLabelProps={{
              shrink: true,
            }}
          >
          </ TextField>
        </Col>
      )
    })
  }

  render() {

    return (
      <>
        <div className="App" >
          <header className="App-header">
            <div>Tormenta 20</div>
          </header>
        </div >
        <Container>
          <Container className="Left-side" >
            <Row className="justify-content-md-center">
              {this.fieldsIpunt(this.tormentaArray1)}
            </Row>
            <Row className="justify-content-md-center">
              {this.fieldsIpunt(this.tormentaArray2)}
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
              {this.attributeInput(this.tormentaArray3)}
            </Row>
          </Container>
        </Container>
      </>
    )
  }
}

