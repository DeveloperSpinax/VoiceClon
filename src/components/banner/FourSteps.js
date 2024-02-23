import { Grid, Stack, Typography, Box, useMediaQuery, Icon } from '@mui/material'
import React from 'react';
import { DefaultPlayer} from 'react-html5video';
import 'react-html5video/dist/styles.css';
import './video.css'


const FourSteps = (props) => {
    const marginTopStyle = props.first === "first" ? { marginTop: '5px' } : {}
    const isMediumScreen = useMediaQuery("(max-width: 990px)");
    const isSmallScreen = useMediaQuery("(max-width: 750px)");
    const isLaptopScreen = useMediaQuery("(max-width: 1250px)");

  return (
    <Box sx={{
        mt: 4,
        px: 16,
        py: 5,
        background: '#fff',
    }}>

        {
            props.first && props.first === "first" && (
                <Box sx={{
                    mb: 4,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
        
                    {props.lang && props.lang === "ENG" ? (
                            <Stack direction="column">
                                <Typography 
                                    variant={isMediumScreen ? (isSmallScreen ? "h4" : "h3") : "h2"}
                                    sx={{
                                        textAlign: 'center', 
                                        fontFamily: 'Catamaran',
                                        color: '#380036',
                                }}>
                                    Translate video and audio with best AI
                                </Typography>

                                <Typography 
                                    variant={isMediumScreen ? (isSmallScreen ? "h5" : "h4") : "h3"}
                                    sx={{
                                        textAlign: 'center', 
                                        fontFamily: 'Catamaran',
                                        background: 'linear-gradient(45deg, #2786d7, #5df9fd)',
                                        color: 'transparent',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                    }}
                                >
                                    Many Voice changing features
                                </Typography>
                            </Stack>
                        ): (
                            <Stack direction="column">
                                <Typography 
                                    variant={isMediumScreen ? (isSmallScreen ? "h4" : "h3") : "h2"}
                                    sx={{
                                        textAlign: 'center', 
                                        fontFamily: 'Catamaran',
                                        color: '#380036',
                                }}>
                                    Traduce vídeo y audio con la mejor IA
                                </Typography>

                                <Typography 
                                    variant={isMediumScreen ? (isSmallScreen ? "h5" : "h4") : "h3"}
                                    sx={{
                                        textAlign: 'center', 
                                        fontFamily: 'Catamaran',
                                        background: 'linear-gradient(45deg, #2786d7, #5df9fd)',
                                        color: 'transparent',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                    }}
                                >
                                    Muchas funciones de cambio de voz
                                </Typography>
                            </Stack>
                        )
                    }
                </Box>
            )
        }

        <Grid container spacing={5} sx={marginTopStyle}>

            {
                isMediumScreen && (
                    <Grid item xs={12} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        mt: -2
                    }}>
                        <Box sx={{ textAlign: "center" }}>
                            {props.icon}
                        </Box>
                        <Box sx={{ textAlign: 'center', mt: 1 }}>
                            <Typography 
                                variant={isLaptopScreen ? "h5" : "h4"} 
                                sx={{
                                    textTransform: 'none', 
                                    fontFamily: 'Catamaran',
                                    color: '#380036',
                                }}
                            >
                                {props.heading}
                            </Typography>
                        </Box>
                        <Box sx={{ 
                            px: 8,
                            py: 4
                        }}>
                            <DefaultPlayer
                                className="rh5v-DefaultPlayer_component"
                                controls={[]}
                                autoPlay
                                loop
                                muted
                                onCanPlayThrough={() => {
                                    // Do stuff
                                }}>
                                <source src={props.video} type="video/mp4" />
                            </DefaultPlayer>
                        </Box>
                    </Grid>
                )
            }

                <Grid item xs={6} sx={{ mt: -5, display: isMediumScreen && "none" }}>
                    <Box sx={{ 
                        px: 8,
                        py: 4
                    }}>
                        <DefaultPlayer
                            className="rh5v-DefaultPlayer_component"
                            controls={[]}
                            autoPlay
                            loop
                            muted
                            onCanPlayThrough={() => {
                                // Do stuff
                            }}>
                            <source src={props.video} type="video/mp4" />
                        </DefaultPlayer>
                    </Box>
                </Grid>

            {
                !isMediumScreen && (
                    <Grid item xs={6} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        mt: -2
                    }}>
                        <Box sx={{ textAlign: "center" }}>
                            {props.icon}
                        </Box>
                        <Box sx={{ textAlign: 'center', mt: 1 }}>
                            <Typography 
                                variant={isLaptopScreen ? "h5" : "h4"} 
                                sx={{
                                    textTransform: 'none', 
                                    fontFamily: 'Catamaran',
                                    color: '#380036',
                                }}
                            >
                                {props.heading}
                            </Typography>
                        </Box>
                    </Grid>
                )
            }

            
        </Grid>

    </Box>
  )
}

export default FourSteps