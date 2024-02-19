import { Stack, Typography, Box, Button, useMediaQuery } from '@mui/material'
import React from 'react'
import TypingAnimatioFont from './TypingAnimatioFont'
import { useTheme } from '@emotion/react'

const english = [
    'Voice',
    1000,
    'Accent',
    1000,
    'Audio',
    1000,
  ]

const spanish = [
    'Voz',
    1000,
    'Acento',
    1000,
    'Audio',
    1000,
]

const HomeBanner = (props) => {

  const isMediumScreen = useMediaQuery("(max-width: 1400px)")
  const isSmallScreen = useMediaQuery("(max-width: 900px)")

  return (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        height: 'auto',
        px: 5,
        flexDirection: "column"
    }}>
        <Stack 
            direction="column" 
            spacing={3}
            sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
             }}
        >
            {
                props.lang && props.lang === "ENG" && (
                    <>
                        <Typography
                            variant={isSmallScreen ? "h5" : (isMediumScreen ? "h4" : "h3")} 
                            sx={{ 
                                textAlign: 'center', 
                                fontFamily: 'Catamaran',
                                backgroundColor: '#0cbaba',
                                backgroundImage: 'linear-gradient(200deg, #0cbaba 0%, #380036 74%)',
                                color: 'transparent',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                            }}
                        >
                            Translate any 
                            <span
                                style={{
                                    background: 'linear-gradient(45deg, #2786d7, #5df9fd)',
                                    color: 'transparent',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                }}
                            >
                                &nbsp; Video &nbsp;
                            </span>
                            by an 
                        </Typography>

                        <Typography
                            variant={isSmallScreen ? "h5" : (isMediumScreen ? "h4" : "h3")}  
                            sx={{ 
                                textAlign: 'center', 
                                fontFamily: 'Catamaran',
                                backgroundColor: '#0cbaba',
                                backgroundImage: 'linear-gradient(200deg, #0cbaba 0%, #380036 74%)',
                                color: 'transparent',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                            }}
                        >
                            
                        <span
                            style={{
                                background: 'linear-gradient(45deg, #2786d7, #5df9fd)',
                                color: 'transparent',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                            }}
                        >
                        &nbsp; Artificial Intelligence &nbsp;
                        </span>
                        into all languages with real
                            
                        </Typography>

                        <Typography 
                            variant={isSmallScreen ? "h5" : (isMediumScreen ? "h4" : "h3")}  
                            sx={{ 
                                textAlign: 'center', 
                                fontFamily: 'Catamaran',
                                backgroundColor: '#0cbaba',
                                backgroundImage: 'linear-gradient(200deg, #0cbaba 0%, #380036 74%)',
                                color: 'transparent',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                            }}
                        >
                            <span> &nbsp;<TypingAnimatioFont sequence={english} />&nbsp;</span>
                            in seconds
                        </Typography>

                    </>
                )
            }

            {
                props.lang && props.lang === "ESP" && (

                    <>

                        <Typography
                            variant={isSmallScreen ? "h5" : (isMediumScreen ? "h4" : "h3")} 
                            sx={{ 
                                textAlign: 'center', 
                                fontFamily: 'Catamaran',
                                backgroundColor: '#0cbaba',
                                backgroundImage: 'linear-gradient(200deg, #0cbaba 0%, #380036 74%)',
                                color: 'transparent',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                            }}
                        >
                            Traducir cualquier
                            <span
                                style={{
                                    background: 'linear-gradient(45deg, #2786d7, #5df9fd)',
                                    color: 'transparent',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                }}
                            >
                                &nbsp; vídeo &nbsp;
                            </span>
                            mediante
                        </Typography>

                        <Typography
                            variant={isSmallScreen ? "h5" : (isMediumScreen ? "h4" : "h3")} 
                            sx={{ 
                                textAlign: 'center', 
                                fontFamily: 'Catamaran',
                                backgroundColor: '#0cbaba',
                                backgroundImage: 'linear-gradient(200deg, #0cbaba 0%, #380036 74%)',
                                color: 'transparent',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                            }}
                        >
                            
                            <span
                            style={{
                                background: 'linear-gradient(45deg, #2786d7, #5df9fd)',
                                color: 'transparent',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                            }}
                        >
                        &nbsp; inteligencia artificial &nbsp;
                        </span>
                        a todos los idiomas con real
                            
                        </Typography>

                        <Typography 
                            variant={isSmallScreen ? "h5" : (isMediumScreen ? "h4" : "h3")}  
                            sx={{ 
                                textAlign: 'center', 
                                fontFamily: 'Catamaran',
                                backgroundColor: '#0cbaba',
                                backgroundImage: 'linear-gradient(200deg, #0cbaba 0%, #380036 74%)',
                                color: 'transparent',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                            }}
                        >
                            <span> &nbsp;<TypingAnimatioFont sequence={spanish} />&nbsp;</span>
                            en segundos
                        </Typography>

                    </>


                )
            }
            
            {
                props.lang && props.lang === "ENG" ? (

                    <Box sx={{
                        width: isMediumScreen ? '85%' : '65%',
                     }}>
                        <Typography sx={{
                            textAlign: 'center',
                            fontFamily: "'Nunito Sans', sans-serif",
                            fontWeight: 400,
                            fontSize: isSmallScreen ? "14px" : (isMediumScreen ? "18px" : "20px")
                        }}
                        variant='h6'
                        >
                            Experience the magic of our AI video generator as it swiftly selects the perfect 
                            creative media assets for your video, allowing you to create professional videos 
                            in mere minutes with our patented AI technology.
                        </Typography>
                    </Box>

                ) : (
                    <Box sx={{
                        width: isMediumScreen ? '85%' : '65%',
                     }}>
                        <Typography sx={{
                            textAlign: 'center',
                            fontFamily: "'Nunito Sans', sans-serif",
                            fontWeight: 400,
                            fontSize: '18px'
                        }}
                        variant='h6'
                        >
                            Experimente la magia de nuestro generador de videos con IA mientras selecciona rápidamente el video perfecto.
                            Activos multimedia creativos para su vídeo, que le permiten crear vídeos profesionales.
                            en cuestión de minutos con nuestra tecnología patentada de IA.
                        </Typography>
                    </Box>
                )
            }
            
            <Box sx={{
                width: '50%',
            }}>
                
                <Button sx={{
                    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)', 
                    color: '#fff', 
                    mr: { xs: 2, md: 8},
                    background: 'linear-gradient(20deg, #2786d7, #5df9fd)',
                    borderRadius: '25px', 
                    textTransform: 'capitalize', 
                    '&:hover': { 
                        bgcolor: 'linear-gradient(60deg, #33CCFF,#D499FF)',
                        boxShadow: '0px 3px 5px -1px rgb(106 207 179 / 82%), 0px 6px 10px 0px rgb(219 148 189 / 77%), 0px 1px 18px 0px rgb(144 214 223)'
                        } 
                    }} 
                    variant="contained"
                    fullWidth
                    size="large"
                >
                    {
                        props.lang && props.lang === "ENG" ? (
                            <Typography variant="h5">Start Now</Typography>
                        ) : (
                            <Typography variant="h5">Empezar ahora</Typography>
                        )
                    }
                    
                </Button>
            </Box>

        </Stack>
    </Box>
  )
}

export default HomeBanner