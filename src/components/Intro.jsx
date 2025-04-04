import React from "react";
import profileImg from "../assets/profile_pic.jpg"

function Intro(){
   return(
    <div className="flex items-center justify-center flex-col text-center">
        <img src={profileImg} alt="profile_pic" className="w-sm h-sm rounded-full"/>
        <h1>Eric Hansson</h1>
        <p></p>
    </div>   
   )
}

export default Intro;
