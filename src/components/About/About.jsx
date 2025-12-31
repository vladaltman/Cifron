import './About.css';

export default function About() {
    return (
        <section id='about' className='about'>
            <div className='about-container'>
                <div className='about-content'>
                    <h2 className='section-title'>О нас</h2>
                    <div className='about-text'>
                        <p>
                            Мы — команда профессионалов, специализирующаяся на создании 
                            современных цифровых решений. Наш опыт охватывает разработку 
                            веб-приложений, мобильных приложений и дизайн интерфейсов.
                        </p>
                        <p>
                            Мы используем передовые технологии и лучшие практики индустрии, 
                            чтобы создавать продукты, которые не только красивы, но и функциональны, 
                            безопасны и масштабируемы.
                        </p>
                    </div>
                    <div className='about-stats'>
                        <div className='stat-item'>
                            <div className='stat-number'>100+</div>
                            <div className='stat-label'>Проектов</div>
                        </div>
                        <div className='stat-item'>
                            <div className='stat-number'>50+</div>
                            <div className='stat-label'>Клиентов</div>
                        </div>
                        <div className='stat-item'>
                            <div className='stat-number'>5+</div>
                            <div className='stat-label'>Лет опыта</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


