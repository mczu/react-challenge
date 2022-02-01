import { Box, Typography } from '@mui/material';
import unknown_error_image from '../../assets/unknown_error.png'

export const Error = ({ error }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {
        error?.message?.includes('Network Error') ? (
          <Typography>Uruchom Server!</Typography>
        ) : ( <>
            <img src={unknown_error_image} alt="two astronauts in cosmos"></img>
            <Typography variant="subtitle1">Wystąpił nieoczekiwany błąd</Typography>
            </>
          )
      }
    </Box>
  );
};
