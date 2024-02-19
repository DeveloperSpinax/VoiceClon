import { Typography, Box, Button } from '@mui/material'
import React from 'react'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import firstVideo from '../../static/dashboard/firstvideosample.jpeg'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import { styled } from '@mui/material/styles';
import MainVide from '../dialogs/MainVide';
import SampleVideo from '../dialogs/SampleVideo';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });


const UploadVideoFirst = (props) => {

    const [file, setFile] = React.useState([]);
    const [openMainVide, setOpenMainVide] = React.useState(false);
    const [openTestVide, setOpenTestVide] = React.useState(null);
    const [isTrue, setIsTrue] = React.useState(true);
    const [isTrueReally, setIsTrueReally] = React.useState(true);

    const handleClickOpenMainVide = () => {
        setOpenMainVide(true);
        setTimeout(() => {
            setIsTrueReally(false)
        }, 4000)
    };

    const handleCloseMainVide = () => {
        setOpenMainVide(false);
        setIsTrueReally(true)
    };

    const handleClickOpenTestVide = () => {
        setOpenTestVide(true);
        setTimeout(() => {
            setIsTrue(false)
        }, 4000)
    };

    const handleCloseTestVide = () => {
        setOpenTestVide(false);
        setIsTrue(true);
    };
    
    const handleFileUpload = (event) => {
        // const files = event.target.files;
        console.log("Ouch")
    }

  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        mt: 3,
    }}>

        {
            props.lang === "ENG" ? (
                <>
                    <Typography variant="h4" sx={{ textAlign: 'center', fontFamily: 'Catamaran' }}>Let's translate your first video!</Typography>
                    <Typography variant="body2" sx={{ textAlign: 'center', fontFamily: 'Nunito Sans', fontSize: '20px', mt: '8px !important', color: "#667085" }}>Translate a video today,</Typography>
                    <Typography variant="body2" sx={{ textAlign: 'center', fontFamily: 'Nunito Sans', fontSize: '20px', mt: '4px !important', color: "#667085" }}>take over the world tomorrow 🌍</Typography>
                </>

            ) : (
                <>
                    <Typography variant="h4" sx={{ textAlign: 'center', fontFamily: 'Catamaran' }}>¡Traduzcamos tu primer vídeo!</Typography>
                    <Typography variant="body2" sx={{ textAlign: 'center', fontFamily: 'Nunito Sans', fontSize: '20px', mt: '8px !important', color: "#667085" }}>Traduce un video hoy,</Typography>
                    <Typography variant="body2" sx={{ textAlign: 'center', fontFamily: 'Nunito Sans', fontSize: '20px', mt: '4px !important', color: "#667085" }}>conquistar el mundo mañana 🌍</Typography>
                </>
            )
        }   

        <Box sx={{
            mt: 3,
            py: 1,
            px: 1,
            width: '25%',
            border: '2px solid #2786d7',
            borderRadius: '30px',
            '&:hover': {
                background: '#eff7ff',  
            }
        }}>
            <Button
                // component="label"
                onClick={handleClickOpenMainVide}
                variant="contained"
                fullWidth
                startIcon={<FileUploadOutlinedIcon sx={{ height: 30, width: 30 }} />}
                sx={{
                    background: '#2786d7',
                    color: "#fff",
                    height: '50px',
                    textTransform: 'none',
                    borderRadius: '20px'
                }}
            >
                
                {
                    props.lang === "ENG" ? (
                        <Typography variant="h6" sx={{ textAlign: 'center', fontFamily: 'Nunito Sans' }}>Upload video</Typography>
                    )  : (
                        <Typography variant="h6" sx={{ textAlign: 'center', fontFamily: 'Nunito Sans' }}>Subir vídeo</Typography>
                    )   
                }
                {/* <VisuallyHiddenInput accept='video/*' type='file' onChange={handleFileUpload} /> */}
            </Button>
            
        </Box>

        <MainVide handleClose={handleCloseMainVide} open={openMainVide} load={isTrueReally} />

        {
            props.lang === "ENG" ? (
                <Typography variant="body2" sx={{ textAlign: 'center', fontFamily: 'Nunito Sans', fontSize: '18px', mt: '16px !important', color: "#667085" }}>or</Typography>
            ) : (
                <Typography variant="body2" sx={{ textAlign: 'center', fontFamily: 'Nunito Sans', fontSize: '18px', mt: '16px !important', color: "#667085" }}>O</Typography>
            )
        }

        <Box
            component="img"
            sx={{
                height: '380px'
            }}
            alt="VoiceClon"
            src={firstVideo}
        />

        <Box sx={{
            mb: 2
        }}>
            <Button
                // component="label"
                onClick={handleClickOpenTestVide}
                variant="outlined"
                fullWidth
                startIcon={<VideocamOutlinedIcon sx={{ height: 30, width: 30 }} />}
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
                {
                    props.lang === "ENG" ? (
                        <Typography variant="h6" sx={{ textAlign: 'center', fontFamily: 'Nunito Sans' }}>Use our sample video</Typography>
                    )  : (
                        <Typography variant="h6" sx={{ textAlign: 'center', fontFamily: 'Nunito Sans' }}>Utilice nuestro vídeo de muestra</Typography>
                    )   
                }
                {/* <VisuallyHiddenInput accept="video/*" type="file" /> */}
            </Button>
        </Box>

        <SampleVideo handleClose={handleCloseTestVide} open={openTestVide} load={isTrue} />

    </Box>
  )
}

export default UploadVideoFirst