"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Carrousel() {

    return(
        <div className="w-full sm:max-w-md md:max-w-2xl relative">
            <Swiper
                spaceBetween={20}
                slidesPerView={2}
                pagination={{ 
                clickable: true,
                renderBullet: (index, className) => 
                    `<span class="${className} bg-white opacity-50 w-3 h-3 mx-1 rounded-full transition-all duration-300 scale-100 active:scale-125 active:bg-yellow-400"></span>`
                }}
                navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
                modules={[Navigation, Pagination]}
                className="w-full">
                <SwiperSlide>
                    <div className="flex justify-center items-center text-white text-2xl font-bold rounded-lg shadow-lg">
                        <Image src="/combates.png" alt="logo" width={216} height={480}></Image>
                    </div>
                    
                </SwiperSlide>
    
                <SwiperSlide>
                    <div className="flex justify-center items-center text-white text-2xl font-bold rounded-lg shadow-lg">
                        <Image src="/tela_combate.png" alt="logo" width={216} height={480}></Image>
                    </div>
                </SwiperSlide>
    
                <SwiperSlide>
                    <div className="flex justify-center items-center text-white text-2xl font-bold rounded-lg shadow-lg">
                        <Image src="/inimigos.png" alt="logo" width={216} height={480}></Image>
                    </div>
                </SwiperSlide>
    
                <SwiperSlide>
                    <div className="flex justify-center items-center text-white text-2xl font-bold rounded-lg shadow-lg">
                        <Image src="/card_edit_jogador.png" alt="logo" width={216} height={480}></Image>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* Botão de navegação personalizado (Anterior) */}
            <button className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 p-2 sm:p-3 rounded-full text-black transition">
            <FaArrowLeft className="text-sm sm:text-lg" />
            </button>

            {/* Botão de navegação personalizado (Próximo) */}
            <button className="custom-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 p-2 sm:p-3 rounded-full text-black transition">
            <FaArrowRight className="text-sm sm:text-lg" />
            </button>
        </div>
    )
}