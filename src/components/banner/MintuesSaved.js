import React from 'react';
import {Box, Button, Grid, Slider, Stack, Typography } from '@mui/material'
import './VideoSection.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const MintuesSaved = (props) => {
  const [minutes, setMinutes] = React.useState(0);
  const [saveMinutes, setSaveMinutes] = React.useState(0)
  const [dollar, setDollar] = React.useState(0)

  const handleChange = (event) => {
    setMinutes(event.target.value);
    const mintSaved = (event.target.value * 7) / 60
    setSaveMinutes(parseInt(mintSaved))
    setDollar(event.target.value * 5)
  }

  return (
    <Box sx={{
        mt: 10,
        // mb: 10,
        px: 4,
        py: 10,
        borderTop: '2px solid #e1e1e1',
    }}>

        <Box sx={{
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
                            Stop wasting time and money
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
                            creating your
                            <span style={{ color: "#380036" }}>
                            &nbsp;content
                            </span>
                        </Typography>
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
                            Deja de perder tiempo y dinero
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
                            creando tu
                            <span style={{ color: "#380036" }}>
                            &nbsp;contenido
                            </span>
                        </Typography>
                    </Stack>
                )
            }

            

        </Box>

        <Grid container spacing={0.5}>
            <Grid item xs={12}>
                <Stack direction="column" spacing={2}>

                    {
                        props.lang && props.lang === "ENG" ? (

                            <Typography 
                                variant="h4" 
                                sx={{ 
                                    textAlign: 'center', 
                                    fontFamily: 'Nunito Sans',
                                    color: '#380036',
                                }}
                            >
                                {minutes} mintues at VoiceClon
                            </Typography>

                        ) : (
                            <Typography 
                                variant="h4" 
                                sx={{ 
                                    textAlign: 'center', 
                                    fontFamily: 'Nunito Sans',
                                    color: '#380036',
                                }}
                            >
                                {minutes} minutos en VoiceClon
                            </Typography>
                        )
                    }

                    <Box
                        sx={{ 
                            mt: "32px !important",
                            px: 40
                    }}>
                        <Slider 
                            size='large'
                            defaultValue={0}
                            aria-label='slider'
                            valueLabelDisplay='auto'
                            onChange={handleChange}
                            step={10}
                            min={0}
                            max={1000}
                        />
                    </Box>

                    {
                        props.lang && props.lang === "ENG" ? (

                            <Typography 
                                variant="h4" 
                                sx={{ 
                                    textAlign: 'center', 
                                    fontFamily: 'Nunito Sans',
                                    color: '#380036',
                                }}
                            >
                                Save {saveMinutes} hours and ${dollar} per month
                            </Typography>

                        ) : (

                            <Typography 
                                variant="h4" 
                                sx={{ 
                                    textAlign: 'center', 
                                    fontFamily: 'Nunito Sans',
                                    color: '#380036',
                                }}
                            >
                                Ahorrar {saveMinutes} horas y ${dollar} por mes
                            </Typography>

                        )
                    }

                    

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
                        <Typography variant="h6">Start Right Now</Typography>
                    ) : (
                        <Typography variant="h6">Comience ahora mismo</Typography>
                    )
                }
                
            </Button>
        </Box>

    </Box>
  )
}

export default MintuesSaved