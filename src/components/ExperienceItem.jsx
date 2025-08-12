import React from "react";

function ExperienceItem({title, company, desc, location, time}){
    return(
        <div className="w-85 sm:w-100 md:w-120 lg:w-150 lg:w-70 m-3">
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
