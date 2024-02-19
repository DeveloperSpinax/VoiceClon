import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Logo from '../../static/landingPage/Logo_edited.png';
import profilePic from '../../static/dashboard/profilePic.webp'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useNavigate } from 'react-router';
import DropDownFlags from '../dropDown/DropDownFlags';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));


const settings = ['Profile', 'Logout'];
const icons = [
  <PersonRoundedIcon fontSize="small" sx={{ color: "#000" }} />,
  <LogoutIcon fontSize="small" sx={{ color: "#000" }} />,
]
const route = [
  '/dashboard',
  '/'
]

const NavbarDashboard = (props) => {

    const [profileImage, setProfileImage] = React.useState(profilePic);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [renderLang, setRenderLang] = React.useState('ENG');

    const navigate = useNavigate();
  
    
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    const handleLangChange = (newLang) => {
      props.setParentLang(newLang)
    }

    const handleMenuItemClick = (page, index) => {
      if (page === "Logout"){
      //   axios.get("http://51.20.63.18/api/auth/logout")
      //   .then((response) => {
      //     Cookies.remove("token")
      //     toast(response.data.message, { type: ["success"] })
          navigate(route[index])
        // })
        // .catch((err) => {
        //   toast("Invalid Token - Logout fail", { type: ["error"] })
        // })
      }
      else if (page === "Support"){
        // setOpenSupport(true)
        navigate(route[index])
      }
      handleCloseUserMenu(); // Close the menu after clicking a menu item
    };
  
    return (
      <AppBar position="static" sx={{ background: '#fff', boxShadow: 'none', py: 1.5, borderBottom: '1px solid  rgb(234, 236, 240)' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            <Box
                component="img"
                sx={{
                    height: "60px",
                    display: { xs: 'flex', color: '#000' },
                }}
                alt="VoiceClon"
                src={Logo}
            />

            <Box sx={{ flexGrow: 1 }} />
            

            <Box sx={{
              mr: 2.2,
              mt: -0.2
            }}>
              <DropDownFlags handleParentLang={handleLangChange} setRenderLang={setRenderLang}  />
            </Box>

            <Box sx={{
                mr: 2.2,
                mt: -0.5
            }}>
                <Stack direction="column">

                    <Typography variant="subtitle1" sx={{ color: '#667085', fontFamily: 'Nunito Sans', fontWeight: 500 }}>0/3 min</Typography>
                    <BorderLinearProgress variant="determinate" value={0} />

                </Stack>
                
            </Box>

            <Box>
                <Button 
                variant="outlined"
                sx={{ 
                    color: "#2786d7", 
                    background: '#eff7ff', 
                    mr: 2, 
                    borderRadius: '10px',
                    borderColor: '#2786d7',
                    textTransform: 'none',
                    '&:hover': {
                        background: "#2786d7",
                        color: '#fff' 
                    } 
                  }}
                >
                    View Plan
                </Button>
            </Box>
  
            <Box sx={{ 
                flexGrow: 0, 
                borderRadius: "50%",
                height: '50px',
                width: '50px',
                border: "2px solid rgb(234, 236, 240)", 
                background: '#000',
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                backgroundImage: `url(${[profileImage]})`,
                backgroundSize: 'cover', // Fit the background image within the circle
                backgroundPosition: 'center center',
                }}
            >
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ height: 50, width: 50 }} />
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, index) => (
                <MenuItem key={setting} onClick={() => handleMenuItemClick(setting, index)}>
                  <ListItemIcon>
                    {icons[index]}
                  </ListItemIcon>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
              </Menu>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    );
}

export default NavbarDashboard