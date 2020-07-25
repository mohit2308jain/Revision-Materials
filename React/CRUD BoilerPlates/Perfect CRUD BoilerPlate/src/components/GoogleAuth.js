import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../Redux/ActionCreators';

const mapStateToProps = (state) => {
    return({
        isSignedIn: state.auth.isSignedIn
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        signIn: (userId) => {
            return dispatch(signIn(userId));
        },
        signOut: () => {
            return dispatch(signOut());
        }
    })
}

class GoogleAuth extends React.Component{

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '295580576940-ff2raon227m71vi46u55hemjelc46066.apps.googleusercontent.com',
                scope: 'email'   
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else{
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if(!this.props.isSignedIn === null){
            return null;
        }
        else if(this.props.isSignedIn){
            return (<button className="ui red google button"
                        onClick={() => this.onSignOutClick()}>
                        <i className="google icon" />
                        Sign Out
                    </button>)
        }
        else{
            return (<button className="ui red google button"
                        onClick={() => this.onSignInClick()}>
                        <i className="google icon" />
                        Sign In with Google
                    </button>)
        }
    }

    render(){
        return(
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);