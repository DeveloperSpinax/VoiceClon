// React builtin components imports
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
// Custom component React
import DropDownFlags from '../dropDown/DropDownFlags';

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
import Menu from '@mui/material/Menu';
import { IconButton, useMediaQuery, MenuItem, MenuList, ListItemIcon } from '@mui/material';


// Icons and Images
import Logo from '../../static/landingPage/Logo_edited.png';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import EmojiFlagsOutlinedIcon from '@mui/icons-material/EmojiFlagsOutlined';


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

const page = [
  { name: 'Menu 1', subItems: ['Submenu 1', 'Submenu 2'] },
  { name: 'Menu 2', subItems: ['Submenu 3', 'Submenu 4'] },
  { name: 'Menu 3', subItems: ['Submenu 5', 'Submenu 6'] }
];

const pages = [
  {
    name: "Use Case",
    icon: <VerifiedUserOutlinedIcon />,
    subMenu : ["Product Marketing", "Content Marketing"],
    subIcon : [<LocalGroceryStoreIcon />, <AdsClickOutlinedIcon />],
    link: ''
  },
  {
    name: "Feature",
    icon: <OndemandVideoOutlinedIcon />,
    subMenu : ["Video Translate"],
    subIcon : [<PlayArrowOutlinedIcon />],
    link: ''
  },
  {
    name: "Resource",
    icon: <CategoryOutlinedIcon />,
    subMenu : ["Creator Fund", "Affiliate Programme", "Careers"],
    subIcon : [<LocalAtmOutlinedIcon />, <ContentPasteIcon />, <PersonSearchOutlinedIcon />],
    link: ''
  },
  {
    name: "Pricing",
    icon: <AttachMoneyOutlinedIcon />,
    subMenu : [],
    subIcon: [],
    link: ''
  },
  {
    name: "Language",
    icon: <TranslateOutlinedIcon />,
    subMenu: ["English", "Spanish"],
    subIcon: [<FlagOutlinedIcon />, <EmojiFlagsOutlinedIcon/>],
    link: ''
  },
]

const NavbarLogo = (props) => {

  const [renderLang, setRenderLang] = React.useState('ENG');
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobileScreen = useMediaQuery("(max-width: 900px)")
  const isTabletScreen = useMediaQuery("(max-width: 1200px)")
  const [anchorElNav, setAnchorElNav] = React.useState(false);
  const [expandedMenuIndex, setExpandedMenuIndex] = useState(null);
  const [iconDisplay, setIconDisplay] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    setIconDisplay(true)
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setExpandedMenuIndex(null);
    setIconDisplay(false)
  };

  const handleMenuExpandToggle = (index) => {
    setExpandedMenuIndex(prevIndex => (prevIndex === index ? null : index)); // Toggle open submenu index
  };

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
                        height: isTabletScreen ? "50px" : "63px",
                        display: { xs: 'flex', color: '#000' },
                        ml: { sm: 2, md: 3, lg: 10 }
                    }}
                    alt="VoiceClon"
                    src={Logo}
                />

                <Typography
                  variant={isTabletScreen ? "h5" : "h4"}
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
                    mr: 1,
                    display: isMobileScreen && "none"
                  }}>
                    <DropDownFlags handleParentLang={handleLangChange} setRenderLang={setRenderLang}  />
                  </Box>

                  <Box>
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
                                <Typography variant={isMobileScreen ? "body2" : "h6"} sx={{ fontWeight: 700, fontSize: "18px" }}>Login</Typography>
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
                              size={isMobileScreen ? "large" : "large"}
                          >
                              <Typography variant={isMobileScreen ? "body2" : "h6"} sx={{ fontWeight: 700, fontSize: "18px" }}>Sign Up</Typography>
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
                                <Typography variant={isMobileScreen ? "body2" : "h6"} sx={{ fontWeight: 700, fontSize: "18px" }}>Acceso</Typography>
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
                              <Typography variant={isMobileScreen ? "body2" : "h6"} sx={{ fontWeight: 700, fontSize: "18px" }}>Inscribirse</Typography>
                          </Button>
                        </>
                      )
                    }
                  </Box>
                </Box>

                <Box sx={{
                  display: isMobileScreen ? "flex" : "none"
                }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    {
                      !iconDisplay ? (
                        <MenuIcon sx={{ color: "#3b99ed" }} />
                      ) : (
                        <CancelOutlinedIcon sx={{ color: "#3b99ed" }} />
                      )
                    }
                    
                  </IconButton>

                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    PaperProps={{
                      sx: {
                        width: '100%',
                        maxWidth: '100%',
                        backgroundColor: 'white',
                        ml: 2,
                      },
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                  >
                    {pages.map((page, index) => (
                      <div key={page.name}>
                        <MenuItem
                          onClick={() => handleMenuExpandToggle(index)} // Toggle the menu expand on click
                        >
                          <ListItemIcon>
                            {page.icon}
                          </ListItemIcon>
                          <Typography>{page.name}</Typography>
                          {expandedMenuIndex === index ? <ExpandLess /> : <ExpandMore />}
                        </MenuItem>
                        {expandedMenuIndex === index && ( // Render sub-items only if menu is expanded
                          page.subMenu.map((subItem, subIndex) => (
                            <MenuItem key={subIndex} onClick={handleCloseNavMenu} sx={{ ml:2 }}>
                              <ListItemIcon>{page.subIcon[subIndex]}</ListItemIcon>
                              <Typography>{subItem}</Typography>
                            </MenuItem>
                          ))
                        )}
                      </div>
                    ))}
                  </Menu>
                  

                </Box>
    
            </Toolbar>
          </Container>
        </AppBar>
        </ElevationScroll>
      </React.Fragment>
    );
}

export default NavbarLogo