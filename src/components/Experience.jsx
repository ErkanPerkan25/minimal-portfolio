import React from "react";
import experience from "../data/experience";
import ExperienceItem from "./ExperienceItem";

function Experience(){
    return(
        <div className="flex flex-col pt-20">
            <h1 className="text-lg md:text-xl font-bold">Professional Experience</h1>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="grid grid-cols-1 m-2">
                    {experience.map(item => (
                        <ExperienceItem
                            title={item.title}
                            company={item.company}
                            desc={item.desc}
                            location={item.location}
                            time={item.time}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience;
