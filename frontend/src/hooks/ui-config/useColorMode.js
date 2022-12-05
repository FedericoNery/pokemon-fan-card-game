import { useMemo } from "react";

function useColorMode(setMode){
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  return colorMode
}

export default useColorMode
