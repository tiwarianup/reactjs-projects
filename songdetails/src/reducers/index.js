import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        { title: 'Hey You - Pink Floyd', duration: '04:05' },
        { title: 'Dark Matter - Porcupine Tree', duration: '05:30' },
        { title: 'Arriving Somewhere - Porcupine Tree', duration: '08:23' },
        { title: 'Keep Talking - Pink Floyd', duration: '06:45' },
        { title: 'Yellow - ColdPlay', duration: '03:49' },
        { title: 'Scientist - ColdPlay', duration: '04:08' },
        { title: 'Self Care - Mac Miller', duration: '03:59' },
        { title: 'Pursuit of Happiness - Kid Cudi', duration: '04:32' },
        { title: 'Voyage 34 - Porcupine Tree', duration: '53:37' },
        { title: 'Comfortably Numb - Pink Floyd', duration: '03:47' },
    ];
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})