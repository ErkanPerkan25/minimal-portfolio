import { Link } from "react-router-dom";

function Header(){
    return(
        <header className=" m-1">
            <div className="">
                <div className="w-max animate-fade-in-up mx-auto">
                    <h1 className="mx-2 text-2xl text-center mx-auto dark:border-black animate-typing overflow-hidden whitespace-nowrap border-r-2">Hello, Eric here</h1>
                </div>

                <div className="text-wrap my-5 mx-auto animate-fade-in-up delay-150">
                    <p className="text-center">I'm a software developer, swim coach, and outdoorsman.</p>
                    <p className="text-center">Here you will find more about who I am and what I do.</p>
                </div>

                <div className="w-max flex flex-col md:flex-row gap-5 animate-fade-in-up mx-auto my-auto">
                    <div className="flex flex-row w-80 md:w-100 animate-fade-in-up animate-fade-in-up delay 450">
                        <img 
                            src="assets/eric_in_the_woods(2).jpg" 
                            className="w-full rounded border-zinc-400 rounded-md mask-b-from-85% mask-b-to-100% mask-t-from-85% mask-t-to-100% mask-l-from-85% mask-l-to-100% mask-r-from-85% mask-r-to-100%"
                        />
                    </div>

                </div>
            </div>

            <div className="m-5 animate-fade-in-up">
                <p className="text-center">
                    I build scalable web applications and data-driven solutions that solve real-world problems. Also
                    software solutions which focuses on helping or improving peoples lives.
                </p>

                <p>
                </p>

                <div className="w-max mx-auto m-5 my-10">
                    <Link to="/contact" className="text-xl bg-black text-white dark:bg-white dark:text-black p-2 rounded-md" >Contact me</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
