import React from "react";
import { Box, Flex, Text, HStack, Icon } from "@chakra-ui/react";
import {
  FaCloudSun,
  FaCloudMoon,
  FaSun,
  FaCloudShowersHeavy,
} from "react-icons/fa";
import { useAppTheme } from "../../ThemeContext";

const TomorrowsForecast: React.FC = () => {
  const forecastData = [
    { time: "1am", temp: "18°C", icon: FaCloudMoon },
    { time: "5am", temp: "17°C", icon: FaCloudSun },
    { time: "10am", temp: "24°C", icon: FaSun },
    { time: "2pm", temp: "28°C", icon: FaSun },
    { time: "6pm", temp: "23°C", icon: FaSun },
    { time: "11pm", temp: "22°C", icon: FaCloudShowersHeavy },
  ];

  const { theme } = useAppTheme();

  const block = theme === "dark" ? "dark.block" : "light.block";
  const block2 = theme === "dark" ? "dark.block2" : "light.block2";
  // const block3 = theme === "dark" ? "dark.block3" : "light.block2";
  const text = theme === "dark" ? "dark.text" : "light.text";

  return (
    <Box
      bg={block}
      color={text}
      w={"100%"}
      maxW={{lg:"556px"}}
      // minW={{ lg: "470px" }}
      p={{ base: "24px", lg: "24px" }}
      flexDir={"column"}
      borderRadius={"24px"}
      h={"fit-content"}
      fontFamily={"nunito"}
    >
      <Text
        fontSize={{ base: "20px", lg: "24px" }}
        fontWeight={600}
        mb={4}
      >
        Tomorrow's Forecast:
      </Text>

      <Flex gap={"18px"} flexWrap={"wrap"}>
        {forecastData.map((forecast, index) => (
          <Flex
            bg={block2}
            px={{ base: "14px", lg: "22px" }}
            py={"18px"}
            gap={"12px"}
            borderRadius="16px"
            // flexDir={"column"}
            // minW={"100px"}
            key={index}
            justifyContent={"space-between"}
          >
            <HStack>
              <Icon
                as={forecast.icon}
                fontSize={"25px"}
                color={
                  forecast.icon === FaSun
                    ? "orange"
                    : forecast.icon === FaCloudShowersHeavy
                    ? "lightblue"
                    : text
                }
              />
            </HStack>
            <Flex flexDir={"column"}>
              <Text
                fontSize={{ base: "20px", lg: "24px" }}
                textAlign={"right"}
              >
                {forecast.time}
              </Text>
              <Text fontSize="16px" textAlign={"right"}>
                {forecast.temp}
              </Text>
            </Flex>
          </Flex>
          // <Flex
          //   key={index}
          //   alignItems="center"
          //   justifyContent="space-between"
          //   w="100%"
          // >
          //   <HStack spacing={4}>
          //     <Icon as={forecast.icon} boxSize={8} />
          //     <Text fontSize="lg">{forecast.temp}</Text>
          //   </HStack>
          //   <Text fontSize="lg">{forecast.time}</Text>
          // </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default TomorrowsForecast;
