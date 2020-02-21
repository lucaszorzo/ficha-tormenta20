import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
import { TextField } from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class AttributeInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reload: true
        }
    }

    attributeInput = (array) => {

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

    attribMod = (value) => {
        //console.log(value);

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
        //console.log(mod);
        return mod
    }

    handleFieldChange = (e) => {
        let value = e.target.value
        let id = e.target.id

        if (id === "for") {
            this.props.array[0].value = value
            this.props.array[0].helperText = this.attribMod(value)
        }
        if (id === "dex") {
            this.props.array[1].value = value
            this.props.array[1].helperText = this.attribMod(value)
        }
        if (id === "con") {
            this.props.array[2].value = value
            this.props.array[2].helperText = this.attribMod(value)
        }
        if (id === "int") {
            this.props.array[3].value = value
            this.props.array[3].helperText = this.attribMod(value)
        }
        if (id === "sab") {
            this.props.array[4].value = value
            this.props.array[4].helperText = this.attribMod(value)
        }
        if (id === "car") {
            this.props.array[5].value = value
            this.props.array[5].helperText = this.attribMod(value)
        }

        this.setState({reload: true})
    }

    render() {
        return (
            <>
                {this.attributeInput(this.props.array)}
            </>
        )
    }
}