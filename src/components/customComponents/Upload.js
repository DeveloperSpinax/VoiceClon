import { Typography, Box, Button, Stack, Grid, Skeleton, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles';
import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

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

const Upload = (props) => {

    const [uploadFile, setUploadFile] = React.useState(null);
    const [thumbnail, setThumbnail] = React.useState(null);
    const [video, setVideo] = React.useState(null);

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
          return text.slice(0, maxLength) + '...';
        }
        return text;
      };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        setVideo(file)
        if (file && file.type.startsWith('video/')) {
            setUploadFile(URL.createObjectURL(file));
      
            // Create a thumbnail from the first frame
            createThumbnailFromVideo(file);
          } else {
            alert('Please upload a valid video file.');
          }
    }

    const handleDeleteFile = (event) => {
        setUploadFile(null)
        setThumbnail(null)
        setVideo(null)
    }

    const createThumbnailFromVideo = (videoFile) => {
        const video = document.createElement('video');
        const canvas = document.createElement('canvas');
      
        video.src = URL.createObjectURL(videoFile);
      
        video.onloadeddata = () => {
          // Set the time to seek to the 3rd or 4th second, adjust as needed
          const seekTime = 3; // Adjust this value to seek to the desired second
          video.currentTime = seekTime;
      
          // When the video is at the desired frame, capture the thumbnail
          video.onseeked = () => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
      
            const thumbnailDataUrl = canvas.toDataURL('image/jpeg');
            setThumbnail(thumbnailDataUrl);
          };
        };
      };
      

    return (
        <Box sx={{
            color: 'black',
            background: '#fff',
            border: "1px dashed rgb(234, 236, 240)",
            mb: 2,
            '&:hover': {
                border: "1px dashed rgba(152, 162, 179, 0.5)"    
            }
        }}>
            {
                thumbnail === null ? (
                    <Button sx={{
                        height: '100%',
                        width: '100%',
                        p: 2,
                        textTransform: 'none',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        '&:hover': {
                            background: 'rgba(152, 162, 179, 0.1)'
                        }
                    }}
                    component="label"
                    >
                        <Stack direction="column">
                        <Typography sx={{ textAlign: 'center', fontFamily: 'Nunito Sans', color: 'rgb(102, 112, 133)', fontSize: '14px' }}>
                            <span style={{ fontWeight: 600 }}>Click to choose a file</span> by clicking on this pan
                        </Typography>
        
                        <Typography sx={{ textAlign: 'center', fontFamily: 'Nunito Sans', color: 'rgb(102, 112, 133)', fontSize: '14px' }}>
                            MP4, MOV, WEBM, MKV, MP3, WAV
                        </Typography>
                        </Stack>
                        <VisuallyHiddenInput accept="video/*" type="file" onChange={handleFileUpload} />
        
                        
                    </Button>
                ) : (
                        <Grid container>

                            <Grid item xs={4}>
                                <Box sx={{
                                        height: '50px',
                                        width: '100px',
                                        borderRadius: '10px',
                                        m: 1.5
                                    }}
                                >
                                    <img 
                                        src={thumbnail} 
                                        alt="Thumbnail" 
                                        style={{
                                            width: '100%', // Ensure the image width fills the box
                                            height: '100%', // Ensure the image height fills the box
                                            borderRadius: '10px',
                                            objectFit: 'cover', // You can adjust 'cover' to your preferred scaling
                                        }}
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={6.5}>
                                <Box sx={{
                                    mt: 1.5,
                                }}>
                                <Typography variant="body1" sx={{ fontFamily: 'Nunito Sans' }}>
                                    { video && truncateText(video.name, 50) }
                                </Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={1.5}>
                                <Box sx={{
                                    mt: 1.5
                                }}>
                                <IconButton onClick={handleDeleteFile}>
                                    <DeleteOutlineIcon />
                                </IconButton>
                                </Box>
                            </Grid>
                    
                        </Grid>
                    )
                
            } 
        </Box>
    )
}

export default Upload