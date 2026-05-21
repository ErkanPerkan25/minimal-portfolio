import ProjectList from "../components/ProjectList";

function Projects(){
    return(
        <div className="">
            <h1 className="text-center text-2xl font-bold animate-fade-in-up">These are project I have made or worked on:</h1>
            <div className="animate-fade-in-up delay-200">
                <ProjectList />
            </div>
        </div>
    )
}

export default Projects;
