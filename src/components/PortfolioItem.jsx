import React from "react";
import Portfolio from "./Portfolio";

function PortfolioItem ({title, imgUrl, techStack, link}){
    return(
        <div>
            <img src={imgUrl} />
            <div>
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default Portfolio;
