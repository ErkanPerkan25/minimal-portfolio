import React from "react";
import ProjectItem from "./ProjectItem.jsx";
import portfolio from "../data/portfolio"

function ProjectList(){
    return(
        <div className="flex flex-col justify-center pt-8">
            <div className="flex flex-col md:flex-row items-center justify-center pt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {portfolio.map(project => (
                        <ProjectItem
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

export default ProjectList;
