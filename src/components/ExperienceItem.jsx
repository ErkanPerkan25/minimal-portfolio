import React from "react";

function ExperienceItem({title, company, desc, location, time}){
    return(
        <li className="w-100 sm:w-140 md:w-160 lg:w-240 lg:w-70 m-3 mx-auto">
            <div>
                <h3 className="font-bold">{title}</h3>
            </div>
            
            <div className="ml-5">
                <div className="">
                    <p>{company}, {location}</p>
                    <p className="italic">{time}</p>
                </div>

                <div>
                    <ul className="list-disc text-sm md:text-md lg:text-lg">
                        {desc?.map((item, index) =>(
                            <li key={index} className="text-sm mg:text-md lg:text-lg m-1">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </li>
    )
}

export default ExperienceItem;
