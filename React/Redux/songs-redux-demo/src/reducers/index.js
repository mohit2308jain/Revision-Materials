import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'No Scrubs',
            duration: '2:30'
        },
        {
            title: 'More & More',
            duration: '3:40'
        },
        {
            title: 'On',
            duration: '4:00'
        },
        {
            title: 'Psycho',
            duration: '3:45'
        },

    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    switch(action.type){
        case 'SONG_SELECTED':
            return action.payload;
        default:
            return selectedSong;
    }
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})