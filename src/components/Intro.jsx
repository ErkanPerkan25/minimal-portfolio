import React from "react";

function Intro(){
    return(
        <div className="flex items-center justify-center flex-col p-2">
            <img className="rounded-xl h-40: md:h-60 lg:h-65 w-40 md:w-60 lg:w-65 object-cover mb-8 transition transform-gpu hover:ease-in hover:scale-125" 
                alt="profile picture" 
                src="assets/profile_pic2.jpg"
            />

            <p className="text-sm md:text-md lg:text-lg w-100 md:w-150 lg:w-200 m-2 md:mb-3">
                I'm a a guy who like softwares, books, the outdoor, and family.
            </p>

            <p className="text-sm md:text-md lg:text-lg w-100 md:w-150 lg:w-200 m-2 md:mb-3">
            Used to be a NCAA Athlete I & II in Swimming & Diving, and 
            I graduated with a B.S. in Computer Science and love working with software and hardware.
            </p>
        </div>   
    )
}

export default Intro;
