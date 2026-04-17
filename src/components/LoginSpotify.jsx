import { apiUrl } from "../api/apiUrl";

function LoginSpotify(){
    return(
        <div>
            <header className="">
                <a className="" href={`/api/login`}>
                    Login in with Spotify
                </a>
            </header>
        </div>
    )
}

export default LoginSpotify;
