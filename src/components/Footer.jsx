import React from "react";

function Footer(){
    return(
        <div >
           <div className="py-5 text-center">
                <p className="text-sm mt-2 opacity-50">
                    &copy; {new Date().getFullYear()} Eric Hansson. All rights reserved
                </p>
           </div>
        </div>
    )
}

export default Footer;
