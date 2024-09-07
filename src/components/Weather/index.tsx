import React from "react";
import Today from "./Today";
import { Flex } from "@chakra-ui/react";
import Highlights from "./Highlights";
import TomorrowsForecast from "./Tomorrow";
import Forecast from "./Forecast";

// type WeatherProps = {

// };



const Weather: React.FC = () => {

  return (
    <Flex
      mx={{ lg: "24px" }}
      gap={"24px"}
      flexDir={{ base: "column", lg: "row" }}
    >
      <Flex flexDir={"column"} gap={"24px"}>
        <Today />
        <TomorrowsForecast />
      </Flex>
      <Flex flexDir={"column"} gap={"24px"}>
        <Highlights />
        <Forecast />
      </Flex>
    </Flex>
  );
};
export default Weather;
