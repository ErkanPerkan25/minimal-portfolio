import { useEffect, useState } from "react";
import SpotifyCurrent from "../components/SpotifyCurrent";
import SkeletonLoader from "../components/SkeletonLoader";
import SpotifyTopChart from "../components/SpotifyTopChart";


function Home(){
    const [token, setToken] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    useEffect(() =>{
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
        
    }, [token]);

    return (
        <div className="flex flex-col min-h-screen">
            <div className="w-max animate-fade-in-up">
                <h1 className="w-auto text-2xl dark:border-black animate-typing overflow-hidden whitespace-nowrap border-r-2">Hello, Eric here</h1>
            </div>
            <div className="my-5 animate-fade-in-up delay-150">
                <p>Just an average CS graduate struggling to land a Software Engineering job, here is my journey.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-5 animate-fade-in-up">
                <div className="w-100 animate-fade-in-up animate-fade-in-up delay 450">
                    <img 
                        src="assets/eric_in_the_woods(2).jpg" 
                        className="w-full rounded-lg border-zinc-400"
                    />
                </div>

                <div className="my-auto animate-fade-in-up delay-600">
                    {!isAuthenticated ? "" : 
                        <SpotifyCurrent />
                    }
                </div>
            </div>

            <div >
            </div>
        </div>
    ) 
}

export default Home;
