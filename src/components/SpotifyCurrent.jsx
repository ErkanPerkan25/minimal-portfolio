import { useEffect, useState } from "react";
import SkeletonLoader from "./SkeletonLoader";

function SpotifyCurrent(){
    const [songUri, setSongUri] = useState("");
    const width = 525;
    const height = 500;

    useEffect(() =>{
        const getCurrentlyPlaying = async() =>{
            await fetch("/api/current_track", {
                    method: "GET"
                })
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
                const element = document.getElementById("current-song-embed-iframe");
                const options = {
                    uri: songUri,
                    width: width, 
                    height: height
                };
                const callback = (EmbedController) =>{};
                IFrameAPI.createController(element, options, callback);
            }
        }
        
        //const playerScript = document.createElement("script");
        //playerScript.src = "https://sdk.scdn.co/spotify-player.js";
        //playerScript.async = true;

        //document.body.appendChild(playerScript);
        
        
        // Clean up so it does not get added two times or more
        return () =>{
            document.body.removeChild(script);
        }

    }, [songUri]);

    if(songUri){
        return(
            <div>
                <h1 className="m-2 font-bold text-xl">Currently listening to: </h1>
                <div id="current-song-embed-iframe"></div>
            </div>
        )
    }
    else{
        return(
            <div>
                <SkeletonLoader width={300} height={200}/>
            </div>
        )
    }
    
}

export default SpotifyCurrent;
