import React from "react";

function Intro(){
    return(
        <div className="flex items-center justify-center flex-col p-2 animate-fade-in-up">
            <div className="flex flex-row m-1 gap-5">
                <img className="rounded-xl h-40: md:h-60 lg:h-65 w-40 md:w-60 lg:w-65 object-cover mb-8 transition transform-gpu hover:ease-in hover:scale-125" 
                    alt="profile picture" 
                    src="assets/trail_in_missouri.jpg"
                />
                <img className="rounded-xl h-40: md:h-60 lg:h-65 w-40 md:w-60 lg:w-65 object-cover mb-8 transition transform-gpu hover:ease-in hover:scale-125" 
                    alt="profile picture" 
                    src="assets/profile_pic2.jpg"
                />
                <img className="rounded-xl h-40: md:h-60 lg:h-65 w-40 md:w-60 lg:w-65 object-cover object-top mb-8 transition transform-gpu hover:ease-in hover:scale-125" 
                    alt="profile picture" 
                    src="assets/eric_with_bass.jpg"
                />
            </div>

            <p className="text-sm md:text-md lg:text-lg w-100 md:w-150 lg:w-200 m-2 md:mb-3">
                I'm just guy who likes to solve complex problems with software. On my freetime I like to be outdoors fishing and being with family.
            </p>

            <p className="text-sm md:text-md lg:text-lg w-100 md:w-150 lg:w-200 m-2 md:mb-3">
            Used to be a NCAA Athlete I & II in Swimming & Diving, and 
            I graduated with a B.S. in Computer Science from Lindenwood University.
            </p>
        </div>   
    )
}

export default Intro;
