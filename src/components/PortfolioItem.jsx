import React from "react";
import Portfolio from "./Portfolio";

function PortfolioItem ({title, imgUrl, techStack, link}){
    return(
        <div>
            <a href={link}> <img src={imgUrl} /> </a>
            <div>
                <h3>{title}</h3>
                <p>{techStack}</p>
            </div>
        </div>
    )
}

export default Portfolio;
