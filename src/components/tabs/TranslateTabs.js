import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { Stack, Grid, Button, useMediaQuery } from '@mui/material';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    

    const bgColor = value === index ? "#F3F1F6" : "transparent";
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3, backgroundColor: bgColor }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TranslateTabs = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
        <Box>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                TabIndicatorProps={{ style: { display: 'none' } }}  // Hides the default bottom indicator
            >
                <Tab
                label={
                    <Stack direction="row" spacing={2}>
                    {value === 0 && <RadioButtonCheckedIcon sx={{ color: '#FF0065' }} />}
                    <Typography sx={{ textTransform: 'none', fontWeight: 500, fontFamily: 'Filson Pro Regular' }}>Recievable</Typography>
                    </Stack>
                }
                {...a11yProps(0)}
                sx={{
                    "&.Mui-selected": {
                    color: 'black', // text color for the active tab
                    backgroundColor: '#F3F1F6', // gray background for the active tab
                    borderRadius: '5px 5px 0 0', // border radius for the active tab'
                    textTransform: 'none'
                    }
                }}
                />
                <Tab
                label={
                    <Stack direction="row" spacing={2}>
                    {value === 1 && <RadioButtonCheckedIcon sx={{ color: '#FF0065' }} />}
                    <Typography variant="subtitle1" sx={{ textTransform: 'none', fontWeight: 500, fontFamily: 'Filson Pro Regular' }}>Payable</Typography>
                    </Stack>
                }
                {...a11yProps(1)}
                sx={{
                    "&.Mui-selected": {
                    color: 'black', // text color for the active tab
                    backgroundColor: 'grey.200', // gray background for the active tab
                    borderRadius: '5px 5px 0 0', // border radius for the active tab'
                    textTransform: 'none'
                    }
                }}
                />
            </Tabs>
        </Box>
    

        
    </Box>
  )
}

export default TranslateTabs