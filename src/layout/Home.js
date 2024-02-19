import { Box } from '@mui/material'
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

const heading1 = "Start with any content format"
const paragraph1 = "Dummy text loreum Ipsum will be edited heres Dummy text loreum Ipsum will be edited heresDummy text loreum Ipsum will be edited heresDummy text loreum Ipsum will be edited heresDummy text loreum Ipsum will be edited heresDummy text loreum Ipsum will be edited heresDummy text loreum Ipsum will be edited heresDummy text loreum Ipsum will be edited heresDummy text loreum Ipsum will be edited heresDummy text loreum Ipsum will be edited heresDummy text loreum Ipsum will be edited heresDummy text loreum Ipsum will be edited heres"

const spanishHeading1 = "Comience con cualquier formato de contenido"
const spanishParagraph1 = "El texto ficticio loreum Ipsum se editará aquí El texto ficticio loreum Ipsum se editará aquí El texto ficticio loreum Ipsum se editará aquí El texto ficticio loreum Ipsum se editará aquí El texto ficticio loreum Ipsum se editará aquí El texto ficticio loreum Ipsum se editará aquí El texto ficticio loreum Ipsum se editará aquí aquí el texto ficticio loreum Ipsum se editará aquí el texto ficticio loreum Ipsum se editará aquí el texto ficticio loreum Ipsum se editará aquí el texto ficticio loreum Ipsum se editará aquí el texto ficticio loreum Ipsum se editará aquí"


const Home = () => {

  const [parentLang, setParentLang] = React.useState('ENG')

  return (
    <Box >

        <NavbarLogo setParentLang={setParentLang} />
        <HomeBanner lang={parentLang}  />
        <Box sx={{
          px: 18,
          py: 2,
          mt: 3
        }}>
          <FlagSlider lang={parentLang} />
        </Box>
        {/* <VideoSection lang={parentLang} /> */}
        {/* <ThreeStep lang={parentLang} /> */}

        {
          parentLang === "ENG" ? (
            <>
              <FourSteps heading={heading1} text={paragraph1} video={video_1} first="first" lang={parentLang}   />
              <FourStepsR heading={heading1} text={paragraph1} video={video_2} lang={parentLang} />
              <FourSteps heading={heading1} text={paragraph1} video={video_3} lang={parentLang} />\
            </>
          ) : (
            <>
              <FourSteps heading={spanishHeading1} text={spanishParagraph1} video={video_1} first="first" lang={parentLang}   />
              <FourStepsR heading={spanishHeading1} text={spanishParagraph1} video={video_2} lang={parentLang} />
              <FourSteps heading={spanishHeading1} text={spanishParagraph1} video={video_3} lang={parentLang} />\
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