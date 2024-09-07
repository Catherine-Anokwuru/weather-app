// import React from 'react';

import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { useAppTheme } from "../../ThemeContext";
import { FaCloudRain } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { useSnapshot } from "valtio";
import { weatherState } from "../../utils/weather";

// type TodayProps = {

// };

const Today: React.FC = () => {
  const { theme } = useAppTheme();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date()
  const today = days[date.getDay()]
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  const currentTime = `${hours}:${minutes} ${period}`;

  const formattedDate = `${day} ${month}, ${year}`;

  const block = theme === "dark" ? "dark.block" : "light.block";
  const block3 = theme === "dark" ? "dark.block3" : "light.block2";
  const text = theme === "dark" ? "dark.text" : "light.text";

  const {
    city,
    feelsLike,
    description,
    temp,
  } = useSnapshot(weatherState);


    // const handleSelect = (city: string) => {
    //   setQuery(city);
    //   setSuggestions([]);
    //   fetchWeather(city); // Fetch weather when a city is selected
    // };

  return (
    <Flex
      bg={block}
      color={text}
      w={"100%"}
      maxW={{lg:"556px"}}
      // minW={{ lg: "470px" }}
      flexDir={"column"}
      p={"24px"}
      borderRadius={"24px"}
      h={"fit-content"}
      fontFamily={"nunito"}
    >
      <Flex
        bg={block3}
        px={"16px"}
        py={"9px"}
        mb={"8px"}
        borderRadius={"16px"}
        h={"40px"}
        w={{ base: "100%", lg: "fit-content" }}
        gap={"8px"}
        fontFamily={"inter"}
        alignItems={"center"}
      >
        <IoLocationOutline fontSize={"22px"} />
        <Text fontSize={{ base: "14px", md: "18px" }}>
          {city}
        </Text>
      </Flex>

      <Text fontSize={{ base: "28px", lg: "36px" }} fontWeight={600}>
        {today}
      </Text>
      <Text fontSize={{ base: "14px", lg: "16px" }} mb={"8px"}>
        {formattedDate}
      </Text>
      <Text fontSize={{ base: "14px", lg: "16px" }} mb={"8px"}>
        {currentTime}
      </Text>
      <Flex>
        <Box mx={"auto"}>
          <Icon
            as={FaCloudRain}
            boxSize={{ base: 90, lg: 120 }}
            color={text}
          />
        </Box>
        <Box>
          <Text
            fontSize={{ base: "28px", lg: "4xl" }}
            fontWeight={600}
            pb={"24px"}
          >
            {temp}°C
          </Text>
          <Text fontSize="md" textTransform={'capitalize'}>{description}</Text>
          <Text fontSize="sm">Feels like {feelsLike}°C</Text>
        </Box>
      </Flex>
    </Flex>
  );
};
export default Today;
