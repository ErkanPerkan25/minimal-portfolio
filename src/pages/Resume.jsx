import Experience from "../components/Experience";
import ResumeInfo from "../components/ResumeInfo";
import Skills from "../components/Skills";

function Resume(){
    return(
        <div className="">
            <div className="mb-5 mx-auto">
                <h1 className="text-center mx-auto text-3xl text-bold">eric hansson</h1>
            </div>

            <div className="mb-10">
                <ResumeInfo />
            </div>

            <div className="mb-12">
                <Skills />
            </div>
            <div className="mb-12">
                <Experience />
            </div>
        </div>
    )
}

export default Resume;
