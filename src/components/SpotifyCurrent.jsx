import { useEffect, useState } from "react";

function SpotifyCurrent({token}){
    const [songUri, setSongUri] = useState("");

    useEffect(() =>{
        const getCurrentlyPlaying = async() =>{
            await fetch("/api/current_track")
                .then(response => response.json())
                .then(data =>{
                    setSongUri(data.song_uri);
                })
                .catch(error =>{
                    throw error;
                })
        }

        getCurrentlyPlaying();

        console.log(songUri);
        
        
        const script = document.createElement("script");
        script.src = "https://open.spotify.com/embed/iframe-api/v1"
        script.async = true;

        document.body.appendChild(script);
        
        if(songUri){
            window.onSpotifyIframeApiReady = (IFrameAPI) =>{
                const element = document.getElementById("embed-iframe");
                const options = {
                    uri: songUri
                };
                const callback = (EmbedController) =>{};
                IFrameAPI.createController(element, options, callback);
            }
        }
        
        const playerScript = document.createElement("script");
        playerScript.src = "https://sdk.scdn.co/spotify-player.js";
        playerScript.async = true;

        //document.body.appendChild(playerScript);
        
        
        // Clean up so it does not get added two times or more
        return () =>{
            document.body.removeChild(script);
        }

    }, [songUri]);
    
    return(
        <div>
            <div id="embed-iframe">
            </div>
        </div>
    )
}

export default SpotifyCurrent;
