import { Outlet } from "react-router-dom";
import Navbar from "../components/Nav/Navbar";
// import Footer from "../components/Footer/Footer";
import { Flex } from "@chakra-ui/react";
import Topbar from "../components/TopBar/Topbar";

const Layout = () => {
  return (
    <>
      <Flex w={'100%'} h={'100%'}>
        <Navbar />
        <Flex flexDir={'column'} w={'100%'}>
          <Topbar />
          <Outlet />
        </Flex>
      </Flex>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
