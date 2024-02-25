import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import NavbarLogo from '../components/navbar/NavbarLogo'
import HomeBanner from '../components/banner/HomeBanner'
import FlagSlider from '../components/slider/FlagSlider'
import VideoSection from '../components/banner/VideoSection'
import ThreeStep from '../components/banner/ThreeStep'
import video_1 from '../static/threeSteps/video1.mp4';
import video_2 from '../static/threeSteps/video2.mp4';
import video_3 from '../static/threeSteps/video3.mp4';
import FourSteps from '../components/banner/FourSteps'
import FourStepsR from '../components/banner/FourStepsR'
import MintuesSaved from '../components/banner/MintuesSaved'
import PriceSection from '../components/banner/PriceSection'
import Footer from '../components/banner/Footer'

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';

const heading1 = "Get started by signing up for free to translate"
const heading2 = "Upload your video and select translation language"
const heading3 = "Finally you will get a translated video "

const paragraph1 = "Dummy text loreum Ipsum will be edited heres Dummy text loreum Ipsum will be edited heresDummy text loreum Ipsum will be edited heresDummy text loreum Ipsum will be edited heresDummy text loreum Ipsum will be edited heresDummy text loreum Ipsum will be edited heresDummy text loreum Ipsum will be edited heresDummy text loreum Ipsum will be edited heresDummy text loreum Ipsum will be edited heresDummy text loreum Ipsum will be edited heresDummy text loreum Ipsum will be edited heresDummy text loreum Ipsum will be edited heres"

const spanishHeading1 = "Empieza registrándote gratis para traducir"
const spanishHeading2 = "Sube tu video y selecciona el idioma de traducción"
const spanishHeading3 = "Finalmente recibirás un video traducidos."

const Home = () => {

  const [parentLang, setParentLang] = React.useState('ENG')
  const isLaptopScreen = useMediaQuery("(max-width: 1250px)");

  return (
    <Box >

        <NavbarLogo setParentLang={setParentLang} />
        <HomeBanner lang={parentLang}  />
        <Box sx={{
          px: 18,
          mt: 4,
        }}>
          <FlagSlider lang={parentLang} />
        </Box>
        <VideoSection lang={parentLang} />
        <ThreeStep lang={parentLang} />

        {
          parentLang === "ENG" ? (
            <>
              <FourSteps heading={heading1} video={video_1} first="first" lang={parentLang} icon={<AccountCircleOutlinedIcon sx={{ height: isLaptopScreen ? 50 : 100,width: isLaptopScreen ? 50 : 100, color: '#380036'}} />} />
              <FourStepsR heading={heading2} video={video_2} lang={parentLang} icon={<BackupOutlinedIcon sx={{ height: isLaptopScreen ? 50 : 100,width: isLaptopScreen ? 50 : 100, color: '#380036'}} />} />
              <FourSteps heading={heading3} video={video_3} lang={parentLang} icon={<OndemandVideoOutlinedIcon sx={{ height: isLaptopScreen ? 50 : 100,width: isLaptopScreen ? 50 : 100, color: '#380036'}} />} />\
            </>
          ) : (
            <>
              <FourSteps heading={spanishHeading1} video={video_1} first="first" lang={parentLang}   />
              <FourStepsR heading={spanishHeading2} video={video_2} lang={parentLang} />
              <FourSteps heading={spanishHeading3} video={video_3} lang={parentLang} />\
            </>
          )
        }

        <MintuesSaved lang={parentLang} />
        <PriceSection lang={parentLang} />
        <Footer lang={parentLang} />

    </Box>
  )
}

export default Home