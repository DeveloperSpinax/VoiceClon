import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { Stack } from '@mui/material';
import logo from '../static/landingPage/Logo_edited.png'
import GoogleIcon from '@mui/icons-material/Google';
import bgImage from '../static/landingPage/background2.jpg'

function Copyright(props) {
    return (
        <Stack direction="row" spacing={0.5} sx={{ display: 'flex', justifyContent: 'center', mt: 1, alignItems: 'center' }}>
            <Typography 
                variant="body2" 
                align="center" 
                {...props} 
                sx={{ 
                    mt: 6,
                    fontFamily: 'Nunito Sans',
                }}
                >
                    {'Derechos de autor © '}
            </Typography>
            <Typography 
                variant='subtitle1' 
                align='center' 
                sx={{ 
                    color:'#fffb62', 
                    fontFamily: 'Catamaran',
                    background: 'linear-gradient(360deg, #2786d7, #5df9fd)',
                    color: 'transparent',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                }} 
                component={Link} 
                to="/"
            > 
                VoiceClon
            </Typography>
            <Typography variant="body2" align="center" {...props} sx={{ mt: 6, fontFamily: 'Nunito Sans', }}>{new Date().getFullYear()}</Typography>
        </Stack>
    );
}
  
const defaultTheme = createTheme();

const SignUpSpanish = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          username: data.get('username'),
          email: data.get('email'),
          password: data.get('password'),
          cpassword: data.get('cpassword'),
        });
    };
    
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container 
                component="main" 
                maxWidth="xs"
            >
                <Box
                    sx={{
                        mt: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        component={Link}
                        to="/" 
                        variant="h2" 
                        sx={{ 
                            background: 'linear-gradient(45deg, #2786d7, #5df9fd)',
                            color: 'transparent',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            fontFamily: 'Catamaran'
                        }}
                    >
                        VoiceClon
                    </Typography>

                    <Typography 
                        variant="h6" 
                        sx={{ 
                            color: '#000',
                            mt: 1,
                            fontFamily: 'Catamaran'
                        }}
                    >
                        Crear una cuenta
                    </Typography>

                    <Typography 
                            variant="subtitle2" 
                            sx={{ 
                                color: '#000',
                                fontFamily: 'Nunito Sans'
                            }}
                        >
                            🎥 Traduce tu primer vídeo 👋
                    </Typography>

                    <Box 
                        component="form" 
                        onSubmit={handleSubmit} 
                        noValidate 
                        sx={{ 
                            mt: 2,
                            position: 'relative', // set position relative
                            background: '#fff',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '30%',
                            width: '80%',
                            borderRadius: '10px',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            transition: '0.3s',
                            p: 3,  // Ensure this padding is the same width as your desired border width
                            '&::before': {  // Create the pseudo-element
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0,
                                zIndex: -1, // Place it behind the content
                                background: 'linear-gradient(60deg, #33CCFF,#D499FF)',
                                borderRadius: 'inherit', // Inherit the borderRadius from the parent
                                margin: '-2px'  // This will determine the width of your gradient border
                            }
                        }}
                    >
                        {/* Username */}
                        <Typography align="left" variant='body2' sx={{ fontFamily: 'Nunito Sans', letterSpacing: '0.5px' }}>Nombre de usuario</Typography>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            name="username"
                            size="small"
                            sx={{ 
                                mt: 0.3,
                                color: '#000',
                                fontFamily: 'Nunito Sans',
                                '& .MuiOutlinedInput-input': { // change color of input text
                                    color: '#000',  // specify your color here
                                    fontFamily: 'Nunito Sans'
                                },
                                '& .MuiOutlinedInput-root': { // for MUI version 5
                                    '& fieldset': {
                                        borderColor: '#3b99ed',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#3b99ed'
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#3b99ed', // on hover
                                    },
                                }

                            }}
                        />

                        {/* Email */}
                        <Typography align="left" variant='body2' sx={{ fontFamily: 'Nunito Sans', letterSpacing: '0.5px' }}>Correo electrónico</Typography>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            name="email"
                            size="small"
                            sx={{ 
                                mt: 0.3,
                                color: '#000',
                                fontFamily: 'Nunito Sans',
                                '& .MuiOutlinedInput-input': { // change color of input text
                                    color: '#000',  // specify your color here
                                    fontFamily: 'Nunito Sans'
                                },
                                '& .MuiOutlinedInput-root': { // for MUI version 5
                                    '& fieldset': {
                                        borderColor: '#3b99ed',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#3b99ed'
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#3b99ed', // on hover
                                    },
                                }

                            }}
                        />

                        {/* Password */}
                        <Grid container spacing={.5} sx={{ mt: -2.5 }}>
                            <Grid item xs={12}>
                                <Typography align="left" variant='body2' sx={{ mt: 2, fontFamily: 'Nunito Sans' }}>Contraseña</Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={0.5}>
                            <Grid item xs={12}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    type="password"
                                    id="password"
                                    name="password"
                                    size="small"
                                    sx={{ 
                                        mt: 0.3,
                                        color: '#000',
                                        fontFamily: 'Nunito Sans',
                                        '& .MuiOutlinedInput-input': { // change color of input text
                                            color: '#000',  // specify your color here
                                            fontFamily: 'Nunito Sans'
                                        },
                                        '& .MuiOutlinedInput-root': { // for MUI version 5
                                            '& fieldset': {
                                                borderColor: '#3b99ed',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#3b99ed'
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#3b99ed', // on hover
                                            },
                                        }

                                    }}
                                />
                            </Grid>
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ 
                                mt: 1,
                                textTransform: 'None', 
                                background: 'linear-gradient(60deg, #33CCFF,#D499FF)', 
                                color: '#fff', 
                                '&:hover': { 
                                    color: '#fff', 
                                    background: 'linear-gradient(60deg, #33CCFF,#D499FF)' 
                                } 
                            }}
                            // component={Link}
                            // to="/dashboard"

                        >
                            Inscribirse
                        </Button>

                        <Typography sx={{ mt: '16px !important', fontFamily: 'Nunito Sans', color: "#959595", textAlign: 'center', display: 'block', width: '100%', letterSpacing: '-2px' }}>
                                ________________________    O    _________________________
                        </Typography>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            startIcon={<GoogleIcon sx={{ 
                                    mt: -0.5,
                                    color: 'rgb(76, 175, 80)'
                                }} 
                                />
                            }
                            sx={{ 
                                mt: 1.5,
                                textTransform: 'None', 
                                background: '#fff',
                                border: '1px solid #959595', 
                                color: '#000',
                                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px;', 
                                '&:hover': { 
                                    color: '#000', 
                                    background: '#fff',
                                    border: '1px solid #959595',  
                                } 
                            }}
                        >
                            Regístrate con google
                        </Button>

                    </Box>

                    <Box
                        sx={{ 
                            mt: 3,
                            position: 'relative',
                            background: '#fff',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '30%',
                            width: '80%',
                            borderRadius: '10px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '10px',
                            transition: '0.3s',
                            px: 3,
                            
                        }}
                    >

                        <Stack direction="row" spacing={0.5}>
                            <Typography 
                                variant='subtitle2' 
                                align='center' 
                                sx={{
                                    fontFamily: 'Nunito Sans'
                                }}
                            >
                                ¿Ya tienes una cuenta?&nbsp;
                            </Typography>
                            <Typography 
                                variant='subtitle2' 
                                align='center' 
                                sx={{ 
                                    color:'#000', 
                                    fontFamily: 'Catamaran' 
                                }} 
                                component={Link} 
                                to="/login"
                            > 
                                Acceso
                            </Typography>
                        </Stack>

                    </Box>
                </Box>
                <Copyright />
            </Container>
        </ThemeProvider>
    );
}

export default SignUpSpanish