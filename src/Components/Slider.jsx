import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import '../Components/Slider.css'
import { EffectCards } from "swiper";

const Slider = () => {
    return (
        <div className='mt-12'>
            <>
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://e1.pxfuel.com/desktop-wallpaper/236/480/desktop-wallpaper-card-magic-magic-cards.jpg" alt="" className='w-full h-full' />
                        <p className='absolute text-yellow-700 font-bold'>CARDS TRICK</p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/10/25/af134f04-b938-11e7-affb-32c8d8b6484e_1280x720_163955.jpg?itok=qtN-gsmN" alt="" className='w-full h-full' />
                        <p className='absolute uppercase'>Hands trick</p>
                    </SwiperSlide>

                    <SwiperSlide>
                       
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxVt7ZCGKqFyjQBx9aIrFp8UZEnUe9YitebRl00VRMMHrduG-kzSv2ZG3caj1BlA3qCOI&usqp=CAU" alt=""  className='w-full h-full' />
                        <p className='absolute uppercase'>COIN TRICK</p>
                    </SwiperSlide>

                    <SwiperSlide>
                       
                        <img src="https://qph.cf2.quoracdn.net/main-qimg-753cba9b26eeaffcdce4c3c4f9e5110c-lq" alt=""  className='w-full h-full' />
                        <p className='absolute uppercase text-black font-bold'>VANISH TRICK</p>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                       
                        <img src="https://c1.peakpx.com/wallpaper/32/122/321/guy-man-male-people-wallpaper-preview.jpg" alt=""  className='w-full h-full' />
                        <p className='absolute uppercase text-white font-bold'>LEVITATION</p>
                    </SwiperSlide>


                    


                </Swiper>
            </>
        </div>
    );
};

export default Slider;