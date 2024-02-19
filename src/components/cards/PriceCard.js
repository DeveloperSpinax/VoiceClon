import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SendIcon from '@mui/icons-material/Send';
import { Divider, ListItemButton, Tooltip } from '@mui/material';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const mainThemeColor = "#3b99ed";

const proffesionalPlan = [
    'Personalized Dashboard with client information, case overview, document repository, appointment scheduler, and messaging center',
    'Includes up to 5,000 messages per month (averaging 300 chat sessions)',
    'Comprehensive ChatLegalBot hosting',
    'Installation, and support',
    'Perfect for those seeking an efficient legal assistant'
]

const PriceCard = (props) => {
  return (
    <Card 
        variant="outlined" 
        sx={{ 
            background: '#fff', 
            border: '1px solid #3b99ed',
            height: props.lang === "ENG" ? '800px' : "820px",
            display: 'flex',        // <-- Added flexbox layout
            flexDirection: 'column', // <-- Set direction to column
        }}>

          <CardContent sx={{ flexGrow: 1 }}>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                height: 'auto',
                flexDirection: 'column',
            }}>   
                <Typography sx={{ color: '#380036', fontFamily: 'Catamaran' }} color="text.secondary" gutterBottom variant="h4">
                {props.title}
                </Typography>

                <Divider sx={{ background: '#3b99ed', width: '15%', mt: -1, borderWidth: '1px' }} />

                <Typography sx={{ color: `#380036`, fontFamily: 'Nunito Sans', mt: '16px !important' }} color="text.secondary" gutterBottom variant="body1">
                    {props.descr}
                </Typography>

                {
                    props.special === true ? (

                        <Typography variant="h5" component="div" sx={{ color: '#3b99ed', fontSize: '40px', fontWeight: 800, fontFamily: 'Nunito Sans', mt: '16px !important' }}>
                            {props.price}
                        </Typography>

                    ) : (

                        <Typography variant="h5" component="div" sx={{ color: '#3b99ed', fontSize: '40px', fontWeight: 800, fontFamily: 'Nunito Sans', mt: '16px !important' }}>
                            <sup style={{ fontWeight: 400, fontSize: 20, fontFamily: 'Catamaran' }}>$ </sup>
                            {props.price}
                            <sub style={{ fontWeight: 400, fontSize: 12, fontFamily: 'Catamaran' }}>/{props.time}</sub>
                        </Typography>

                    )
                }

                

                <Typography variant='body2' sx={{ fontFamily: 'Nunito Sans', mt: '16px !important' }}> 
                    <span style={{ fontFamily: 'Catamaran' }}>{props.includes}</span>&nbsp;every month&nbsp;
                    <Tooltip 
                        title="What does dubbing minute mean? 1 minute is equal to 1 min of final translated video. For example, if you have a five-minute video that needs to be translated into two new languages, you will need 10 minutes."
                    >
                        <InfoOutlinedIcon sx={{ height: 15, width: 15, color: '#380036', pt: 0.5 }} />
                    </Tooltip>
                </Typography>

                <Typography variant='body2' sx={{ fontFamily: 'Nunito Sans' }}> 
                    <span style={{ fontFamily: 'Catamaran' }}>{props.extra}</span>&nbsp;per min&nbsp;
                </Typography>

                <Divider sx={{ background: '#e9c8e8', width: '100%', mt: 0.2 }} />

            </Box>

            


            <List sx={{ p: 0, m: 0 }}>

                {
                    props.plan.map((item, index) => (
                        <ListItem key={index}>
                            <ListItemIcon sx={{ ml: -2 }}>
                                <DoneOutlinedIcon sx={{ color: '#380036' }} />
                            </ListItemIcon>
                            <ListItemText
                                sx={{ 
                                    ml: -2,
                                    p: 0

                                }} 
                                primary={
                                    <span 
                                        style={{ 
                                            fontFamily: 'Nunito Sans', 
                                            fontSize: '15px', 
                                            fontWeight: 500, 
                                            color: '#380036' 
                                        }}>
                                            {item}
                                    </span>
                                }  
                            />
                        </ListItem>

                    ))
                } 
            </List>


            
          </CardContent>

          <CardActions >
          {
                props.lang && props.lang === "ENG" ? (
                    <Button sx={{
                        position: 'relative', 
                        boxShadow: 'none', 
                        color: '#fff', 
                        background: 'linear-gradient(45deg, #2786d7, #5df9fd)',
                        '&:hover': { background: 'linear-gradient(45deg, #2786d7, #5df9fd)' } }} 
                        variant="contained" 
                        size="large" 
                        fullWidth
                    >
                        Try for free
                    </Button>
                        
                    ) : (

                        <Button sx={{ 
                            position: 'relative', 
                            boxShadow: 'none', 
                            color: '#fff', 
                            background: 'linear-gradient(45deg, #2786d7, #5df9fd)', 
                            '&:hover': { background: 'linear-gradient(45deg, #2786d7, #5df9fd)' } }} 
                            variant="contained" 
                            size="large" 
                            fullWidth
                        >
                            Prueba gratis
                        </Button>

                    )
                }
          </CardActions>

        </Card>
    );
}

export default PriceCard