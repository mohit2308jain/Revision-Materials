import React from 'react';
import youtube, { baseParams } from '../apis/youtube'
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{

    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        this.onTermSubmit('Book');
    }

    onTermSubmit = async (term) => {
        try{
            const res = await youtube.get('/search', {
                params: {
                    ...baseParams,
                    q: term
                }
            }); 

            this.setState({
                videos: res.data.items,
                selectedVideo: res.data.items[0]
            })
            console.log(res.data.items);
        }
        catch(error){
            console.log(error);
        }
        
    };
    
    //callback for selected video
    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar callbackSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList 
                                onVideoSelect = {this.onVideoSelect} 
                                videos={this.state.videos} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;