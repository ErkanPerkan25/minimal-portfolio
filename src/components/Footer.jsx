import React from "react";

function Footer(){
    return(
        <div>
            <div className="w-100 flex items-center mx-auto">
                <a href="https://github.com/ErkanPerkan25"><img className="w-15 m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" /></a>
                <a href="https://www.linkedin.com/in/eric-hansson-609a49225/"><img className="w-15 m-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" /></a>
              
            </div>
            <div className="py-5 text-center">
                <p className="text-sm mt-2 opacity-50">
                    &copy; {new Date().getFullYear()} Eric Hansson. All rights reserved
                </p>
            </div>
        </div>
    )
}

export default Footer;
