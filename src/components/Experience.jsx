import experience from "../data/experience";
import ExperienceItem from "./ExperienceItem";

function Experience(){
    return(
        <div className="flex flex-col">
            <h1 className="text-lg md:text-xl font-bold">Professional Experience</h1>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="">
                    <ul className="flex flex-col items-center list-disc">
                    {experience.map((item,index) => (
                        <ExperienceItem
                            key={index}
                            title={item.title}
                            company={item.company}
                            desc={item.desc}
                            location={item.location}
                            time={item.time}
                        />
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience;
