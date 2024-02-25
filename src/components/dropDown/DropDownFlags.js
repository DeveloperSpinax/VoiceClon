import * as React from 'react';
import { Select, MenuItem, FormControl, InputLabel, Tooltip } from '@mui/material';
import Flag from 'react-flagkit';
import Cookies from 'js-cookie';

const flags = [
  { code: 'GB', Country: 'English', lang: 'ENG' },
  { code: 'ES', Country: 'Spanish', lang: 'ESP' },
];

const DropDownFlags = (props) => {

  const [selectedLang, setSelectedLang] = React.useState(flags[0].lang);
  
  const handleChange = (event) => {
    setSelectedLang(event.target.value);
    props.setRenderLang(event.target.value)
    props.handleParentLang(event.target.value)
  };

  return (
    <FormControl size="small">
      <Select 
        value={selectedLang} 
        onChange={handleChange}
        sx={{
          padding: "0px -4px !important",
        }}
      >
        {flags.map((flag, index) => (
          <MenuItem value={flag.lang} key={index}>
            <Tooltip title={flag.Country} placement="right">
              <Flag country={flag.code} size={15} />
            </Tooltip>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDownFlags;
