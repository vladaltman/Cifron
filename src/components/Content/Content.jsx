import { useState, useEffect, createContext, useContext } from 'react';
import './Content.css';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import About from '../About/About';
import Contact from '../Contact/Contact';
import HeaderMobile from '../Header/HeaderMobile';

const SectionContext = createContext();

export const useSection = () => useContext(SectionContext);

export default function Content() {
    const [screenSize, setScreenSize] = useState(window.innerWidth <= 768 ? 'mobile' : 'desktop');
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth <= 768 ? 'mobile' : 'desktop');
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <SectionContext.Provider value={{ activeSection, setActiveSection }}>
            <div className='content'>
                {screenSize === 'desktop' ? <Header /> : <HeaderMobile />}
                <Hero />
                <Services />
                <About />
                <Contact />
            </div>
        </SectionContext.Provider>
    );
}
