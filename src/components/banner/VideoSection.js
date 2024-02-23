import React from 'react'
import {Box, Button, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import VideoComparison from '../video/VideoComparison'
import videoDemo from '../../static/video/Intro.mp4'
import bannerDemo from '../../static/video/Introposter.jpg'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';

const VideoSection = (props) => {

  const isLaptopScreen = useMediaQuery("(max-width: 1250px)");
  const isTabletScreen = useMediaQuery("(max-width: 899px)")
  const isMobileScreen = useMediaQuery("(max-width: 600px)")

  return (
    <Box sx={{
        mt: 3,
        px: 4,
        py: 4,
        borderBottom: '2px solid #e1e1e1',
    }}>

        <Grid container spacing={2}>

            <Grid 
                item 
                xs={12} 
                md={5} 
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
                                variant={isMobileScreen ? "h5" : "h4"} 
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
                                variant={isMobileScreen ? "h5" : "h4"}
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
                            width: 'auto',
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

            <Grid item xs={12} md={2} sx={{ display: isTabletScreen ? "none" : "flex", justifyContent: 'flex-start', alignItems: 'center' }}>
                <Box sx={{
                    display: "flex",
                    alignItems: 'center',
                    mt: "50px !important",
                    cursor: 'pointer',
                    animation: 'scrollLinearX 1.5s linear infinite', // Add animation property
                }}>
                    <svg 
                        width={isLaptopScreen ? '70' : '100'}
                        height={isLaptopScreen ? '70' : '100'} 
                        viewBox="0 0 60 60"
                    >
                        <defs>
                            <linearGradient id="gradientColor" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: "#2786d7", stopOpacity: 1 }} />
                                <stop offset="80%" style={{ stopColor: "#5df9fd", stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <KeyboardDoubleArrowRightIcon sx={{ 
                            height: 100,
                            width: 100,
                            fill: "url(#gradientColor)",
                            '@keyframes scrollLinearX': { // Define keyframes for linear scrolling animation
                                '0%': { transform: 'translateX(0)' },
                                '100%': { transform: isLaptopScreen ? 'translateX(85%)' : 'translateX(120%)'  }, // Adjust this value to control the distance of scrolling
                            },
                        }} />
                    </svg>
                </Box>
            </Grid>

            <Grid item xs={12} sx={{ display: isTabletScreen ? "flex" : "none", justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{
                    display: "flex",
                    alignItems: 'center',
                    justifyContent: "center",
                    cursor: 'pointer',
                    mt: 2,
                    animation: 'scrollLinear 0.5s linear infinite', // Add animation property
                }}>
                    <KeyboardDoubleArrowDownOutlinedIcon sx={{ 
                                height: 80,
                                width: 80,
                                color: "#380036",
                                '@keyframes scrollLinear': { // Define keyframes for linear scrolling animation
                                    '0%': { transform: 'translateY(0)' },
                                    '100%': { transform: 'translateY(10%)'  }, // Adjust this value to control the distance of scrolling
                                },
                            }}
                        />
                </Box>
            </Grid>

            <Grid 
                item 
                xs={12} 
                md={5} 
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
                                variant={isMobileScreen ? "h5" : "h4"}
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
                                variant={isMobileScreen ? "h5" : "h4"}
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
                        width: 'auto',
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
                width: isTabletScreen ? "55%" : "30%",
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