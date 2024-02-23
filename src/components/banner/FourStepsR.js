import { Grid, Stack, Typography, Box, useMediaQuery } from '@mui/material'
import React from 'react';
import { DefaultPlayer} from 'react-html5video';
import 'react-html5video/dist/styles.css';
import './video.css'


const FourSteps = (props) => {

    const isMediumScreen = useMediaQuery("(max-width: 990px)");
    const isSmallScreen = useMediaQuery("(max-width: 750px)");
    const isLaptopScreen = useMediaQuery("(max-width: 1250px)");

    return (
        <Box sx={{
            px: 16,
            mb: 4
        }}>

            <Grid container spacing={5}>

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

                <Grid item xs={6} sx={{ mt: -3, display: isMediumScreen && "none" }}>
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
            </Grid>

        </Box>
    )
}

export default FourSteps