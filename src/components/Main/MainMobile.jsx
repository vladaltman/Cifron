import { useState } from 'react';
import './MainMobile.css';
import { Element } from './Main';
import back from '../../assets/back.svg';
import ahead from '../../assets/ahead.svg';

export default function MainMobile() {
    const [current, setCurrent] = useState(0);

    const slides = [1, 2, 3, 4, 5, 6];

    const showPrev = () => {
        setCurrent((prev) => ((prev - 1 + slides.length) % slides.length));
    };

    const showNext = () => {
        setCurrent((prev) => ((prev + 1) % slides.length));
    };

    return (
        <div className='main-mobile'>
            <div className='slider'>
                {slides.map((number, index) => (
                    <div key={number} className={`slide ${index === current ? 'active' : ''}`}>
                        <Element number={number} top='0px' left='0px' display='mobile' />
                    </div>
                ))}
            </div>
            <div className='buttons'><span onClick={showPrev}><img src={back} alt='back' />&ensp;loren ipsum</span><span onClick={showNext}>loren ipsum&ensp;<img src={ahead} alt='ahead' /></span></div>
        </div>
    );
}