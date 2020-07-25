import React from 'react';
import { connect } from 'react-redux';

import Modal from '../Modal';
import History from '../../History';
import { deleteStream, fetchStream } from '../../Redux/ActionCreators';
import { Link } from 'react-router-dom';

//own props for other props passed to component.
const mapStateToProps = (state, ownProps) => {
    return({
        stream: state.streams[ownProps.match.params.id]
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        deleteStream: (id) => {
            return dispatch(deleteStream(id));
        },
        fetchStream: (id) => {
            return dispatch(fetchStream(id));
        }
    })
}

class StreamDelete extends React.Component{
    
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    renderContent = () => {
        if(!this.props.stream){
            return 'Are you sure you want to delete this stream?'
        }
        else{
            return `Are you sure you want to delete 
                this stream with title: ${this.props.stream.title}?`
        }
    }

    render(){
        const actions = (
            <React.Fragment>
                <button className="ui button negative"
                    onClick={() => this.props.deleteStream(this.props.match.params.id)}>
                    Delete
                </button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        )

        return(
            <Modal 
                title="Delete Stream"
                content={this.renderContent()}
                actions={actions}
                onDismiss={() => History.push('/')} />
            
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamDelete);