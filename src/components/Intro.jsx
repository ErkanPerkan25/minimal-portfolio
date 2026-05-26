import React from "react";

function Intro(){
    return(
        <div className="flex items-center justify-center flex-col p-2 animate-fade-in-up">

            <div className="text-sm md:text-md lg:text-lg m-1">
                <p className="text-center">
                    I'm man who loves to always learn and understand things. From software and complex problems to the outdoors.
                </p>
            
                <br />

                <p className="text-center">
                    In tech I work to build applications that solves issues help others or finding solutions to problem that occur to me.
                    I love to work in low-embedded software, but I have experience in both web applications to desktop.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row m-1 lg:gap-10">
                <img className="rounded-2xl h-40: md:h-60 lg:h-65 w-40 md:w-60 lg:w-65 object-cover mb-8 transition transform-gpu hover:ease-in hover:scale-125
                    " 
                    alt="profile picture" 
                    src="assets/trail_in_missouri.jpg"
                />
                <img className="rounded-xl h-40: md:h-60 lg:h-65 w-40 md:w-60 lg:w-65 object-cover mb-8 transition transform-gpu hover:ease-in hover:scale-125
                    " 
                    alt="profile picture" 
                    src="assets/profile_pic2.jpg"
                />
                <img className="rounded-xl h-40: md:h-60 lg:h-65 w-40 md:w-60 lg:w-65 object-cover object-top mb-8 transition transform-gpu hover:ease-in hover:scale-125
                    " 
                    alt="profile picture" 
                    src="assets/eric_with_bass.jpg"
                />
            </div>
            
            <div>
                <p className="text-sm md:text-md lg:text-lg w-100 md:w-150 lg:w-200 m-2 md:mb-3">
                    While I'm not working on tech I like to spend my time outdoors fishing, going on trails, and being with family.
                    I have interest in deep philosophical books and their meanings, trying to learn and understand more about out
                    past and the present.
                </p>
                <br />
                <hr/>
                <br />
            </div>

            <div className="flex flex-row">
                <div className="w-[50%] flex-col m-1 gap-5 float-left">
                    <img className="rounded-xl h-40: md:h-60 lg:h-65 w-40 md:w-60 lg:w-65 mx-auto object-cover object-top mb-8 transition transform-gpu hover:ease-in hover:scale-125" 
                        alt="profile picture" 
                        src="assets/junior_year_swimming_vs_mckendre.jpg"
                    />
                </div>
                <div className="w-[50%] float-right">
                    <p className="text-wrap text-sm md:text-md lg:text-lg m-2 md:mb-3">
                    A big part of my life has been dedicated to the sport of swimming.
                    I was able purse my dream becoming a NCAA Student Athlete in Division I & II in Swimming & Diving
                    at Lindenwood University. While pursuing my degree Computer Science.
                    </p>
                </div>
            </div>
        </div>   
    )
}

export default Intro;
