import { useEffect } from "react";

function SpotifyCurrent(){
    useEffect(() =>{
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
        
        // Clean up so it does not get added two times or more
        return () =>{
            document.body.removeChild(script);
        }
    }, []);

    return(
        <div>
            <div id="embed-iframe">
            </div>
        </div>
    )
}

export default SpotifyCurrent;
