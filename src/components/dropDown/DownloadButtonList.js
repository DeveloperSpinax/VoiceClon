import React, { useState } from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Popover from '@mui/material/Popover';
import Paper from '@mui/material/Paper';
import { Box, ListItemIcon, Stack } from '@mui/material';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import TitleOutlinedIcon from '@mui/icons-material/TitleOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {Typography} from '@mui/material';

const item = [
  {
    name: 'Video',
    icon: <VideocamOutlinedIcon />,
    subItems: ['720p', '1080p', '4K'],
  },
  {
    name: 'Audio',
    icon: <MusicNoteOutlinedIcon />,
    subItems: ['MP3', 'FLAC', 'AAC'],
  },
  {
    name: 'Text subtitles (.srt)',
    icon: <TitleOutlinedIcon />,
    subItems: ['MP3', 'FLAC', 'AAC'],
  },
];

const DownloadButtonList = () => {
  const [listOpen, setListOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [buttonWidth, setButtonWidth] = useState(0);
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (itemIndex) => {
    setExpandedItem((prevItem) => (prevItem === itemIndex ? null : itemIndex));
  };

  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
    setListOpen(!listOpen);
    setButtonWidth(event.currentTarget.getBoundingClientRect().width);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setListOpen(false);
    
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box>
      <Button
        endIcon={listOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#2786d7',
          background: '#eff7ff',
          mr: 2,
          borderRadius: '10px',
          borderColor: '#2786d7',
          textTransform: 'none',
          '&:hover': {
            background: '#2786d7',
            color: '#fff',
          },
        }}
        fullWidth
        variant='outlined'
        onClick={handleButtonClick}
      >
        <Stack spacing={1} direction="row">
          <DownloadOutlinedIcon sx={{ height: 20, width: 20, mt: '1px !important' }} />
          <Typography sx={{ mt: '-1px !important' }}>Download</Typography>
        </Stack>
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Paper style={{ width: buttonWidth, margin: 0 }}>
        
        <List>
            {item.map((data, index) => (
              <React.Fragment key={index}>
                <ListItemButton
                  sx={{ marginRight: '23px !important' }}
                  onClick={() => handleItemClick(index)}
                >
                  <ListItemIcon sx={{ height: 20, width: 20 }}>
                    {data.icon}
                  </ListItemIcon>
                  <ListItemText>{data.name}</ListItemText>
                  {data.subItems && (
                    <React.Fragment>
                      {expandedItem === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </React.Fragment>
                  )}
                </ListItemButton>
                {data.subItems && (
                  <Collapse in={expandedItem === index} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {data.subItems.map((subItem, subIndex) => (
                        <ListItemButton key={subIndex}>
                          <ListItemText>{subItem}</ListItemText>
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
          </List>
        </Paper>
      </Popover>
    </Box>
  );
};

export default DownloadButtonList;
