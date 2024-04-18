import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const SwiperSlider = () => {
    useEffect(() => {
        
        const swiper = new Swiper('.swiper-container', {
            loop: true, 
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev', 
            },
            pagination: {
                el: '.swiper-pagination', 
                clickable: true, 
            },
        });

      
        return () => {
            swiper.destroy();
        };
    }, []);

    return (
        <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide ">
                    <img className='rounded-lg ' src="https://imgur.com/SIwccDQ.png" alt="Slide 1" />
                </div>
                <div className="swiper-slide">
                    <img className='rounded-lg' src="https://imgur.com/WBXEwzD.png" alt="Slide 2" />
                </div>
                <div className="swiper-slide">
                    <img className='rounded-lg' src="https://imgur.com/PmczBav.png" alt="Slide 3" />
                </div>
                <div className="swiper-slide">
                    <img className='rounded-lg' src="https://imgur.com/2C3qrO6.png" alt="Slide 4" />
                </div>
            </div>
            <div className="swiper-pagination"></div>
            
        </div>
    );
};

export default SwiperSlider;
