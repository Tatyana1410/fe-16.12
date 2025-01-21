import React, {useState,useRef,} from 'react';
import film1 from '../assets/Rectangle 11.png';
import film2 from '../assets/Rectangle 6.png';
import film3 from '../assets/Rectangle 7.png';
import film4 from '../assets/Rectangle 8.png';
import film5 from '../assets/Rectangle 9.png';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../slide.css';
import { FreeMode, Pagination } from 'swiper/modules';
import TextPictures from './TextPictures';



function Pictures (props){
    const swiperRef = useRef(null);
        
            const slidePrev = () => {
                if (swiperRef.current) {
                    swiperRef.current.swiper.slidePrev();
                }
            };
        
            const slideNext = () => {
                if (swiperRef.current) {
                    swiperRef.current.swiper.slideNext();
                }
            };

    return (
        <>

            <TextPictures onSlidePrev={slidePrev} onSlideNext={slideNext}></TextPictures>
            <div className="pictures-film"> 

            <Swiper
                ref={swiperRef}
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                clickable: true,}}
                modules={[FreeMode, Pagination]}
                className="mySwiper">
                    
                <SwiperSlide><Link className='linkEl'to="/squid">
                     <img className='film-img' src={film1} alt="film" /></Link></SwiperSlide>
                 <SwiperSlide><Link className='linkEl'to="/breaking">
                     <img className='film-img' src={film2} alt="film" to="/breaking"/> </Link></SwiperSlide>
                 <SwiperSlide><Link className='linkEl' to="/rain"> 
                     <img className='film-img' src={film3} alt="film" /></Link></SwiperSlide>
                <SwiperSlide><Link className='linkEl' to="/life">
                    <img className='film-img' src={film4} alt="film" /></Link></SwiperSlide>
                 <SwiperSlide><Link className='linkEl' to="/money">
                    <img className='film-img' src={film5} alt="film" /></Link></SwiperSlide>
             </Swiper>
      </div>  

       {/* <div className="pictures-film"> 
                <Link className='linkEl'to="/squid">
                    <img className='film-img' src={film1} alt="film" /></Link>
                <Link className='linkEl'to="/breaking">
                    <img className='film-img' src={film2} alt="film" to="/breaking"/> </Link>
                <Link className='linkEl' to="/rain"> 
                    <img className='film-img' src={film3} alt="film" /></Link>
                <Link className='linkEl' to="/life">
                    <img className='film-img' src={film4} alt="film" /></Link>
                <Link className='linkEl' to="/money">
                    <img className='film-img' src={film5} alt="film" /></Link>
            </div> */}

        </>
    );

};
export default Pictures;