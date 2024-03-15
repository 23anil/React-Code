import { Button, Slider, ToggleButton } from '@mui/material'
import { isElementType } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'
import ViewListIcon from '@mui/icons-material/ViewList';
import { isElementOfType } from 'react-dom/test-utils';

function valuetext(value) {
    return `${5}°C`;
  }

  

function ButtonsEX() {
    const [view, setView] = useState('list');

  const handleChange = (event, nextView) => {
    setView(nextView);
  };
  return (
    <div>
        <Button variant="contained" color="success" disableRipple >Contained</Button>
        <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        color="secondary"
        disableSwap
        size='small'
      />
       <ToggleButton value="list" aria-label="list" disableRipple>
        <ViewListIcon  />
      </ToggleButton>
    </div>
  )
}

export default ButtonsEX