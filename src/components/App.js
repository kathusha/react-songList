import React from 'react';
//import actions from '../actions/index';
// the above is not needed coz when the folder is mentioned it give the index.js
//import {selectSong} from '../actions';
import SongList from './SongList';
import SongDetail from './SongDetail';

const App =() => {
    return(
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList/>
                </div>
                <div className="column eight wide">
                    <SongDetail/>
                </div>
            </div> 
        </div>
    );
};

export default App;