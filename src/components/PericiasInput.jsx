import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
import { TextField, Paper } from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class PericiasInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reload: true
        }
    }

    valueCalculator = (lvl) => {
        return (lvl / 2)
    }

    periciasInput = (array) => {

        let lvlValue = this.valueCalculator(this.props.lvl)

        return array.map(element => {

            console.log(lvlValue, element.treino, element.outros);

            let total = lvlValue + element.treino + element.outros

            return (
                <>
                    <div>{element.label}</div>
                    <Col key={element.id}>
                        <Paper variant="outlined">
                            <TextField
                                defaultValue={total}
                                disabled={true}
                            >
                            </ TextField>
                        </Paper>
                    </Col>
                    <> = </>
                    <Col key={element.id}>
                        <TextField
                            defaultValue={lvlValue}
                            disabled={true}
                        >
                        </ TextField>
                    </Col>
                    <> + </>
                    <Col key={element.id}>
                        <TextField
                            defaultValue={element.treino}
                            disabled={true}
                        >
                        </ TextField>
                    </Col>
                    <> + </>
                    <Col key={element.id}>
                        <TextField
                            defaultValue={element.treino}
                        >
                        </ TextField>
                    </Col>
                    <> + </>
                    <Col key={element.id}>
                        <TextField
                            defaultValue={"a"}
                        >
                        </ TextField>
                    </Col>
                </>
            )
        })
    }

    handleFieldChange = (e) => {
        let value = e.target.value
        let id = e.target.id

        let mod = 0

        if (id === "for") {
            mod = this.props.array[0].helperText
        }
        if (id === "dex") {
            mod = this.props.array[1].helperText
        }
        if (id === "con") {
            mod = this.props.array[2].helperText
        }
        if (id === "int") {
            mod = this.props.array[3].helperText
        }
        if (id === "sab") {
            mod = this.props.array[4].helperText
        }
        if (id === "car") {
            mod = this.props.array[5].helperText
        }

        this.setState({ reload: true })
    }

    render() {
        return (
            <>
                {this.periciasInput(this.props.array)}
            </>
        )
    }
}