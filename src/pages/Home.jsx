import Intro from "../components/Intro";

function Home(){
    return (
        <div className="flex flex-col min-h-screen">
            <div className="w-max">
                <h1 className="w-auto animate-typing overflow-hidden whitespace-nowrap border-r-2">Hello there</h1>
            </div>
            <div>
                <p>This me the weird guy</p>
            </div>
        </div>
    ) 
}

export default Home;
