import React from 'react';
import { Grid, Typography, Stack, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from '@mui/material';
import logo from '../../static/landingPage/Logo_edited.png';

const Footer = (props) => {
    const isSmallScreen = useMediaQuery('(max-width: 850px)')
    const isMobileScreen = useMediaQuery('(max-width: 700px)')
  return (
    <Grid container sx={{
        background: '#10100d',
        borderTop: '1px solid #0a0a0a',
        boxShadow: '1px 1px 1px 1px black',
        px: isSmallScreen ? (isMobileScreen ? 5 : 10) : 17,
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
                        height: isSmallScreen ? (isMobileScreen ? "40px" : "60px") : "80px", // Set the height of the logo as needed
                    }}
                    alt="Wavelogo"
                    src={logo}
                />
            </Link>

            <Stack direction="row" spacing={0.6} sx={{ ml: 2, alignItems: 'center' }}>
                {
                    props.lang && props.lang === "ENG" ? (
                        <Typography variant="body2" align="center" sx={{ color: '#fff' }}>{'Copyright'}</Typography>
                    ) : (
                        <Typography variant="body2" align="center" sx={{ color: '#fff' }}>{'Derechos de autor'}</Typography>
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
                <GoogleIcon sx={{ color: '#fff', height: isMobileScreen && "18px" }} />
                <FacebookIcon sx={{ color: '#fff', height: isMobileScreen && "18px" }} />
                <GitHubIcon sx={{ color: '#fff', height: isMobileScreen && "18px" }} />
                <TwitterIcon sx={{ color: '#fff', height: isMobileScreen && "18px" }} />
                <LinkedInIcon sx={{ color: '#fff', height: isMobileScreen && "18px" }} />
            </Stack>
        </Grid>
    </Grid>
  )
}

export default Footer