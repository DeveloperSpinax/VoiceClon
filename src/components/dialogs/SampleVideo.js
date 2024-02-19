import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Grid, TextField, Typography, Box } from '@mui/material';
import MUISelect from '../select/MUISelect';
import Upload from '../customComponents/Upload'
import SampleDisplay from '../customComponents/SampleDisplay';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const speakerData = [
    {
        value: `Autodetect`,
        label: `Autodetect`,
    },
    {
        value: 1,
        label: 1,
    },
    {
        value: 2,
        label: 2,
    },
    {
        value: 3,
        label: 3,
    },
    {
        value: 4,
        label: 4,
    },
    {
        value: 5,
        label: 5,
    },
    {
        value: 6,
        label: 6,
    },
    {
        value: 7,
        label: 7,
    },
    {
        value: 8,
        label: 8,
    },
    {
        value: 9,
        label: 9,
    },
    {
        value: 10,
        label: 10,
    },
]

const SampleVideo = (props) => {
    const [scroll, setScroll] = React.useState('paper');

    return (
      <React.Fragment>

        <Dialog
          maxWidth="xs"
          open={props.open}
          scroll={scroll}
          TransitionComponent={Transition}
          keepMounted
          onClose={props.handleClose}
          aria-describedby="alert-dialog-slide-description"
          PaperProps={{
            sx: {
              borderRadius: '10px', // You can adjust the radius value as needed
            //   px: 12,
            }
          }}
          
        >

            <DialogTitle sx={{ fontFamily: 'Catamaran' }}>{"Select language for video translation"}</DialogTitle>
            <IconButton
                aria-label="close"
                onClick={props.handleClose}
                sx={{
                    position: 'absolute',
                    right: 14,
                    top: 11,
                }}
                >
                <CloseIcon sx={{ color: '#000' }} />
            </IconButton>

          <DialogContent sx={{ mt: -4 }}>
            <DialogContentText id="alert-dialog-slide-description" sx={{ fontFamily: 'Nunito Sans', fontWeight: 500, color: "rgb(102, 112, 133)", fontSize: '14px' }}>
                We've already filled in the details about the sample video. Just choose the language you want to translate the video into.
            </DialogContentText>
              
            <Grid container sx={{ mt: 1 }} spacing={1}>

                <Grid item xs={12}>
                    <SampleDisplay load={props.load} />
                </Grid>

                <Grid item xs={6} sx={{ mt: 0.07 }}>
                    <Typography sx={{ fontFamily: 'Nunito Sans', fontWeight: 600, color: "#3c4758", fontSize: '15px' }}>Project Title</Typography>
                    <TextField 
                    size='small'
                    fullWidth
                    placeholder='Rask Test Project'
                    />
                </Grid>

                <Grid item xs={6}>
                    <MUISelect title="Speaker" data={speakerData} />
                </Grid>

                <Grid item xs={12}>
                    <MUISelect title="Original Language" data={speakerData} />
                </Grid>

                <Grid item xs={12}>
                    <MUISelect title="Translate to" data={speakerData} />
                </Grid>

                <Grid item xs={12}>
                    <Button variant="contained" fullWidth sx={{ mt: 2, borderRadius: '10px', boxShadow: 'none', textTransform: 'none' }}>
                        Translate
                    </Button>
                </Grid>

            </Grid>
          </DialogContent>

        </Dialog>

      </React.Fragment>
    );
}

export default SampleVideo