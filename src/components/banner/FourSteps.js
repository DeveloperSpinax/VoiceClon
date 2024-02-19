import { Grid, Stack, Typography, Box } from '@mui/material'
import React from 'react';
import { DefaultPlayer} from 'react-html5video';
import 'react-html5video/dist/styles.css';



const FourSteps = (props) => {
    const marginTopStyle = props.first === "first" ? { marginTop: '5px' } : {}
  return (
    <Box sx={{
        mt: 5,
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
                                    variant="h2"
                                    sx={{
                                        textAlign: 'center', 
                                        fontFamily: 'Catamaran',
                                        color: '#380036',
                                }}>
                                    AI Talking Head Videos with
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
                                    Many Voice changing features
                                </Typography>
                            </Stack>
                        ): (
                            <Stack direction="column">
                                <Typography 
                                    variant="h2"
                                    sx={{
                                        textAlign: 'center', 
                                        fontFamily: 'Catamaran',
                                        color: '#380036',
                                }}>
                                    Vídeos de cabezas parlantes con IA con
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
                                    Muchas funciones de cambio de voz
                                </Typography>
                            </Stack>
                        )
                    }
                </Box>
            )
        }

        <Grid container spacing={5} sx={marginTopStyle}>

            <Grid item xs={6} sx={{ mt: -5 }}>
                <Box sx={{ 
                    px: 8,
                    py: 4
                }}>
                    <DefaultPlayer
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

            <Grid item xs={6}>
                <Box
                    sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'flex-start', 
                        alignContent: 'center', 
                        flexDirection: 'column' 
                    }}>
                    <Typography 
                        variant="h5" 
                        sx={{
                            textTransform: 'none', 
                            fontFamily: 'Catamaran',
                            color: '#380036',
                        }}
                    >
                        {props.heading}
                    </Typography>
                    <Typography variant="body" sx={{ fontWeight: 400, letterSpacing: '0.5px', fontFamily: 'Nunito Sans', textAlign: 'justify' }}>
                        {props.text}
                    </Typography>
                </Box>
            </Grid>
        </Grid>

    </Box>
  )
}

export default FourSteps