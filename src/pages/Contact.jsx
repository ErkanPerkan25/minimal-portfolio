import ContactForm from "../components/ContactForm.jsx"

function Contact(){
    return(
        <div>
            <div className="mx-auto">
                <img className="rounded-xl h-40: md:h-60 lg:h-65 w-40 md:w-60 lg:w-65 object-cover object-top mb-8 mx-auto" 
                    alt="profile picture" 
                    src="assets/junior_year_photo_swimming.png"
                />
            </div>
            <div className="animate-fade-in-up delay-300">
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact;
