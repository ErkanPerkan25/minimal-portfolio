import React from "react";

function ProjectItem ({title, imgUrl, stack, link}){
    return (
        <div className="border-2 shadow-xl  border-stone-900 dark:border-white rounded-md overflow-hidden transition transform-gpu hover:ease-in hover:scale-110">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={imgUrl} 
                alt="portfolio"
                className="w-full h-36 md:h-48 object-cover cursor-pointer"/>
                <div className="w-full h-full p-4 bg-white dark:bg-stone-700 border-t-2 dark:border-white">
                    <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">{title}</h3>
                    <p className="flex flex-wrap gap-2 items-center justify-start text-sm md:text-md lg:text-lg dark:text-white py-auto">
                        {stack.map(item => (
                            <span className="inline-block px-2 py-1 border-2 border-black dark:border-white shadow-xl rounded-md ">
                                {item} 
                            </span>
                        ))}
                    </p>
                </div>
            </a>
        </div>
    )
}

export default ProjectItem;
