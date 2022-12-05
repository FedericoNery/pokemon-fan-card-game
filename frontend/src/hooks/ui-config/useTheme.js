import { createTheme } from '@mui/material/styles';
import { useMemo, useState } from "react";

function useTheme(){

  const [mode, setMode] = useState('light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return { theme, mode, setMode }
}

export default useTheme
