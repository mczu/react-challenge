import { Box, Typography } from '@mui/material';
import no_content_image from "../../assets/no_content.png"; 

export const NoContent = () => {
  return(
  <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <img src={no_content_image} alt="money, calc and paper"></img>
      <Typography variant="subtitle1">Brak danych do wyświetlenia</Typography>
    </Box>
  );
};
