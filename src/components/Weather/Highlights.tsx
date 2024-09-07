import { Box, Flex, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import {
  FaWind,
  FaTint,
  FaSun,
  FaCloudSun,
  FaEye,
} from "react-icons/fa";
import { useAppTheme } from "../../ThemeContext";
import { useSnapshot } from "valtio";
import { weatherState } from "../../utils/weather";

const Highlights: React.FC = () => {
  const { theme } = useAppTheme();

  const block = theme === "dark" ? "dark.block" : "light.block";
  const block2 = theme === "dark" ? "dark.block2" : "light.block2";
  const text = theme === "dark" ? "dark.text" : "light.text";

   const {
     wind,
     visibility,
     humidity,
     pressure,
     sunrise,
     sunset,
   } = useSnapshot(weatherState);

   const convertUnixToTime = (unixTimestamp: number): string => {
     const date = new Date(unixTimestamp * 1000);
     return date.toLocaleTimeString("en-US", {
       hour: "2-digit",
       minute: "2-digit",
     });
   };

   const sunriseTime = convertUnixToTime(sunrise);
   const sunsetTime = convertUnixToTime(sunset);

  return (
    <Flex
      bg={block}
      color={text}
      w={"100%"}
      maxW={{lg:"664px"}}
      flexDir={"column"}
      p={"24px"}
      borderRadius={"24px"}
      h={"fit-content"}
      fontFamily={"nunito"}
    >
      <Box>
        <Text
          fontSize={{ base: "20px", lg: "24px" }}
          fontWeight={600}
          mb={2}
        >
          Today's Highlight
        </Text>
        <Flex gap={"18px"} mb={"18px"} flexWrap={"wrap"}>
          <Flex
            bg={block2}
            px={"22px"}
            py={"18px"}
            borderRadius="16px"
            flexDir={"column"}
            // minW={"150px"}
            // w={{base:"100%", lg:'fit-content'}}
          >
            <HStack>
              <Icon as={FaTint} />
              <Text fontSize={"16px"}>Humidity</Text>
            </HStack>
            <Text fontSize="24px" textAlign={"right"}>
              {humidity}{" "}
              <Text as={"span"} fontSize={"14px"}>
                %
              </Text>
            </Text>
          </Flex>
          <Flex
            bg={block2}
            px={"22px"}
            py={"18px"}
            borderRadius="16px"
            flexDir={"column"}
            // minW={"150px"}
          >
            <HStack>
              <Icon as={FaWind} />
              <Text fontSize={"16px"}>Wind Status</Text>
            </HStack>
            <Text fontSize="24px" textAlign={"right"}>
            {wind}{" "}
              <Text as={"span"} fontSize={"14px"}>
                km/h
              </Text>
            </Text>
          </Flex>
          <Flex
            bg={block2}
            px={"22px"}
            py={"18px"}
            gap={"1rem"}
            borderRadius="16px"
          >
            <Icon as={FaSun} fontSize={"54px"} color={"orange"} />
            <VStack>
              <Text fontSize={"16px"}>Sunrise</Text>
              <Text fontSize="24px" textAlign={"right"}>
               {sunriseTime}
              </Text>
            </VStack>
          </Flex>
        </Flex>
        <Flex gap={"18px"} flexWrap={"wrap"}>
          <Flex
            bg={block2}
            px={"22px"}
            py={"18px"}
            borderRadius="16px"
            flexDir={"column"}
            // minW={"150px"}
          >
            <HStack>
              <Icon as={FaCloudSun} />
              <Text fontSize={"16px"}>Pressure</Text>
            </HStack>
            <Text fontSize="24px" textAlign={"right"}>
              {pressure}
              <Text as={"span"} fontSize={"14px"}>
                Pa
              </Text>
            </Text>

          </Flex>
          <Flex
            bg={block2}
            px={"22px"}
            py={"18px"}
            borderRadius="16px"
            flexDir={"column"}
            // minW={"156px"}
          >
            <HStack>
              <Icon as={FaEye} />
              <Text fontSize={"16px"}>Visibility</Text>
            </HStack>
            <Text fontSize="24px" textAlign={"right"}>
              {visibility}{" "}
              <Text as={"span"} fontSize={"14px"}>
                km/h
              </Text>
            </Text>
          </Flex>
          <Flex
            bg={block2}
            px={"22px"}
            py={"18px"}
            gap={"1rem"}
            borderRadius="16px"
          >
            <Icon as={FaSun} fontSize={"54px"} color={"orange"} />
            <VStack>
              <Text fontSize={"16px"}>Sunset</Text>
              <Text fontSize="24px" textAlign={"right"}>
               {sunsetTime}
              </Text>
            </VStack>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
export default Highlights;
