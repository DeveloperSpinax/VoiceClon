import { Grid, Stack, Typography, Box } from '@mui/material'
import React from 'react';
import { DefaultPlayer} from 'react-html5video';
import 'react-html5video/dist/styles.css';



const FourSteps = (props) => {
  return (
    <Box sx={{
        px: 16,
        mb: 4
    }}>

        <Grid container spacing={5}>
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

            <Grid item xs={6} sx={{ mt: -3 }}>
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
        </Grid>

    </Box>
  )
}

export default FourSteps