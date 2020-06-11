import React from 'react';

class SongList extends React.Component {

    renderList = () => {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button onClick={() =>this.props.selected(song)} className="ui button primary">
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="ui divided list">
                {this.renderList()}</div>
            </React.Fragment>
        )
    }
}

export default SongList;