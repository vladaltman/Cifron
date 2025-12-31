import './Header.css';
import { useSection } from '../Content/Content';

export default function Header() {
    const context = useSection();
    const setActiveSection = context ? context.setActiveSection : () => {};
    
    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className='header'>
            <div className='header-container'>
                <div className='logo' onClick={() => scrollToSection('home')}>
                    <span className='logo-text'>Cifron</span>
                </div>
                <nav className='nav'>
                    <button onClick={() => scrollToSection('home')} className='nav-link'>Главная</button>
                    <button onClick={() => scrollToSection('services')} className='nav-link'>Услуги</button>
                    <button onClick={() => scrollToSection('about')} className='nav-link'>О нас</button>
                    <button onClick={() => scrollToSection('contact')} className='nav-link nav-link-cta'>Связаться</button>
                </nav>
            </div>
        </header>
    );
}
