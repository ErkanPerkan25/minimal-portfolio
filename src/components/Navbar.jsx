
function Navbar({handleTheme}){
    return(
        <nav className='w-max py-8 ml-auto mr-auto'>
           <div className='flex items-center justify-between'> 
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
