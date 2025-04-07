import React from "react";

function ExperienceItem({title, company, desc, location, time}){
    return(
        <div className="w-175 h:40 sm:h-60 md:h-75 p-4 overflow-hidden">
            <h3 className="font-bold">{title}</h3>
            <p>{company}, {location}</p>
            <p className="italic">{time}</p>
            <ul className="list-disc text-sm">
                {desc?.map((item) =>(
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ExperienceItem;
