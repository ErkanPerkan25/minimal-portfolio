import { useEffect, useState } from "react";
import SpotifyCurrent from "../components/SpotifyCurrent";
import SkeletonLoader from "../components/SkeletonLoader";
import SpotifyTopChart from "../components/SpotifyTopChart";
import Header from "../components/Header";


function Home(){
    const [token, setToken] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    useEffect(() =>{

        const script = document.createElement("script");
        script.src = "https://open.spotify.com/embed/iframe-api/v1"
        script.async = true;

        document.body.appendChild(script);

        const getToken = async() =>{
            const response = await fetch(`/api/token`);
            const json = await response.json();
            setToken(json.access_token);
        }

        const authCheck = async() =>{
            const response = await fetch("/api/auth/status");

            const { authenticated } = await response.json();
            
            if(!authenticated){
                window.location.href = "/api/login";
                setIsAuthenticated(false);
            }
            else{
                setIsAuthenticated(true);
                //getToken();
            }
        }

        authCheck();
        
        return () =>{
            document.body.removeChild(script);
        }
        
    }, [token]);

    return (
        <div className="flex flex-col min-h-screen">

            <Header />
            <div>
                <div className="mx-auto animate-fade-in-up delay-600">
                    {!isAuthenticated ? "" : 
                        <SpotifyCurrent />
                    }
                </div>
            </div>
        </div>
    ) 
}

export default Home;
