import React from "react";
import PortfolioItem from "./PortfolioItem";
import portfolio from "../data/portfolio"

function Portfolio(){
    return(
        <div className="flex flex-col justify-center pt-8">
            <h1 className="text-xl font-bold">Projects</h1>
            <div className="flex flex-col md:flex-row items-center justify-center pt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {portfolio.map(project => (
                        <PortfolioItem
                            title={project.title}
                            imgUrl={project.imgUrl}
                            stack={project.stack}
                            link={project.link}
                        />
                    ))}     
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
