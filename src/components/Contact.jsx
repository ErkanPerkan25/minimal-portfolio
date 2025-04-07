import React from "react";

function Contact(){
    return (
        <div className="flex flex-col items-center justify-center pt-5">
            <h2>Want to get in contact? Send me an email.</h2>
            <form action="https://getform.io/f/9cd7a7fa-4a01-4677-92ab-89e2d68829ae" method="POST"
                className="grid grid-cols-1 w-125 pt-1">
                <input
                    name="name"
                    className="w-full h-12 border-1 rounded-md mt-3 p-1"
                    type="text"
                    placeholder="Name" 
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email" 
                    className="w-full h-12 border-1 rounded-md mt-3 p-1"
                />
                <textarea
                    name="message"
                    rows="10"
                    placeholder="Message"
                    className="w-full border-1 rounded-md mt-3 p-1"
                />
            
                <button type="submit" 
                    className="w-max rounded-md p-2 mt-5 text-white bg-linear-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white">
                    Work with me
                </button>
            </form>
        </div>
    )
}

export default Contact;
