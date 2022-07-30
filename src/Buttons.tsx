import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const Buttons = ()=> {
  return (
    <>
     <h3>Basic Button</h3>
        <Stack spacing={2}  direction="row">
           
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    <h3>Text Button</h3>
    <Stack direction="row" spacing={2}>
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
    </Stack>
    <h3>Contained Button</h3>
    <Stack direction="row" spacing={2}>
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
      <Button variant="contained" disableElevation>
      Disable elevation
    </Button>
    </Stack>
    <h3>Outlined  Button</h3>
    <Stack direction="row" spacing={2}>
      <Button variant="outlined">Primary</Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        Link
      </Button>
      <Button
  onClick={() => {
    alert('clicked');
  }}
>
Handling clicks Click me
</Button>
    </Stack>
    <h3>Color  Button</h3>
    <Stack direction="row" spacing={2}>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </Stack>

    </>
  );
}
