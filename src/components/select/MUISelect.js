import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, Typography } from '@mui/material';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';



const MUISelect = (props) => {
    const [dataset, setDataset] = React.useState(props.data[0].label);

    const handleChange = (event) => {
        setDataset(event.target.value);
    };
  
    return (
    <Box sx={{ minWidth: 120 }}>
        <InputLabel id="demo-select-small-label" sx={{ fontFamily: 'Nunito Sans', fontWeight: 600, color: "#3c4758", fontSize: '15px' }}>{props.title}</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          placeholder='Select'
          value={dataset}
        //   label="Speaker"
          onChange={handleChange}
          size='small'
          fullWidth
          sx={{
            mt: 0.2
          }}
        >
            {props.data.map((item, index) => (
                item.value === '0' ? (
                    <MenuItem key={index} value={item.value}>
                        <TravelExploreIcon sx={{ height: 22, width: 22, mt: -0.2 }} /> &nbsp;
                        <Typography variant='subtitle1'>
                            {item.label}
                        </Typography>
                    </MenuItem>
                ) : (
                    <MenuItem key={index} value={item.value}>
                        &nbsp;{item.label}
                    </MenuItem>
                )
            ))}
          
          {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
    </Box>
    );
}

export default MUISelect