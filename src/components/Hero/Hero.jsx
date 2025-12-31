import './Hero.css';

export default function Hero() {
    return (
        <section id='home' className='hero'>
            <div className='hero-container'>
                <div className='hero-content'>
                    <h1 className='hero-title'>
                        <span className='hero-title-line'>Создаём</span>
                        <span className='hero-title-line hero-title-accent'>цифровые решения</span>
                        <span className='hero-title-line'>будущего</span>
                    </h1>
                    <p className='hero-description'>
                        Инновационные веб-приложения и мобильные решения, 
                        которые помогают бизнесу расти и развиваться
                    </p>
                    <div className='hero-buttons'>
                        <button className='btn btn-primary'>Начать проект</button>
                        <button className='btn btn-secondary'>Узнать больше</button>
                    </div>
                </div>
                <div className='hero-visual'>
                    <div className='hero-card'>
                        <div className='card-glow'></div>
                    </div>
                </div>
            </div>
        </section>
    );
}


