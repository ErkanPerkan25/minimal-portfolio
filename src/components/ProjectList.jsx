import React, { useState } from "react";
import ProjectItem from "./ProjectItem.jsx";
import portfolio from "../data/portfolio"

function ProjectList(){
    const [time, setTime] = useState(300);
    return(
        <div className="flex flex-col justify-center pt-8">
            <div className="flex flex-col md:flex-row items-center justify-center pt-8">
                <div className="m-5 md:m-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {portfolio.map((project, index) => (
                        <ProjectItem
                            title={project.title}
                            imgUrl={project.imgUrl}
                            stack={project.stack}
                            link={project.link}
                            key={index}
                            className={`animate-fade-in-up delay-${time}`}
                        />
                    ))}     
                </div>
            </div>
        </div>
    )
}

export default ProjectList;
