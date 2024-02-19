import { Grid, Box, Stack, Typography, Button } from '@mui/material'
import React from 'react'
import Flag from 'react-flagkit';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import SRT from './SRT';
import VideoPlayer from '../video/VideoPlayer';
import DownloadButtonList from '../dropDown/DownloadButtonList';

const flags = [
    { code: 'GB', Country: 'English', lang: 'ENG' },
    { code: 'ES', Country: 'Spanish', lang: 'ESP' },
];

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    

    const bgColor = value === index ? "#FFF" : "transparent";
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 2, backgroundColor: bgColor, m:2, borderRadius: '11px', height: 'auto', border: '1px solid rgb(234, 236, 240)' }}>
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

const TranslatedVideo = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
        <Grid container spacing={0.1}>

            <Grid item xs={7.5}>
                <Stack direction="column">

                    <Box sx={{
                        background: '#fff',
                        height: '50px',
                        borderBottom: '1px solid rgb(234, 236, 235)',
                        borderRight: '1px solid rgb(234, 236, 235)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',

                    }}>
                        <Grid container>
                            <Grid item xs={6} sx={{ pl: 3, borderRight: '1px solid #c7c7c7' }}>
                                <Stack direction="row" spacing={1}>
                                    <Flag country={flags[0].code} size={22} />
                                    <Typography>English</Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={6} sx={{ pl: 3 }}>
                                <Stack direction="row" spacing={1}>
                                    <Flag country={flags[1].code} size={22} />
                                    <Typography>Spanish</Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box sx={{
                        background: '#fff',
                        height: 'calc(82vh - 60px)',
                        borderBottom: '1px solid rgb(234, 236, 235)',
                        borderRight: '1px solid rgb(234, 236, 235)',
                        overflowY: 'scroll',
                        px: 3,
                        py: 2,
                    }}>
                        {
                            Array(5).fill().map((item, index) => (
                                <SRT />
                            ))
                        }
                    </Box>

                </Stack>
            </Grid>

            <Grid item xs={4.5}>
                <Stack direction="column">
                    <Box sx={{
                        background: '#fff',
                        height: '50px',
                        borderBottom: '1px solid rgb(234, 236, 235)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                            TabIndicatorProps={{ style: { display: 'none' } }}  // Hides the default bottom indicator
                            
                        >

                            <Tab
                                label={
                                    <Stack direction="row" spacing={2}>
                                    {value === 0 && <RadioButtonCheckedIcon sx={{ color: '#2786d7' }} />}
                                    <Typography sx={{ textTransform: 'none', fontWeight: 500, fontFamily: 'Nunito Sans' }}>Original</Typography>
                                    </Stack>
                                }
                                {...a11yProps(0)}
                                sx={{
                                    "&.Mui-selected": {
                                    color: 'black', // text color for the active tab
                                    backgroundColor: '#fff', // gray background for the active tab
                                    textTransform: 'none'
                                    }
                                }}
                            />

                            <Tab
                                label={
                                    <Stack direction="row" spacing={2}>
                                    {value === 1 && <RadioButtonCheckedIcon sx={{ color: '#2786d7' }} />}
                                    <Typography variant="subtitle1" sx={{ textTransform: 'none', fontWeight: 500, fontFamily: 'Nunito Sans' }}>Translated</Typography>
                                    </Stack>
                                }
                                {...a11yProps(1)}
                                sx={{
                                    "&.Mui-selected": {
                                    color: 'black', // text color for the active tab
                                    backgroundColor: '#fff', // gray background for the active tab
                                    borderRadius: '5px 5px 0 0', // border radius for the active tab'
                                    textTransform: 'none'
                                    }
                                }}
                            />

                        </Tabs>
                    </Box>

                    <Box sx={{
                        background: '#fff',
                        height: 'calc(100% - 60px)',
                        borderBottom: '1px solid rgb(234, 236, 235)',
                        borderRight: '1px solid rgb(234, 236, 235)',
                        overflowY: 'scroll'
                    }}>
                        <CustomTabPanel value={value} index={0} sx={{ padding: '0px' }}>
                            <VideoPlayer />
                            <Box sx={{
                                mt: 2
                            }}>
                                <DownloadButtonList />
                            </Box>
                        </CustomTabPanel>

                        <CustomTabPanel value={value} index={1}>
                            <VideoPlayer />
                            <Box sx={{
                                mt: 2
                            }}>
                                <DownloadButtonList />
                            </Box>
                        </CustomTabPanel>
                    </Box>
                </Stack>
            </Grid>

        </Grid>
    </Box>
  )
}

export default TranslatedVideo