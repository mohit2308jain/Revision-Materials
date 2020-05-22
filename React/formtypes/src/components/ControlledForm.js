import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';

class ControlledForm extends React.Component{

    state = {
        firstname: '',
        lastname: '',
        telnum: '',
        email: '',
        agree: false,
        contactType: 'Tel.',
        message: '',
        touched: {
            firstname: false,
            lastname: false,
            email: false,
            telnum: false
        }
    }

    constructor(props){
        super(props);

        this.handleBlur = this.handleBlur.bind(this);
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit = (event) => {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    handleBlur = (field) => {
        return(
        (event) => {
            this.setState({
                touched: {...this.state.touched, [field]: true}
            });
        })
    }

    validate = (firstname, lastname, telnum, email) => {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        }

        if(this.state.touched.firstname && firstname.length < 3){
            errors.firstname = 'FirstName Should be >= 3 characters';
        }
        else if(this.state.touched.firstname && firstname.length > 10){
            errors.firstname = 'FirstName Should be <= 10 characters';
        }

        if(this.state.touched.lastname && lastname.length < 3){
            errors.lastname = 'LastName Should be >= 3 characters';
        }
        else if(this.state.touched.lastname && lastname.length > 10){
            errors.lastname = 'LastName Should be <= 10 characters';
        }

        const reg = /^\d+$/;
        if(this.state.touched.telnum && !reg.test(telnum)){
            errors.telnum = 'Tel. Number should contain only numbers';
        }

        if(this.state.touched.email && email.split('').filter(x => x==='@').length !== 1){
            errors.email = 'Email Address is not Valid';
        }

        return errors;

    }

    render(){
        const errors = this.validate(this.state.firstname, this.state.lastname,
            this.state.telnum, this.state.email);

        return(
            <React.Fragment>
                <div className="container-fluid">

                    <div className="row row-content">

                        <div className="col-12">
                            <h3>Send us your Feedback</h3>
                        </div>

                        <div className="col-12 col-md-9">

                            <Form onSubmit={(event) => this.handleSubmit(event)}>

                                <FormGroup row>
                                    <Label htmlFor="firstname" md={2}>First Name</Label>
                                    <Col md={10}>
                                        <Input type="text" id="firstname" name="firstname" placeholder="First Name"
                                            value={this.state.firstname} onChange={(event) => this.handleInputChange(event)}
                                            valid={errors.firstname === ''} invalid={errors.firstname !== ''}
                                            onBlur={this.handleBlur('firstname')}
                                            />
                                        <FormFeedback>
                                            {errors.firstname}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label htmlFor="lastname" md={2}>Last Name</Label>
                                    <Col md={10}>
                                        <Input type="text" id="lastname" name="lastname" placeholder="Last Name"
                                            value={this.state.lastname} onChange={(event) => this.handleInputChange(event)}
                                            valid={errors.lastname === ''} invalid={errors.lastname !== ''}
                                            onBlur={this.handleBlur('lastname')}
                                            />
                                        <FormFeedback>
                                            {errors.lastname}
                                        </FormFeedback>
                                    </Col>                        
                                </FormGroup>

                                <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                    <Col md={10}>
                                        <Input type="tel" id="telnum" name="telnum" placeholder="Tel. number"
                                            value={this.state.telnum} onChange={(event) => this.handleInputChange(event)}
                                            valid={errors.telnum === ''} invalid={errors.telnum !== ''}
                                            onBlur={this.handleBlur('telnum')}
                                            />
                                        <FormFeedback>
                                            {errors.telnum}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={10}>
                                        <Input type="email" id="email" name="email" placeholder="Email"
                                            value={this.state.email} onChange={(event) => this.handleInputChange(event)} 
                                            valid={errors.email === ''} invalid={errors.email !== ''}
                                            onBlur={this.handleBlur('email')}
                                            />
                                        <FormFeedback>
                                            {errors.email}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>

                                    <Col md={{size: 6, offset: 2}}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" name="agree" checked={this.state.agree} 
                                                    onChange={(event) => this.handleInputChange(event)} /> {' '}
                                                <strong>May we contact you?</strong>
                                            </Label>
                                        </FormGroup>
                                    </Col>

                                    <Col md={{size: 3, offset: 1}}>
                                        <Input type="select" name="contactType"
                                                value={this.state.contactType}
                                                onChange={(event) => this.handleInputChange(event)}>
                                            <option>Tel.</option>
                                            <option>Email</option>
                                        </Input>
                                    </Col>

                                </FormGroup>

                                <FormGroup row>
                                    <Label htmlFor="message" md={2}>Your Feedback</Label>
                                    <Col md={10}>
                                        <Input type="textarea" id="message" name="message"
                                            rows="12" value={this.state.message}
                                            onChange={(event) => this.handleInputChange(event)}></Input>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col md={{size: 10, offset: 2}}>
                                        <Button type="submit" color="primary">
                                            Send Feedback
                                        </Button>
                                    </Col>
                                </FormGroup>

                            </Form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ControlledForm;