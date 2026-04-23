import { useEffect } from "react";
function SpotifyTopChart({token}){
    useEffect(() =>{
        const getTopList = async() =>{
            await fetch("/api/top_list")
                .then(response => response.json())
                .then(data =>{
                })
                .catch(error =>{
                    throw error;
                })
        }

        getTopList();

        
        const script = document.createElement("script");
        script.src = "https://open.spotify.com/embed/iframe-api/v1"
        script.async = true;

        document.body.appendChild(script);
        
        window.onSpotifyIframeApiReady = (IFrameAPI) =>{
            const element = document.getElementById("embed-iframe");
            const options = {
                uri: ""
            };
            const callback = (EmbedController) =>{};
            IFrameAPI.createController(element, options, callback);
        }
        
        //const playerScript = document.createElement("script");
        //playerScript.src = "https://sdk.scdn.co/spotify-player.js";
        //playerScript.async = true;

        //document.body.appendChild(playerScript);
        
        
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

export default SpotifyTopChart;
