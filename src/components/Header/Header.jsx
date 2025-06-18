import './Header.css';

export default function Header() {
    return (
        <div className='header'>
            <div className='container-left'>
                <div className='logo'><span>Epc</span><span>Hunters</span></div>
                <div className='loren-ipsum'>
                    <div>Loren Ipsum</div>
                    <div>Loren Ipsum</div>
                    <div>Loren Ipsum</div>
                </div>
            </div>
            <div className='container-right'>
                <div>
                    <span>Loren Ipsum</span>
                    <span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.9912 0H12V6.0088H11.2489V1.28509L0.528117 12L0 11.4719L10.7149 0.7511H5.9912V0Z" fill="white"/>
                        </svg>
                    </span>
                </div>
                <div></div>
            </div>
        </div>
    );
}