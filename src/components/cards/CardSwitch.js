import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import { Stack, Typography } from '@mui/material';

const CustomSwitch = styled(Switch)(({ theme }) => ({
    // For the thumb of the switch in both checked and unchecked states
    '& .MuiSwitch-thumb': {
      backgroundColor: '#3b99ed',
    },
    
    // For the hover effect on the thumb
    '& .MuiSwitch-switchBase:hover': {
      backgroundColor: alpha('#3b99ed', theme.palette.action.hoverOpacity),
    },
    
    // For the track of the switch in both checked and unchecked states
    '& .MuiSwitch-track': {
      backgroundColor: alpha('#3b99ed', 0.8), // Assuming you want it slightly transparent for unchecked state
    },
    
    // For the track when checked
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#3b99ed',
    },
  }));

const label = { inputProps: { 'aria-label': 'Color switch demo' } };

const CardSwitch = (props) => {
    const handleSwitch = (events) => {
        if (events.target.checked === true) {
            
            props.setBPrice(25)
            props.setPPrice(60)
            props.setBsPrice(250)
            if (props.lang === "ENG") {
              props.setPlan(`Monthly (Billed Annually)`)
              props.setEPrice('Enterprise')
            } else {
              props.setPlan(`Mensual (anualmente)`)
            }
            
        } else {
            props.setBPrice(30)
            props.setPPrice(70)
            props.setBsPrice(280)
            
            if (props.lang === "ENG") {
              props.setPlan('Monthly')
              props.setEPrice('Enterprise')
            } else {
              props.setPlan('Mensual')
            }
        }
    }
    return (
        <Stack direction="row" spacing={2} alignItems="center">
          {
            props.lang && props.lang === "ENG" ? (
              <Typography variant='h6' sx={{ color: '#380036',  fontFamily: 'Nunito Sans' }}>Monthly</Typography>
            ) : (
              <Typography variant='h6' sx={{ color: '#380036',  fontFamily: 'Nunito Sans' }}>Mensual</Typography>
            )
          }
            
            <CustomSwitch {...label} size="large" onChange={handleSwitch} />
            
          {
            props.lang && props.lang === "ENG" ? (
              <Typography variant='h6' sx={{ color: '#380036',  fontFamily: 'Nunito Sans' }}>Yearly</Typography>
            ) : (
              <Typography variant='h6' sx={{ color: '#380036',  fontFamily: 'Nunito Sans' }}>Anual</Typography>
            )
          }
        </Stack>
        
    )
}

export default CardSwitch