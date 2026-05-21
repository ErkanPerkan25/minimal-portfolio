import Experience from "../components/Experience";
import ResumeInfo from "../components/ResumeInfo";
import Skills from "../components/Skills";

function Resume(){
    return(
        <div>
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
