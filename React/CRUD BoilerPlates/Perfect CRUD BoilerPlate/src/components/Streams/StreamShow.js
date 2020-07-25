import React from 'react';
import { connect } from 'react-redux';

import { fetchStream } from '../../Redux/ActionCreators';

const mapStateToProps = (state, ownProps) => {
    return({
        stream: state.streams[ownProps.match.params.id]
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchStream: (id) => {
            return dispatch(fetchStream(id));
        }
    })
}

class StreamShow extends React.Component{ 

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    render(){

        if(!this.props.stream){
            return <div>Loading...</div>
        }
        else{
            const { title, description } = this.props.stream;
            return(
                <React.Fragment>
                    <h1>{title}</h1>
                    <h5>{description}</h5>
                </React.Fragment>
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamShow);