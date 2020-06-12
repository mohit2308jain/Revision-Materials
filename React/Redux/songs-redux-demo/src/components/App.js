import React from 'react';
import { connect } from "react-redux";

import SongDetail from './SongDetail';
import SongList from './SongList';

import { selectSong } from '../actions'

const mapStateToProps = (state) => {
    return {
        songs: state.songs,
        selectedSong: state.selectedSong
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectSong: (song) => dispatch(selectSong(song))
    }
}

class App extends React.Component {

    render(){
        return(
            <React.Fragment>
                <div className="ui container grid">
                    <div className="ui row">
                        <div className="column eight wide">
                        <SongList selected={(song) => this.props.onSelectSong(song)} songs={this.props.songs}/>
                        </div>
                        <div className="column eight wide">
                        <SongDetail song={this.props.selectedSong}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);