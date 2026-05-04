import Intro from "../components/Intro";
import Experience from "../components/Experience.jsx";

function About(){
    return(
        <div className="">
            <h1 className="text-2xl font-bold mb-8">Little bit about me:</h1>
            <div>
                <Intro />
            </div>
            <br/>
            <hr className="w-full" />
            <br/>
            <div>
                <Experience />
            </div>
        </div>
    )

}

export default About;
