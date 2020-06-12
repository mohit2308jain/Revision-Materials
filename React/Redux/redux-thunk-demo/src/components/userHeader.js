import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return{
        user: state.users.find((user) => user.id === ownProps.userId)
    }
}

class UserHeader extends React.Component{

    render(){
        const { user } = this.props;

        if(!user){
            return null;
        }
        else{
            return <div className="header">{user.name}</div>
        }
    }
}

export default connect(mapStateToProps)(UserHeader);