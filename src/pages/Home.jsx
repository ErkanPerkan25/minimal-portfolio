import { useEffect, useState } from "react";
import Spotify from "../components/Spotify";
import LoginSpotify from "../components/LoginSpotify";
import SpotifyCurrent from "../components/SpotifyCurrent";
import { Navigate, useNavigate } from "react-router-dom";
import SpotifyTopChart from "../components/SpotifyTopChart";

function Home(){
    const [token, setToken] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(() =>{
        async function getToken(){
            const response = await fetch(`/api/token`);
            const json = await response.json();
            setToken(json.access_token);
        }
        
        const login = async() =>{
            await fetch("/api/login", {
                    method: "GET",
                })
                .catch(error =>{
                    throw error;
                })
        }

        if(token !== ""){
            getToken();
        }
        else{
            //login();
            getToken();
        }

    }, [token]);

    return (
        <div className="flex flex-col min-h-screen">
            <div className="w-max">
                <h1 className="w-auto text-2xl dark:border-black animate-typing overflow-hidden whitespace-nowrap border-r-2">Hello, Eric here</h1>
            </div>
            <div className="my-5">
                <p>Just an average CS graduate struggling to land a Software Engineering job, here is my journey.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
                <div>
                    <img 
                        src="assets/eric_in_the_woods(2).jpg" 
                        className="w-100 rounded-lg border-5 border-zinc-400"
                    />
                </div>

                <div>
                    {(token === '') ? <LoginSpotify /> : <SpotifyCurrent token={token}/> && <SpotifyTopChart token={token}/>}
                </div>

            </div>
        </div>
    ) 
}

export default Home;
