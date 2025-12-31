import './HeaderMobile.css';
import { useState } from 'react';
import { useSection } from '../Content/Content';

export default function HeaderMobile() {
    const [isOpen, setIsOpen] = useState(false);
    const context = useSection();
    const setActiveSection = context ? context.setActiveSection : () => {};

    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        setIsOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 70;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className='header-mobile'>
            <div className='header-mobile-container'>
                <div className='logo-mobile' onClick={() => scrollToSection('home')}>
                    Portfolio
                </div>
                <button 
                    className={`menu-toggle ${isOpen ? 'active' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <nav className={`mobile-nav ${isOpen ? 'open' : ''}`}>
                <button onClick={() => scrollToSection('home')} className='mobile-nav-link'>Главная</button>
                <button onClick={() => scrollToSection('services')} className='mobile-nav-link'>Услуги</button>
                <button onClick={() => scrollToSection('about')} className='mobile-nav-link'>О нас</button>
                <button onClick={() => scrollToSection('contact')} className='mobile-nav-link mobile-nav-cta'>Связаться</button>
            </nav>
            {isOpen && <div className='mobile-nav-overlay' onClick={() => setIsOpen(false)}></div>}
        </header>
    );
}
