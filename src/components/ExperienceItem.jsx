import React from "react";

function ExperienceItem({title, company, desc, location, time}){
    return(
        <li className="w-85 sm:w-100 md:w-120 lg:w-150 lg:w-70 m-3 mx-auto">
            <div>
                <h3 className="font-bold">{title}</h3>
            </div>
            
            <div className="ml-5">
                <div>
                    <p>{company}, {location}</p>
                    <p className="italic">{time}</p>
                </div>

                <div>
                    <ul className="list-disc text-sm">
                        {desc?.map((item, index) =>(
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </li>
    )
}

export default ExperienceItem;
