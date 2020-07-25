import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component{ 
    
    renderError = ({ error, touched }) => {
        if(touched && error){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = (formProps) => {
        const className = `field 
            ${formProps.meta.error && formProps.meta.touched ? 
                'error' : ''}`;
        return (
            <div className={className}>
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off" />
                {this.renderError(formProps.meta)}
            </div>
        )
    }

    onSubmit = (formValues) => {
        console.log(formValues)
        this.props.onSubmit(formValues);
    }
    
    render(){
        return(
            <React.Fragment>
                <form className="ui form error" 
                    onSubmit={this.props.handleSubmit(this.onSubmit)} >
                    
                    <Field name="title" label="Enter Title"
                        component={(formProps) => this.renderInput(formProps)} />
                    
                    <Field name="description" label="Enter Description"
                        component={(formProps) => this.renderInput(formProps)} />
                    
                    <button className="ui button primary" 
                        type="submit">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.title){
        errors.title = 'You must enter a title';
    }

    if(!formValues.description){
        errors.description = 'You must enter a description';
    }

    return errors;
}

export default reduxForm({
    //name can be anything u want
    form: 'streamForm',
    validate: validate
})(StreamForm);

/*
<input 
    onChange={formProps.input.onChange}
    value={formProps.input.value} />
*/