import React from 'react'
import NavbarLogo from '../../components/navbar/NavbarLogo'
import { Box, Grid, Typography, Button, Stack } from '@mui/material'

const ProductMarket = () => {

  const [parentLang, setParentLang] = React.useState('ENG')

  return (
    <>
    <NavbarLogo setParentLang={setParentLang} />

        <Box sx={{
            px: 14,
        }}>
            <Grid container spacing={1}>

                <Grid item xs={12} md={4} >
                    <Stack
                        spacing={3.5} 
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            flexDirection: "column",
                            alignItems: 'flex-start',
                            py: 13,
                    }}>
                        <Typography 
                            variant="h4" 
                            sx={{
                                fontFamily: "Catamaran",
                                color: "#3b99ed",
                            }}
                        >
                            Explainer Videos
                        </Typography>
                        <Typography 
                            variant='h4'
                            sx={{
                                fontFamily: "Catamaran",
                                color: "#380036",
                                mt: "12px !important"
                            }}
                        >
                            Made Simple.
                        </Typography>
                        <Typography>
                            Just type, drag-and-drop to create a captivating <br/> explainer video in minutes.
                        </Typography>
                    </Stack>

                    <Box
                        sx={{
                            mt: 3,
                            
                        }}
                    >
                        <Button
                            variant="contained" 
                            size="large"
                            sx={{
                                background: "#3b99ed",
                                textTransform: "none",


                            }}
                        >
                            {parentLang === 'ENG' ? "Try VoiceClon for free" : "Prueba VoiceClon gratis" }
                        </Button>
                    </Box>

                </Grid>

                <Grid item xs={12} md={8}>

                    You tube link for explainer video

                </Grid>

            </Grid>
        </Box>
    </>
  )
}

export default ProductMarket