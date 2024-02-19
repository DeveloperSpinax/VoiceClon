import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from '@mui/material';
import logo from '../../static/landingPage/Logo_edited.png';

const Footer = (props) => {
  return (
    <Grid container sx={{
        background: '#10100d',
        borderTop: '1px solid #0a0a0a',
        boxShadow: '1px 1px 1px 1px black',
        px: 17,
        }}>
        <Grid item xs={6} sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: '105px', // Set a fixed height for the left side
            }}>
            <Link to="/">
                <Box
                    component="img"
                    sx={{
                        height: '80px', // Set the height of the logo as needed
                    }}
                    alt="Wavelogo"
                    src={logo}
                />
            </Link>

            <Stack direction="row" spacing={0.6} sx={{ ml: 2, alignItems: 'center' }}>
                {
                    props.lang && props.lang === "ENG" ? (
                        <Typography variant="body2" align="center" sx={{ color: '#fff' }}>{'Copyright © '}</Typography>
                    ) : (
                        <Typography variant="body2" align="center" sx={{ color: '#fff' }}>{'Derechos de autor © '}</Typography>
                    )
                }
                <Typography variant='body2' align='center' sx={{ color: '#3b99ed', fontWeight: 300 }} component="a" href="/">VoiceClon</Typography>
                <Typography variant="body2" align="center" sx={{ color: '#fff' }}>{new Date().getFullYear()}</Typography>
            </Stack>
        </Grid>

        <Grid item xs={6} sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            height: '100px', // Set a fixed height for the right side
            }}>
            <Stack direction="row" spacing={2}>
                <GoogleIcon sx={{ color: '#fff' }} />
                <FacebookIcon sx={{ color: '#fff' }} />
                <GitHubIcon sx={{ color: '#fff' }} />
                <TwitterIcon sx={{ color: '#fff' }} />
                <LinkedInIcon sx={{ color: '#fff' }} />
            </Stack>
        </Grid>
    </Grid>
  )
}

export default Footer