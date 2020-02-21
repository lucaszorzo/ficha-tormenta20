import React, { Component } from 'react';
import { TextField } from '@material-ui/core'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class FieldsInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reload: true
        }
    }

    fieldsInput = (array) => {
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
    render() {
        return (
            <>
                {this.fieldsInput(this.props.array)}
            </>
        )
    }
}