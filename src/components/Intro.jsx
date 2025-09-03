import React from "react";

function Intro(){
    return(
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <img className="rounded-full h-40: md:h-60 lg:h-65 w-40 md:w-60 lg:w-65 object-cover mb-8" 
                alt="profile picture" 
                src="assets/profile_pic2.jpg"/>

            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl dark:text-white md:text-4xl mb-1 md:mb-3 font-bold">Eric Hansson</h1>

            <p className="text-base md:mb-2">Former NCAA Athlete I & II , Undergrad Graduate, Freelancer</p>

            <p className="text-sm md:text-md w-100 md:w-120 lg:w-150 m-2 md:mb-3">
            Hello there! My name is Eric, and I'm a recent graduate from Lindenwood University with a
            Bachelor of Science in Computer Science.
            During my time there I worked as a Project Leader for the Lindenwood's Baseball Data Science Team. 
            As well as being a D1 student athlete for the Lindenwood  in Swimming & Diving. 
            </p>
            <br/>
            <p className="text-sm md:text-md w-100 md:w-120 lg:w-150 m-2 md:mb-3">
            Being as a student athlete I learned the importance of time managment, language barriers, 
            and teamwork. I am currently a doing some freelancing work while looking for a entry level job in 
            the field of Software Engineering.</p>

        </div>   
    )
}

export default Intro;
