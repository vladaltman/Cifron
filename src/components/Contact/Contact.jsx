import './Contact.css';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь будет логика отправки формы
        console.log('Form submitted:', formData);
        alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id='contact' className='contact'>
            <div className='contact-container'>
                <h2 className='section-title'>Свяжитесь с нами</h2>
                <p className='section-subtitle'>Готовы начать проект? Давайте обсудим!</p>
                <div className='contact-content'>
                    <div className='contact-info'>
                        <div className='contact-item'>
                            <div className='contact-icon'>📧</div>
                            <div>
                                <h3>Email</h3>
                                <p>hello@portfolio.com</p>
                            </div>
                        </div>
                        <div className='contact-item'>
                            <div className='contact-icon'>📱</div>
                            <div>
                                <h3>Телефон</h3>
                                <p>+7 (999) 123-45-67</p>
                            </div>
                        </div>
                        <div className='contact-item'>
                            <div className='contact-icon'>📍</div>
                            <div>
                                <h3>Адрес</h3>
                                <p>Москва, Россия</p>
                            </div>
                        </div>
                    </div>
                    <form className='contact-form' onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <input
                                type='text'
                                name='name'
                                placeholder='Ваше имя'
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type='email'
                                name='email'
                                placeholder='Email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <textarea
                                name='message'
                                placeholder='Сообщение'
                                rows='5'
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type='submit' className='btn btn-primary btn-submit'>
                            Отправить сообщение
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}


