import React, {useState} from 'react';
import hero from '../hero.svg';
import { Link, useHistory } from 'react-router-dom';

const Main = () => {
    
    const [joined , setJoined] = useState("");
    const history = useHistory(); 
    
    
    return (
        <React.Fragment>
            <header>
                <img src={hero} alt="hero" />
                <div>
                    <h1>We build &amp; design <br /> web applications.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Link to="/contact">Get In Touch</Link>
                </div>
            </header>
            <main>
                <section className="services">
                    <h2>Why we should work together?</h2>
                </section>
            </main>
        </React.Fragment>
    )
}
export default Main;