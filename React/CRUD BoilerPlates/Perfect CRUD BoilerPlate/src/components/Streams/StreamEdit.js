import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import StreamForm from './StreamForm';
import { updateStream, fetchStream } from '../../Redux/ActionCreators';

//own props for other props passed to component.
const mapStateToProps = (state, ownProps) => {
    return({
        stream: state.streams[ownProps.match.params.id]
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        updateStream: (formValues, id) => {
            return dispatch(updateStream(formValues, id));
        },
        fetchStream: (id) => {
            return dispatch(fetchStream(id));
        }
    })
}

class StreamEdit extends React.Component{

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }
    
    onSubmit = (formValues) => {
        console.log(formValues);
        const id = this.props.match.params.id;
        this.props.updateStream(formValues, id);
    }
    
    render(){
        if(!this.props.stream){
            return (<React.Fragment>Loading...</React.Fragment>);
        }
        else{
            return(
                <React.Fragment>
                    <h3>Update a Stream</h3>
                    <StreamForm
                        initialValues={_.pick(this.props.stream, 'title', 'description')}
                        onSubmit={(formValues) => this.onSubmit(formValues)} />
                </React.Fragment>
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit);

/*
<React.Fragment>
    <h3>Update a Stream</h3>
    <StreamForm
        initialValues={{title: this.props.stream.title, description: this.props.stream.description}}
        onSubmit={(formValues) => this.onSubmit(formValues)} />
</React.Fragment>
*/