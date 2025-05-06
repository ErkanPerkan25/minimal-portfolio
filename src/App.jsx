import { useState, useEffect} from 'react'
import './tailwind.css'
import Intro from "./components/Intro"
import Portfolio from "./components/Portfolio"
import Experience from "./components/Experience"
import Contact from './components/Contact'
import Footer from './components/Footer'
import { document } from 'postcss'

function App() {
    const [theme, setTheme] = useState(null);

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
        stroke-width="1.5" 
        stroke="currentColor" 
        class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" 
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
    );

    const moon = (
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" viewBox="0 0 24 24" 
        stroke-width="1.5" 
        stroke="white" 
        class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" 
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
    );


    return (
    <div className='App'>
        <button
            type="button"
            onClick={handleTheme}
            className="fixed p-2 z-10 right-20 top-4 bg-violet-300 dark:bg-orange-300 text-lg rounded-md"
        >
            {theme === "dark" ? sun : moon}
        </button>
        <div className="bg-white dark:bg-stone-900 text-stone-900 dark:bg-stone-300 min-h-screen font-inter">
            <div className='max-w-5xl w-11/12 mx-auto'>
                <Intro />
                <Portfolio />
                <Experience />
                <Contact />
                <Footer />
            </div>
        </div>
    </div>
    )
}

export default App;
