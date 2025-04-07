import React from "react";
import experience from "../data/experience";
import ExperienceItem from "./ExperienceItem";

function Experience(){
    return(
        <div className="flex flex-col md:flex-row items-center justify-center pt-20">
            <div className="grid grid-cols-1">
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
    )
}

export default Experience;
