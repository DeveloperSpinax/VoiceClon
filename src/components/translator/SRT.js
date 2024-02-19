import { Typography, Box, Grid, Stack, IconButton, Divider, Button } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

const SRT = () => {


  return (
    <Stack direction="column" spacing={2} sx={{ mt: 1 }}>

        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mr: 1,
            flexDirection: 'row',
        }}>

            <Box sx={{ mr: 2 }}>
                <Button 
                endIcon={<KeyboardVoiceIcon />}
                sx={{
                    textTransform: 'none',
                    color: '#86919d',
                    '&:hover': {
                        background: 'transparent',
                        color: '#000'
                    }
                }}>
                    <Typography 
                        variant="body2" 
                        sx={{ 
                            fontFamily: 'Catamaran', 
                            mt: '3px !important'
                        }}
                    >
                            Speaker
                    </Typography>
                </Button>
            </Box>

            <Typography variant="body" sx={{ fontFamily: 'Catamaran', color: '#86919d' }}>00:00:01,134 &nbsp;</Typography>
            <Divider sx={{ width: "3%", border: '1px solid #86919d' }} />
            <Typography variant="body" sx={{ fontFamily: 'Catamaran', color: '#86919d' }}>&nbsp; 00:00:08,370</Typography>

            <Box sx={{ ml: 2 }}>
                <Button 
                endIcon={<GraphicEqIcon />}
                sx={{
                    textTransform: 'none',
                    color: '#86919d',
                    '&:hover': {
                        background: 'transparent',
                        color: '#000'
                    }
                }}>
                    <Typography 
                        variant="body2" 
                        sx={{ 
                            fontFamily: 'Catamaran',
                            mt: '3px !important'
                        }}
                    >
                            Clone
                    </Typography>
                </Button>
            </Box>

        </Box>

        <Box>
            <Grid container>

                <Grid item xs={6.06}>
                    <Box 
                    sx={{
                        background: '#fff',
                        borderBottom: '1px solid rgb(234, 236, 235)',
                        borderRight: '1px solid rgb(234, 236, 235)',
                        py: 2,
                        px: 1,
                        minHeight: '100px'
                    }}>
                        <Typography variant="body" sx={{ color: '#86919d', fontFamily: 'Nunito Sans' }}>A product roadmap, no matter how good it may appear to be, has no value if key product stakeholders aren't aligned around it.</Typography>
                    </Box>
                </Grid>

                <Grid item xs={5.94}>
                    <Stack direction="row"> 
                        <Box sx={{ 
                            pl: 3,
                            background: '#fff',
                            borderBottom: '1px solid rgb(234, 236, 235)',
                            py: 2,
                            pr: 2,
                            minHeight: '100px'
                        }}>
                            <Typography variant="body" sx={{ color: '#86919d', fontFamily: 'Nunito Sans' }}>Una hoja de ruta del producto, por muy buena que parezca, no tiene ningún valor si los principales interesados en el producto no están alineados en torno a ella.</Typography>
                        </Box>
                        <Box sx={{ 
                            display: 'flex',
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                        }}>
                            <IconButton sx={{ height:2, width:2 }}>
                                <WarningAmberIcon  sx={{ color: '#a90a0a', height:20, width:20 }} />
                            </IconButton>
                        </Box>
                    </Stack>
                </Grid>

            </Grid>
        </Box>

    </Stack>
  )
}

export default SRT