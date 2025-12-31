import './Services.css';

export default function Services() {
    const services = [
        {
            icon: '🚀',
            title: 'Веб-разработка',
            description: 'Современные веб-приложения на React, Vue и других технологиях'
        },
        {
            icon: '📱',
            title: 'Мобильные приложения',
            description: 'Нативные и кроссплатформенные решения для iOS и Android'
        },
        {
            icon: '🎨',
            title: 'UI/UX Дизайн',
            description: 'Создание интуитивных и красивых интерфейсов'
        },
        {
            icon: '⚡',
            title: 'Оптимизация',
            description: 'Повышение производительности и скорости загрузки'
        },
        {
            icon: '🔒',
            title: 'Безопасность',
            description: 'Защита данных и обеспечение безопасности приложений'
        },
        {
            icon: '📊',
            title: 'Аналитика',
            description: 'Интеграция систем аналитики и отслеживания метрик'
        }
    ];

    return (
        <section id='services' className='services'>
            <div className='services-container'>
                <h2 className='section-title'>Наши услуги</h2>
                <p className='section-subtitle'>Комплексные решения для вашего бизнеса</p>
                <div className='services-grid'>
                    {services.map((service, index) => (
                        <div key={index} className='service-card' style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className='service-icon'>{service.icon}</div>
                            <h3 className='service-title'>{service.title}</h3>
                            <p className='service-description'>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


