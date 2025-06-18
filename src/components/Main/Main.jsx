import './Main.css';
import line1 from '../../assets/1.svg';
import line2 from '../../assets/2.svg';
import line3 from '../../assets/3.svg';
import line4 from '../../assets/4.svg';
import line5 from '../../assets/5.svg';

export default function Main() {
    return (
        <div className='main'>
            <DottedLine src={line1} top='90px' left='25px' />
            <DottedLine src={line2} top='320px' left='258px' />
            <DottedLine src={line3} top='190px' left='457px' />
            <DottedLine src={line4} top='60px' left='580px' />
            <DottedLine src={line5} top='112px' left='885px' />
            <Element number='1' top='0px' left='0px' />
            <Element number='2' top='246px' left='77px' />
            <Element number='3' top='343px' left='427px' />
            <Element number='4' top='113px' left='355px' />
            <Element number='5' top='41px' left='839px' />
            <Element number='6' top='197px' left='700px' />
        </div>
    );
}

export function Element({ number, top, left, mobile }) {
    return (
        <div className='element'
            style={{
                top: `${top}`,
                left: `${left}`
            }}
        >
            <div className='text-content'>
                <div className='number'>
                    {number}
                </div>
                <div className='text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
            </div>
            <svg viewBox="0 0 44 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_2177_138)">
                <path d="M21.5766 11C17.9444 11 15 13.9444 15 17.5766V40.8302C15 41.1521 15.4258 41.2667 15.5874 40.9884L27.2639 20.8789C29.8096 16.4945 26.6464 11 21.5766 11Z" fill="white"/>
                </g>
                <defs>
                <filter id="filter0_d_2177_138" x="0" y="0" width="43.163" height="60.1457" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="7.5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2177_138"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2177_138" result="shape"/>
                </filter>
                </defs>
            </svg>
        </div>
    );
}

function DottedLine({ src, top, left }) {
    return (
        <img src={src} style={{
            position: 'absolute',
            top: `${top}`,
            left: `${left}`,
            userSelect: 'none'
        }} />
    );
}