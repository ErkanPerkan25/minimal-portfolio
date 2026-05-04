import { useEffect, useState } from "react";
function SpotifyTopChart({token}){
    const [topSongsUri, setTopSongsUri] = useState([]);

    useEffect(() =>{
        const getTopList = async() =>{
            await fetch("/api/top_list", {
                    method: "GET",
                    headers: {
                        "Content-Type": "Application/json",
                    } 
                })
                .then(response => {
                    if(!response.ok)
                        throw new Error(`HTTP error! status: ${response.status}`);

                    return response.json()
                })
                .then(data =>{
                    setTopSongsUri(data.top_song_uri);
                })
                .catch(error =>{
                    throw error;
                })
        }

        getTopList();

        const loadSpotifySongs = (IFrameAPI, uris) =>{
            uris.forEach((uri,i) => {
                const element = document.getElementById(`embed-iframe-${i}`);
                if(!element) return;

                const options = {
                    uri: uri,
                    width: 300,
                    height: 100,
                };
                const callback = (EmbedController) =>{
                    EmbedController.loadUri(uri);
                };

                IFrameAPI.createController(element, options, callback);
            });
        }
        
        const script = document.createElement("script");
        script.src = "https://open.spotify.com/embed/iframe-api/v1"
        script.async = true;

        document.body.appendChild(script);
        
        window.onSpotifyIframeApiReady = (IFrameAPI) =>{
            loadSpotifySongs(IFrameAPI, topSongsUri);
        }
        
        //const playerScript = document.createElement("script");
        //playerScript.src = "https://sdk.scdn.co/spotify-player.js";
        //playerScript.async = true;

        //document.body.appendChild(playerScript);
        
        
        // Clean up so it does not get added two times or more
        return () =>{
            document.body.removeChild(script);
        }

    }, [topSongsUri]);

    return(
        <div>
            <div className="flex flex-col">
                <div id="embed-iframe-0">
                </div>

                <div id="embed-iframe-1">
                </div>

                <div id="embed-iframe-2">
                </div>

                <div id="embed-iframe-3">
                </div>

                <div id="embed-iframe-4">
                </div>
            </div>
        </div>
    )
}

export default SpotifyTopChart;
