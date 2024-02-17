import { Navigation,  A11y } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide, } from 'swiper/react';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ExcerciseItemType } from '../types';
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';
import { useRef } from 'react';

interface ArrowButtonType { 
    action:()=>void
}

const LeftArrow = ({action}:ArrowButtonType) => {
  return (
    <Typography onClick={() => action()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = ({action}:ArrowButtonType) => {
  return (
    <Typography onClick={() =>action() } className="left-arrow" >
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};
interface ScrollerType { 
    data: ExcerciseItemType[] | string[];
    maxview?:number
}

const Scroller: React.FC<ScrollerType> = ({ data,maxview }) => {
    const swiperRef = useRef<SwiperRef>(null);
    const goNext = () => swiperRef?.current?.swiper?.slideNext();
    const goPrev = () => swiperRef?.current?.swiper?.slidePrev();
    return (
        <Box sx={{ widtH: '100%' }}>
            <LeftArrow action={goPrev} />
            <RightArrow action={goNext} />
            <Swiper
                ref={swiperRef}
                loop={true}
                modules={[Navigation, A11y]}
                spaceBetween={100}
                slidesPerView={1}
                navigation={{
                    enabled: false,
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                    576: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                 
                    1200: {
                        slidesPerView: maxview?maxview:3,
                    }
                }}
            >
                {data.map((item,index) => (
                    <SwiperSlide key={((item as ExcerciseItemType).id || item as string)+index}>
                        {typeof item === "string" ? <BodyPart item={item} /> : <ExerciseCard exercise={item} />}
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default Scroller