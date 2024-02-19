import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Flag from 'react-flagkit';
import flagList from './dataFlags.js'
import flagListesp from './datFlagSESP.js'
import { Stack, Typography, useMediaQuery } from '@mui/material';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './FlagSlider.css';
import 'swiper/css/autoplay';
import { InsertCommentRounded } from '@mui/icons-material';

const FlagSlider = (props) => {
  const isMediumScreen = useMediaQuery("(max-width: 900px)");
  const isSmallScreen = useMediaQuery("(max-width: 700px)");

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      spaceBetween={isMediumScreen ? (isSmallScreen ? 40 : 50) : 60}
      slidesPerView={isMediumScreen ? (isSmallScreen ? 2 : 3) : 4}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      speed={1000}
      loop
      style={{ paddingLeft: '40px', paddingRight: '30px', height: `${isSmallScreen ? '80px': '50px'}` }}
    >
      {props.lang === 'ENG' &&
        flagList.map((item, index) => (
          <SwiperSlide key={index}>
            <Stack direction="row" spacing={2}>
              <Flag country={item.code} size={30} />
              <Typography variant="subtitle1" sx={{ fontFamily: 'Nunito Sans', fontSize: '18px' }}>
                {item.Country}
              </Typography>
            </Stack>
          </SwiperSlide>
        ))}
      {props.lang === 'ESP' &&
        flagListesp.map((item, index) => (
          <SwiperSlide key={index}>
            <Stack direction="row" spacing={2}>
              <Flag country={item.code} size={30} />
              <Typography variant="subtitle1" sx={{ fontFamily: 'Nunito Sans', fontSize: '18px' }}>
                {item.Country}
              </Typography>
            </Stack>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default FlagSlider