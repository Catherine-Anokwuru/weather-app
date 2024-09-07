import React from "react";
import { Box, Flex, Icon, Text, VStack } from "@chakra-ui/react";
import {
  FaCloudSun,
  FaCity,
  FaMapMarkedAlt,
  FaCog,
  FaUser,
} from "react-icons/fa";
import { useAppTheme } from "../../ThemeContext";

const Navbar: React.FC = () => {
  const { theme } = useAppTheme();

  const block = theme === "dark" ? "dark.block" : "light.block";
  // const block2 = theme === "dark" ? "dark.block2" : "light.block2";
  const text = theme === "dark" ? "dark.text" : "light.text1";
  return (
    <Flex
      height="100vh"
      display={{ base: "none", lg: "flex" }}
      alignItems={"center"}
    >
      <Box
        bg={block}
        color={text}
        maxW="250px"
        p={4}
        h={"90%"}
        // position="fixed"
        fontFamily={"nunito"}
        borderRadius={"32px"}
      >
        <VStack
          spacing={12}
          align="start"
          fontSize={"18px"}
          py={"3rem"}
          px={"1rem"}
        >
          <PanelItem icon={FaCloudSun} text="Weather" />
          <PanelItem icon={FaCity} text="Cities" />
          <PanelItem icon={FaMapMarkedAlt} text="Map" />
          <PanelItem icon={FaCog} text="Settings" />
          <PanelItem icon={FaUser} text="Account" />
        </VStack>
      </Box>
    </Flex>
  );
};

const PanelItem: React.FC<{
  icon: React.ElementType;
  text: string;
}> = ({ icon, text }) => {
  return (
    <Flex align="center" width="100%">
      <Icon as={icon} boxSize={6} mr={4} />
      <Text fontSize="lg" display={{ base: "none", xl: "flex" }}>
        {text}
      </Text>
    </Flex>
  );
};

export default Navbar;
