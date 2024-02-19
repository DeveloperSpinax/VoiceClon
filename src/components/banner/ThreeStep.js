import { Grid, Stack, Typography, Box, Button, useMediaQuery } from '@mui/material'
import React, { useState, useEffect } from 'react';
import video_1 from '../../static/threeSteps/video1.mp4';
import video_2 from '../../static/threeSteps/video2.mp4';
import video_3 from '../../static/threeSteps/video3.mp4';
import { DefaultPlayer} from 'react-html5video';
import 'react-html5video/dist/styles.css';

const stepOne = "Start with any content format"
const stepTwo = "Twin AI Engine for Animation & Live Action"
const stepThree = "Collaborate and Publish"

const stepOneS = "Comience con cualquier formato de contenido"
const stepTwoS = "Motor gemelo de IA para animación y acción en vivo"
const stepThreeS = "Colaborar y publicar"

const data = [
    {id: '1', heading: stepOne, image: video_1},
    {id: '2', heading: stepTwo, image: video_2},
    {id: '3', heading: stepThree, image: video_3},
]

const dataSpanish = [
    {id: '1', heading: stepOneS, image: video_1},
    {id: '2', heading: stepTwoS, image: video_2},
    {id: '3', heading: stepThreeS, image: video_3},
]

const ThreeStep = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMediumScreen = useMediaQuery('(max-width:1800px)')

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % data.length);
    }, 5000); // Change item every 5 seconds

    return () => {
      clearInterval(interval); // Cleanup on unmount
    };
  }, []);

  return (
    <Box sx={{
        mt: 5,
        px: 16,
        py: 10,
        mb: isMediumScreen ? 5 : 20,
        // borderBottom: '2px solid #e1e1e1',
        height: '700px',
        background: '#fff',
    }}>

        <Box sx={{
            mb: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            <Stack direction="column">
                {
                    props.lang && props.lang === "ENG" ? (
                        <>
                            <Typography 
                                variant="h2"
                                sx={{
                                    textAlign: 'center', 
                                    fontFamily: 'Catamaran',
                                    color: '#380036',
                            }}>
                                AI Video Making As Easy As
                            </Typography>

                            <Typography 
                                variant="h3"
                                sx={{
                                    textAlign: 'center', 
                                    fontFamily: 'Catamaran',
                                    background: 'linear-gradient(45deg, #2786d7, #5df9fd)',
                                    color: 'transparent',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                }}
                                >
                                Uploading Content
                            </Typography>

                        </>
                    ) : (
                        <>
                            <Typography 
                                variant="h2"
                                sx={{
                                    textAlign: 'center', 
                                    fontFamily: 'Catamaran',
                                    color: '#380036',
                            }}>
                                Hacer vídeos con IA es tan fácil como
                            </Typography>

                            <Typography 
                                variant="h3"
                                sx={{
                                    textAlign: 'center', 
                                    fontFamily: 'Catamaran',
                                    background: 'linear-gradient(45deg, #2786d7, #5df9fd)',
                                    color: 'transparent',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                }}
                                >
                                Subiendo contenido
                            </Typography>
                            
                        </>
                    )
                }
            </Stack>

        </Box>

    
        <Grid container spacing={5} sx={{ mt: 5 }}>

            <Grid item xs={6} sx={{ mt: -5 }}>
                <Box sx={{ height: '200px', width: "auto" }}>
                    <DefaultPlayer
                        key={data[currentIndex].id}
                        controls={[]}
                        autoPlay
                        loop
                        muted
                        onCanPlayThrough={() => {
                            // Do stuff
                        }}>
                        <source src={data[currentIndex].image} type="video/mp4" />
                    </DefaultPlayer>
                    </Box>
            </Grid>

            <Grid item xs={6}>
            {
                props.lang && props.lang === "ENG" ? (
                    data.map((item, index) => (
                        <Box sx={{
                            height: 'auto',
                            border:  index === currentIndex ? '1px solid #309bde' : 'none',
                            borderRadius: '5px',
                            background: index === currentIndex ? '#fff' : 'transparent',
                            boxShadow: index === currentIndex ? '0px 25px 80px #0000001f, 0px 0px 7px 4px rgba(46,143,217,0.54) ': 'none',
                            transition: index === currentIndex ? 'box-shadow ease-in, border-color ease-in, background-color ease-in, opacity ease-in, filter ease-in' : 'none',
                            p: 3,
                        }}
                        key={item.id}
                        >
                            <Grid container spacing={1}>
                                <Grid item xs={10}>
                                    <Stack direction="column" spacing={0.2}>
                                        <Typography 
                                            variant="h5" 
                                            sx={{
                                                textTransform: 'none', 
                                                fontFamily: 'Nunito Sans',
                                                color: '#380036',
                                            }}
                                        >
                                            {item.heading}
                                        </Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>
                    ))
                ) : (
                    dataSpanish.map((item, index) => (
                        <Box sx={{
                            height: 'auto',
                            border:  index === currentIndex ? '1px solid #309bde' : 'none',
                            borderRadius: '5px',
                            background: index === currentIndex ? '#fff' : 'transparent',
                            boxShadow: index === currentIndex ? '0px 25px 80px #0000001f, 0px 0px 7px 4px rgba(46,143,217,0.54) ': 'none',
                            transition: index === currentIndex ? 'box-shadow ease-in, border-color ease-in, background-color ease-in, opacity ease-in, filter ease-in' : 'none',
                            p: 3,
                        }}
                        key={item.id}
                        >
                            <Grid container spacing={1}>
                                <Grid item xs={10}>
                                    <Stack direction="column" spacing={0.2}>
                                        <Typography 
                                            variant="h5" 
                                            sx={{
                                                textTransform: 'none', 
                                                fontFamily: 'Nunito Sans',
                                                color: '#380036',
                                            }}
                                        >
                                            {item.heading}
                                        </Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>
                    ))
                )
            }
            </Grid>
            
        </Grid>

    </Box>
  )
}

export default ThreeStep