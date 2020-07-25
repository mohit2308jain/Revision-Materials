import React from 'react';
import { connect } from 'react-redux';

import StreamForm from './StreamForm';
import { createStream } from '../../Redux/ActionCreators';

const mapDispatchToProps = (dispatch) => {
    return({
        createStream: (formValues) => {
            return dispatch(createStream(formValues));
        }
    })
}

class StreamCreate extends React.Component{ 

    onSubmit = (formValues) => {
        console.log(formValues)
        this.props.createStream(formValues);
    }
    
    render(){
        return(
            <React.Fragment>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={(formValues) => this.onSubmit(formValues)} />
            </React.Fragment>
        )
    }
}

export default connect(null, mapDispatchToProps)(StreamCreate);

/*
const formWrapped = reduxForm({
    //name can be anything u want
    form: 'streamCreate',
    validate: validate
})(StreamCreate);

export default connect(null, mapDispatchToProps)(formWrapped);


<input 
    onChange={formProps.input.onChange}
    value={formProps.input.value} />
*/