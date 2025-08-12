import React from "react";

function Intro(){
    return(
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <img className="rounded-full w-40 md:w-60 lg:w-65" 
                alt="gif" 
                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZm01YjMwcWluN2liaTJreGY4OWFiNTkzNmo5N2Z4N29hb2F3emNvcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rhZr8u3cvxe0ksf1ej/giphy.gif"/>

            <h1 className="text-3xl md:text-4xl lg:text-5xl dark:text-white md:text-4xl mb-1 md:mb-3 font-bold">Eric Hansson</h1>

            <p className="text-base md:mb-2">Former NCAA I&II Athlete, College Graduate</p>

            <p className="text-sm w-100 md:w-120 lg:w-150 m-2 md:mb-3">
            Hello there! My name is Eric, and I'm a senior at Lindenwood University studying in Computer Science.
            I work as a Lead Intern for Lindenwood's Baseball Data Science Team. During the time at Lindenwood I have 
            been a D1 student athlete in Swimming & Diving. During the time as an athlete I learned the importance of 
            time managment, language barriers, and teamwork. Currently I am looking for internship or a entry level job in 
            the field of Software Engineering.</p>

        </div>   
    )
}

export default Intro;
