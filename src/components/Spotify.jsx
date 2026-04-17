import { useEffect, useState } from "react";
import { apiUrl } from "../api/apiUrl";

const track = {
    name: "",
    album: {
        images: [
            { url: "" }
        ]
    },
    artists: [
        { name: "" }
    ]
}


function Spotify({token}){
    const [is_paused, setPaused] = useState(false);
    const [is_active, setActive] = useState(false);
    const [player, setPlayer] = useState(undefined);
    const [current_track, setTrack] = useState(track);

    useEffect(() =>{
        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;

        document.body.appendChild(script);

        window.onSpotifyWebPlaybackSDKReady = () => {

            const player = new window.Spotify.Player({
                name: 'Web Playback SDK',
                getOAuthToken: cb => { cb(token); },
                volume: 0.5
            });

            setPlayer(player);

            player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);
                // Transfer playback to this device
                fetch('https://api.spotify.com/v1/me/player', {
                  method: 'PUT',
                  headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    device_ids: [device_id],
                    play: true  // set to false if you don't want it to auto-play
                  })
                });
            });

            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });

            player.addListener('player_state_changed', (state) =>{
                if(!state){
                    setActive(false);
                    return;
                }
                
                setActive(true);
                setPaused(state.paused);
                setTrack(state.track_window.current_track);
            
                player.getCurrentState().then(state =>{
                    (!state)? setActive(false) : setActive(true);
                });
            });

            player.connect();
            
        };

        return () =>{
            document.body.removeChild(script);
        }
        
    },[]);

    if(!is_active){
        return(
            <div>
                <div>
                    <b>Instance is inactive. Transfer your playback using your Spotify App</b>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="container">
                <div className="main-wrapper">
                     <img src={current_track.album.images[0].url} className="now-playing__cover" alt="" />

                        <div className="now-playing__side">
                            <div className="now-playing__name">{current_track.name}</div>
                            <div className="now-playing__artist">{current_track.artists[0].name}</div>

                            <button className="btn-spotify" onClick={() => { player.previousTrack() }} >
                                &lt;&lt;
                            </button>

                            <button className="btn-spotify" onClick={() => { player.togglePlay() }} >
                                { is_paused ? "PLAY" : "PAUSE" }
                            </button>

                            <button className="btn-spotify" onClick={() => { player.nextTrack() }} >
                                &gt;&gt;
                            </button>
                        </div>

                </div>
            </div>
        )
    }

}

export default Spotify;
