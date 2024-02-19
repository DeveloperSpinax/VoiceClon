import { Typography, Box, Button, Stack, Grid, Accordion, AccordionSummary, AccordionDetails, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles';
import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import testVideo from  '../../static/video/Test video original.mp4'
import Skeleton from '@mui/material/Skeleton';

const SampleDisplay = (props) => {
    
    const [thumbnailTest, setThumbnailTest] = React.useState('')
    const [isTrue, setIsTrue] = React.useState(true)

    const createThumbnailFromVideo = (videoFile) => {
        const video = document.createElement('video');
        const canvas = document.createElement('canvas');
      
        video.src = videoFile;
      
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
            setThumbnailTest(thumbnailDataUrl);
          };
        };
      };

      React.useEffect(() => {
        createThumbnailFromVideo(testVideo)

        setTimeout(() => {
            setIsTrue(false)
        }, 4000)

      }, [])

    return (
        <Box sx={{
            color: 'black',
            background: '#fff',
            border: "1px solid rgba(0, 0, 0, 0.2)",
            borderRadius: '10px',
            mb: 2,
        }}>
            {
                props.load === true ? (

                    

                    <Grid container>

                        <Grid item xs={4}>
                            <Box sx={{
                                    height: '50px',
                                    width: '100px',
                                    borderRadius: '10px',
                                    m: 1.5
                                }}
                            >
                               <Skeleton variant="rounded" width={100} height={50} />
                            </Box>
                        </Grid>

                        <Grid item xs={6.5}>
                            <Box sx={{
                                mt: 1.5,
                                display: 'flex',
                                justifyContent: 'flex-start',
                                flexDirection: 'column',
                            }}>
                                <Skeleton variant="rounded" width={80} height={15} />
                                <Box sx={{ mt: 0.5 }} />
                                <Skeleton variant="rounded" width={60} height={15} />
                            </Box>
                        </Grid>

                        <Grid item xs={1.5}>
                            <Box sx={{
                                mt: 3,
                                display: 'flex',
                                justifyContent: 'center',
                            }}>
                                <Skeleton variant="rounded" width={15} height={20} />
                            </Box>
                        </Grid>
                    
                    </Grid>

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
                                    src={thumbnailTest} 
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
                                Test video original 
                            </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={1.5}>
                            <Box sx={{
                                mt: 1.5
                            }}>
                            <IconButton disabled>
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

export default SampleDisplay