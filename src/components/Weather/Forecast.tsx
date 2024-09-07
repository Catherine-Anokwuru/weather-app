import { Box, Flex, Icon, VStack, Text } from "@chakra-ui/react";
import { useAppTheme } from "../../ThemeContext";
import {
  // FaCloudMoon,
  FaCloudSun,
  FaSun,
  FaCloudShowersHeavy,
  FaCloudRain,
} from "react-icons/fa";

const Forecast: React.FC = () => {
  const { theme } = useAppTheme();

  const block = theme === "dark" ? "dark.block" : "light.block";
  const block2 = theme === "dark" ? "dark.block2" : "light.block2";
  //  const block3 = theme === "dark" ? "dark.block3" : "light.block2";
  const text = theme === "dark" ? "dark.text" : "light.text";

 const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 const today = new Date();

 const forecastData = [
   { temp: "28°C", icon: FaCloudRain },
   { temp: "31°C", icon: FaSun },
   { temp: "27°C", icon: FaCloudRain },
   { temp: "29°C", icon: FaCloudSun },
   { temp: "32°C", icon: FaSun },
   { temp: "28°C", icon: FaCloudShowersHeavy },
 ].map((forecast, i) => {
   const currentDay = new Date(today);
   currentDay.setDate(today.getDate() + i);
   const dayName =
     i === 0 ? "Today" : daysOfWeek[currentDay.getDay()];
   return { ...forecast, day: dayName };
 });


  return (
    <Flex
      bg={block}
      color={text}
      w={"100%"}
      flexWrap={'wrap'}
      // maxW={"556px"}
      // minW={{ lg: "470px" }}
      flexDir={"column"}
      p={"24px"}
      borderRadius={"24px"}
      h={"fit-content"}
      fontFamily={"nunito"}
    >
      <Text
        fontSize={{ base: "20px", lg: "24px" }}
        fontWeight={600}
        mb={2}
      >
        6 Day Forecast
      </Text>
      <Flex gap={"18px"} flexWrap={{ base: "wrap", lg: "nowrap" }}>
        {forecastData.map((forecast, index) => (
          <Box key={index} p={4} borderRadius="24px" bg={block2}>
            <VStack>
              <Text fontSize="lg">{forecast.day}</Text>
              <Icon
                as={forecast.icon}
                boxSize={8}
                color={
                  forecast.icon === FaCloudRain ||
                  forecast.icon === FaCloudShowersHeavy
                    ? "lightblue"
                    : forecast.icon === FaSun
                    ? "orange"
                    : text
                }
              />
              <Text fontSize="xl">{forecast.temp}</Text>
            </VStack>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};
export default Forecast;
