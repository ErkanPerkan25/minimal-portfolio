import { useEffect } from "react";

function SpotifyCurrent({token}){
    useEffect(() =>{
        const test = async() =>{
            const response = await fetch("/api/current_track");
            const json = await response.json();
            console.log(json);
        }

        if(token){
            test();
        }


        /*
        const script = document.createElement("script");
        script.src = "https://open.spotify.com/embed/iframe-api/v1"
        script.async = true;

        document.body.appendChild(script);

        window.onSpotifyIframeApiReady = (IFrameAPI) =>{
            const element = document.getElementById("embed-iframe");
            const options = {
                uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
            };
            const callback = (EmbedController) =>{};
            IFrameAPI.createController(element, options, callback);
        }
        
        const playerScript = document.createElement("script");
        playerScript.src = "https://sdk.scdn.co/spotify-player.js";
        playerScript.async = true;

        //document.body.appendChild(playerScript);
        
        
        // Clean up so it does not get added two times or more
        return () =>{
            document.body.removeChild(script);
        }
        */
    }, []);

    return(
        <div>
            <div id="embed-iframe">
            </div>
        </div>
    )
}

export default SpotifyCurrent;
