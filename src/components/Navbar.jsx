
function Navbar({handleTheme}){
    return(
        <nav className='w-max py-8 ml-auto mr-auto'>
           <div className='flex items-center justify-between'> 
                <div className="sm:hidden">
                    <div className="flex inline-flex">
                        <div> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className='flex items-center space-x-1'>
                    <Link 
                        className='px-3 py-2 transition-colors relative text-gray dark:text-white'
                        to="/"
                    >Home</Link> | {" "}

                    <Link 
                        className='px-3 py-2 transition-colors relative text-gray dark:text-white'
                        to="/about"
                    >About</Link> | {" "}


                    <Link 
                        className='px-3 py-2 transition-colors relative text-gray dark:text-white'
                        to="/projects"
                    >Projects</Link>| {" "}
                    
                    <Link 
                        className='px-3 py-2 transition-colors relative text-gray dark:text-white'
                        to="/resume"
                    >Resume</Link> | {" "}
                    
                    <Link 
                        className='px-3 py-2 transition-colors relative text-gray dark:text-white'
                        to="/contact"
                    >Contact</Link>


                </div>

            

                
                <button
                    type="button"
                    onClick={handleTheme}
                    className="fixed p-2 z-10 right-20 top-4 bg-violet-300 dark:bg-orange-300 text-lg rounded-md"
                >
                    {theme === "dark" ? sun : moon}
                </button>
            </div>
        </nav>
    )

}

export default Navbar; 
