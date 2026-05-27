import { useState, useEffect, useRef} from 'react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import './tailwind.css'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Hamburger from 'hamburger-react'
import { routes } from './routes'

function App() {
    const [theme, setTheme] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);


    useEffect(() =>{
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setTheme("dark");
        }else{
            setTheme("light");
        }
    }, []);

    const handleTheme = () =>{
        setTheme(theme === "dark" ? "light" : "dark");
    }

    useEffect(()=>{
        if(theme === "dark") {
            document.documentElement.classList.add("dark");
        }
        else{
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);


    const sun =(
        <svg xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth="1.5" 
        stroke="currentColor" 
        className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" 
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
    );

    const moon = (
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" viewBox="0 0 24 24" 
        strokeWidth="1.5" 
        stroke="white" 
        className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" 
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
    );


    return (
        <div className='w-full bg-stone-300 dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter transition-colors duration-400 ease-in'>
            <BrowserRouter>
                <div className='flex flex-col min-h-screen'>
                    <header className='w-full'>
                        <nav className='w-max py-8 ml-auto mr-auto'>
                            <div className="flex inline-flex">
                                <div ref={ref} className='sm:hidden'> 
                                    <Hamburger toggled={isOpen} size={20} toggle={setIsOpen}/>
                                    {isOpen && (
                                        <div className='flex flex-col fixed left-0 shadow-4xl right-0 top-[5rem] z-50 p-0 bg-stone-900 border-b border-b-white/20'>
                                            <ul className='grid gap-2'>
                                                {routes.map((item, index) =>(
                                                    <li className='w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-stone-800 via-stone-900 to-stone-700'>
                                                        <Link
                                                            key={index}
                                                            className='flex items-center justify-between p-5 rounded-xl bg-stone-950'
                                                            to={item.href}
                                                            onClick={() => setIsOpen((prev) => !prev)} 
                                                        >
                                                        {item.title}
                                                        </Link> 
                                                    </li>
                                                ))}         
                                            </ul>
                                            
                                            <button
                                                type="button"
                                                onClick={handleTheme}
                                                className="w-13 h-13 p-4 mt-5 mb-5 mx-auto bg-violet-300 dark:bg-orange-300 text-lg rounded-md"
                                            >
                                                {theme === "dark" ? sun : moon}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                           <div className='hidden sm:flex sm:items-center justify-between'> 
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
                    </header>

                    <main className='flex md:w-150 lg:w-275 mx-auto my-2'>
                        <div className='w-90 md:w-150 lg:w-250 mx-auto text-lg'>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/projects" element={<Projects />} /> 
                                <Route path='/resume' element={<Resume />} />
                                <Route path="/contact" element={<Contact /> } />
                                <Route path='/callback' element={<Home />} />
                            </Routes>
                        </div>
                    </main>
                </div>
            </BrowserRouter>

            <Footer />
        </div>
    )
}

export default App;
