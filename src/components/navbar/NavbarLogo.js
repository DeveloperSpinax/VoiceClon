// React builtin components imports
import React from 'react';
import { Link } from 'react-router-dom';
// Custom component React

// Material UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

// Icons and Images
import Logo from '../../static/landingPage/Logo_edited.png';
import DropDownFlags from '../dropDown/DropDownFlags';
import { useMediaQuery } from '@mui/material';


function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 5 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const NavbarLogo = (props) => {

  const [renderLang, setRenderLang] = React.useState('ENG');
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0 && !hasScrolled) {
        setHasScrolled(true);
      } else if (scrollTop === 0 && hasScrolled) {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled]);

  const handleLangChange = (newLang) => {
    props.setParentLang(newLang)
  }

  return (
      <React.Fragment>
        <CssBaseline />
        <ElevationScroll {...props} >
        <AppBar 
          position="sticky" 
          sx={{ 
            background: '#fff',
            py: hasScrolled ? 1 : 3,
            transition: 'padding 0.3s ease'
          }}
        >
          <Container maxWidth={isLargeScreen ? "xl" : "lg"}>
            <Toolbar disableGutters>

                <Box
                    component="img"
                    sx={{
                        height: "63px",
                        display: { xs: 'flex', color: '#000' },
                        ml: { sm: 2, md: 3, lg: 10 }
                    }}
                    alt="VoiceClon"
                    src={Logo}
                />

                <Typography
                  variant="h4"
                  noWrap
                  sx={{
                  ml: 2,
                  mt: 1.5,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'Catamaran',
                  fontWeight: 1000,
                  letterSpacing: '.2rem',
                  background: 'linear-gradient(45deg, #2786d7, #5df9fd)',
                  color: 'transparent',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  textDecoration: 'none',
                }}
                >
                    VoiceClon
                </Typography>

                <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>

                  <Box sx={{
                    mr: 1
                  }}>
                    <DropDownFlags handleParentLang={handleLangChange} setRenderLang={setRenderLang}  />
                  </Box>

                  {
                    renderLang === "ENG" && (
                      <>
                        <Button sx={{ 
                          mr: 2.5,
                          mt: 0.5,
                          color: '#3b99ed', 
                          textTransform: 'capitalize',
                          }}
                          component={Link}
                          to="/login"
                          >
                              <Typography variant="h6" sx={{ fontWeight: 700 }}>Login</Typography>
                        </Button>
                        <Button sx={{
                            boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)', 
                            color: '#fff', 
                            mr: { xs: 2, md: 8},
                            background: 'linear-gradient(20deg, #2786d7, #5df9fd)',
                            borderRadius: '5px', 
                            textTransform: 'capitalize', 
                            '&:hover': { 
                                bgcolor: 'linear-gradient(60deg, #33CCFF,#D499FF)',
                                boxShadow: '0px 3px 5px -1px rgb(106 207 179 / 82%), 0px 6px 10px 0px rgb(219 148 189 / 77%), 0px 1px 18px 0px rgb(144 214 223)'
                                } 
                            }} 
                            variant="contained" 
                            component={Link} 
                            to="/signup"
                            size="large"
                        >
                            <Typography variant="h6">Sign Up</Typography>
                        </Button>
                      </>
                    )
                  }

                  {
                    renderLang === "ESP" && (
                      <>
                        <Button sx={{ 
                          mr: 2.5,
                          mt: 0.5,
                          color: '#3b99ed', 
                          textTransform: 'capitalize',
                          }}
                          component={Link}
                          to="/login-esp"
                          >
                              <Typography variant="h6" sx={{ fontWeight: 700 }}>Acceso</Typography>
                        </Button>
                        <Button sx={{
                            boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)', 
                            color: '#fff', 
                            mr: { xs: 2, md: 8},
                            background: 'linear-gradient(20deg, #2786d7, #5df9fd)',
                            borderRadius: '5px', 
                            textTransform: 'capitalize', 
                            '&:hover': { 
                                bgcolor: 'linear-gradient(60deg, #33CCFF,#D499FF)',
                                boxShadow: '0px 3px 5px -1px rgb(106 207 179 / 82%), 0px 6px 10px 0px rgb(219 148 189 / 77%), 0px 1px 18px 0px rgb(144 214 223)'
                                } 
                            }} 
                            variant="contained" 
                            component={Link} 
                            to="/signup-esp"
                            size="large"
                        >
                            <Typography variant="h6">Inscribirse</Typography>
                        </Button>
                      </>
                    )
                  }
                </Box>
    
            </Toolbar>
          </Container>
        </AppBar>
        </ElevationScroll>
      </React.Fragment>
    );
}

export default NavbarLogo