import { useState, useEffect } from 'react';
import './Content.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Info from '../Info/Info';
import HeaderMobile from '../Header/HeaderMobile';
import MainMobile from '../Main/MainMobile';

export default function Content() {
    const [screenSize, setScreenSize] = useState(window.innerWidth <= 399 ? 'mobile' : 'desktop');

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth <= 399 ? 'mobile' : 'desktop');
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='content'>
            {screenSize === 'desktop' && <Header />}
            {screenSize === 'mobile' && <HeaderMobile />}
            <div className='h1'>Loren Ipsum</div>
            {screenSize === 'desktop' && <Main />}
            {screenSize === 'mobile' && <MainMobile />}
            <Info />
        </div>
    );
}