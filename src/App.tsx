import { Box } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { useAppTheme } from "./ThemeContext";
import './App.css'

function App() {
   const { theme } = useAppTheme();
  return (
    <Box
      maxW={"1560px"}
      bg={theme === 'light' ? "light.bg" : 'dark.bg'}
      mx={"auto"}
      py={'24px'}
      w={"100%"}
      // overflowY={{lg:'hidden'}}
      // h={'100vh'}
      minH={'100vh'}
      px={{base:'12px',lg:'30px'}}
      overflowX={"hidden"}
    >
      <RouterProvider router={router} />
    </Box>
  );
}

export default App
