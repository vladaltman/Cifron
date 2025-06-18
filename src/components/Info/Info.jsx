import './Info.css';
import x from '../../assets/x.svg';
import { useState } from 'react';

export default function Info() {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            <div className='info' onClick={handleClick}>
                INFO
            </div>
            <Popup isVisible={isVisible} handleClick={handleClick} />
        </>
    );
}

function Popup({ handleClick, isVisible }) {
    return (
        <div className={`popup ${isVisible ? 'visible' : ''}`} onClick={handleClick}>
            <div className={`popup-area ${isVisible ? 'visible' : ''}`} onClick={e => {e.stopPropagation()}}>
                <span onClick={handleClick}><img src={x} alt='Close' /></span>
                <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    In accusantium, aliquid ab doloribus quo possimus minus dolorem.
                    Sequi explicabo quidem rem veniam rerum itaque consectetur accusamus,
                    impedit molestiae ut enim! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    In accusantium, aliquid ab doloribus quo possimus minus dolorem. Sequi explicabo quidem
                    rem veniam rerum itaque consectetur accusamus, impedit molestiae ut enim! Lorem ipsum
                    dolor sit, amet consectetur adipisicing elit. In accusantium, aliquid ab doloribus quo 
                    possimus minus dolorem. Sequi explicabo quidem rem veniam rerum itaque consectetur 
                    accusamus, impedit molestiae ut enim! Lorem ipsum dolor sit, amet consectetur adipisicing 
                    elit. In accusantium, aliquid ab doloribus quo possimus minus dolorem. Sequi explicabo 
                    quidem rem veniam rerum itaque consectetur accusamus, impedit molestiae ut enim!
                </span>
            </div>
        </div>
    );
}