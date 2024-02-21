import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

export default function PopoverPopupState({courselink}) {
  return (
    <PopupState  variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button style={{width: "100%"}} variant="contained" {...bindTrigger(popupState)}>
            Link
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography sx={{ p: 2 }}>{courselink}</Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
