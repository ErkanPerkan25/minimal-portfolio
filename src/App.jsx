import { useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route, Navigate, Link} from "react-router-dom"
import './tailwind.css'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Projects from './pages/Projects'
import Contact from './components/ContactForm'

function App() {
    const [theme, setTheme] = useState(null);
    const [token, setToken] = useState("");

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
        <div className='w-full bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter transition-colors duration-400 ease-in'>
            <BrowserRouter>
                <div className='flex flex-col min-h-screen'>
                    <header className='w-full backdrop-blur-sm'>
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
                                        to="/gear"
                                    >Gear</Link> | {" "}
                                    
                                    <Link 
                                        className='px-3 py-2 transition-colors relative text-gray dark:text-white'
                                        to="/contact"
                                    >Contact</Link>


                                    <div>
                                        <button />
                                        <ul>
                                            <li>
                                                <Link to="/" />
                                            </li>

                                        </ul>
                                    </div>
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

                    <main className='flex lg:w-275 mx-auto my-8'>
                        <div className='mx-auto text-lg'>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/projects" element={<Projects />} /> 
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
