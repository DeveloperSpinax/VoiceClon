import React from 'react'
import {Box, Button, Grid, Stack, Typography } from '@mui/material'
import VideoComparison from '../video/VideoComparison'
import videoDemo from '../../static/video/Intro.mp4'
import bannerDemo from '../../static/video/Introposter.jpg'
import './VideoSection.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const VideoSection = (props) => {
  return (
    <Box sx={{
        mt: 3,
        // mb: 10,
        px: 4,
        py: 4,
        // borderTop: '2px solid #e1e1e1',
        borderBottom: '2px solid #e1e1e1',
    }}>

        {/* <Box sx={{
            mb: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>

                {
                    props.lang && props.lang === "ENG" ? (

                        <Stack direction="column">
                            <Typography 
                                variant="h2"
                                sx={{
                                    textAlign: 'center', 
                                    fontFamily: 'Catamaran',
                                    color: '#380036',
                            }}>
                                Solutions For Today’s
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
                                Video Creation 
                                <span style={{ color: "#380036" }}>
                                &nbsp;Needs
                                </span>
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}> 

                            <Typography sx={{
                                textAlign: 'center',
                                fontFamily: "'Nunito Sans', sans-serif",
                                fontWeight: 400,
                            }}>
                                Whether you are a beginner, an expert, or a professional video creator,
                                we offer solutions to help you reach newer heights. 
                            </Typography>

                            </Box>
                        </Stack>

                    ) : (

                        <Stack direction="column">
                            <Typography 
                                variant="h2"
                                sx={{
                                    textAlign: 'center', 
                                    fontFamily: 'Catamaran',
                                    color: '#380036',
                            }}>  
                                Soluciones para la actualidad
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
                                Creación de vídeos
                                <span style={{ color: "#380036" }}>
                                &nbsp;Necesidades
                                </span>
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}> 

                            <Typography sx={{
                                textAlign: 'center',
                                fontFamily: "'Nunito Sans', sans-serif",
                                fontWeight: 400,
                            }}>
                                Ya seas principiante, experto o creador de vídeos profesional,
                                Ofrecemos soluciones para ayudarle a alcanzar nuevas alturas.
                            </Typography>

                            </Box>
                        </Stack> 
                    )
                }

            

        </Box> */}

        <Grid container spacing={0.5}>

            <Grid 
                item 
                xs={12} 
                md={5.5} 
                sx={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center', 
                }}
            >
                <Stack direction="column" spacing={2}>

                    {
                        props.lang && props.lang === "ENG" ? (

                            <Typography 
                                variant="h4" 
                                sx={{ 
                                    textAlign: 'center', 
                                    fontFamily: 'Catamaran',
                                    color: '#380036',
                                }}
                            >
                                Original Video
                            </Typography>

                        ) : (

                            <Typography 
                                variant="h4" 
                                sx={{ 
                                    textAlign: 'center', 
                                    fontFamily: 'Catamaran',
                                    color: '#380036',
                                }}
                            >
                                Vídeo original
                            </Typography>

                        )
                    }

                    

                    <Box
                        sx={{
                            height: '80%',
                            width: '600px',
                            mt: "32px !important",
                            boxShadow: '0px 25px 80px #0000001f, 0px 0px 7px 4px rgba(46,143,217,0.54) ',
                            borderRadius: '4px',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            border: '8px solid #fff',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                    }}>
                        <VideoComparison video={videoDemo} banner={bannerDemo} />
                    </Box>

                </Stack>
            </Grid>

            <Grid item xs={12} md={1}>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                    width: '100%',
                    mt: "50px !important",
                    px: 3,
                    cursor: 'pointer',
                }}>
                    <svg 
                        width="100" 
                        height="100" 
                        viewBox="0 0 60 60"
                        className="slideRightAnimation"
                    >
                        <defs>
                            <linearGradient id="gradientColor" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: "#2786d7", stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: "#5df9fd", stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <KeyboardDoubleArrowRightIcon
                            sx={{
                                height: 60,
                                width: 60,
                                fill: "url(#gradientColor)"
                            }}
                        />
                    </svg>
                </Box>

            </Grid>

            <Grid 
                item 
                xs={12} 
                md={5.5} 
                sx={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center', 
                }}
            >
                <Stack direction="column" spacing={2}>

                {
                        props.lang && props.lang === "ENG" ? (

                            <Typography 
                                variant="h4" 
                                sx={{ 
                                    textAlign: 'center', 
                                    fontFamily: 'Catamaran',
                                    color: '#380036',
                                }}
                            >
                                Translated Video
                            </Typography>

                        ) : (

                            <Typography 
                                variant="h4" 
                                sx={{ 
                                    textAlign: 'center', 
                                    fontFamily: 'Catamaran',
                                    color: '#380036',
                                }}
                            >  
                                Vídeo traducido 
                            </Typography>

                        )
                    }

                    <Box sx={{
                        height: '80%',
                        width: '600px',
                        mt: "32px !important",
                        boxShadow: '0px 25px 80px #0000001f, 0px 0px 7px 4px rgba(46,143,217,0.54) ',
                        borderRadius: '4px',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        border: '8px solid #fff'
                    }}>
                        <VideoComparison video={videoDemo} banner={bannerDemo} />
                    </Box>

                </Stack>
            </Grid>

        </Grid>

        <Box sx={{
            mt: 8,
            px: 3,
            width: '100%',   // Take the full width of the parent
            display: 'flex', // Use flex for positioning
            justifyContent: 'center', // Center children horizontally
            alignItems: 'center', // Center children vertically
        }}>
            <Button sx={{
                width: '30%',
                color: '#fff',
                background: 'linear-gradient(20deg, #2786d7, #5df9fd)', 
                textTransform: 'none', 
                '&:hover': { 
                    bgcolor: 'linear-gradient(60deg, #33CCFF,#D499FF)',
                    boxShadow: '0px 3px 5px -1px rgb(106 207 179 / 82%), 0px 6px 10px 0px rgb(219 148 189 / 77%), 0px 1px 18px 0px rgb(144 214 223)'
                    } 
                }} 
                variant="contained"
                size="large"
                endIcon={<ChevronRightIcon sx={{ height: 30, width: 30 }} />}
            >
                {
                        props.lang && props.lang === "ENG" ? (
                            <Typography variant="h6">Let's Try</Typography>
                        ) : (
                            <Typography variant="h6">Intentemos</Typography>
                        )
                }
                
            </Button>
        </Box>

    </Box>
  )
}

export default VideoSection