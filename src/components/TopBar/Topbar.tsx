import {
  Circle,
  Flex,
  Icon,
  Input,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FaBars, FaMoon, FaSearch, FaSun } from "react-icons/fa";
import { useAppTheme } from "../../ThemeContext";
import { useState, useEffect } from "react";
import { apiKey, weatherState } from "../../utils/weather";

const Topbar = () => {
  const { theme, toggleTheme } = useAppTheme();

  const block = theme === "dark" ? "dark.block" : "light.block";
  const text = theme === "dark" ? "dark.text" : "light.text";

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (query.length > 0) {
      const fetchCities = async () => {
        try {
          const response = await fetch(
            `http://api.geonames.org/searchJSON?q=${query}&maxRows=7&username=catihuoma`
          );
          const data = await response.json();
          const citySuggestions = data.geonames.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (city: any) => `${city.name}, ${city.countryName}`
          );
          setSuggestions(citySuggestions);
        } catch (error) {
          console.error("Error fetching city data:", error);
        }
      };

      fetchCities();
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const fetchWeather = async (city: string) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();
      // setWeatherData(data);

      console.log(data);


      if (data && data.weather && data.main) {
        weatherState.description = data.weather[0].description;
        weatherState.feelsLike = data.main.feels_like;
        weatherState.humidity = data.main.humidity;
        weatherState.sunrise = data.sys.sunrise;
        weatherState.sunset = data.sys.sunset;
        weatherState.temp = data.main.temp;
        weatherState.visibility = data.visibility;
        weatherState.wind = data.wind.speed;
        weatherState.pressure = data.main.pressure
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

    useEffect(() => {
      // Fetch weather for Lagos, Nigeria on initial load
      fetchWeather("Lagos, Nigeria");
    }, []);

  return (
    <Flex
      justifyContent={"flex-end"}
      gap={{ base: "0.5rem", lg: "3rem" }}
      w={"100%"}
      // pt={"10px"}
      pb={"24px"}
    >
      <Icon
        as={FaBars}
        color={text}
        fontSize={"34px"}
        display={{ lg: "none" }}
        justifySelf={"start"}
      />
      <Flex flexDir={"column"}>
        <Flex
          bg={block}
          w={"336px"}
          h={{ base: "36px", md: "56px" }}
          borderRadius={"36px"}
          alignItems={"center"}
          px={"1rem"}
        >
          <Icon as={FaSearch} fontSize={"14px"} color={"grey"} />
          <Input
            placeholder="search for a country"
            _placeholder={{ color: "grey" }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            color={text}
            h={{ base: "36px", md: "56px" }}
            bg={block}
            borderRadius={"36px"}
            border={"none"}
            _focus={{ border: "none", outline: "none" }}
            _active={{ border: "none", outline: "none" }}
          />
        </Flex>
        {suggestions.length > 0 && (
          <List
            mt={2}
            border="1px"
            borderColor="gray.200"
            borderRadius="md"
            bg={block}
            pos={"fixed"}
            top={'13%'}
            w={"336px"}
            zIndex="10"
          >
            {suggestions.map((cityName, index) => (
              <ListItem
                key={index}
                padding="8px"
                _hover={{ backgroundColor: "gray.100" }}
                cursor="pointer"
                onClick={() => {
                  setQuery(cityName);
                  weatherState.city = cityName;
                  setSuggestions([]);
                  fetchWeather(cityName);
                }}
                borderBottom={"1px solid #00000020"}
              >
                {cityName}
              </ListItem>
            ))}
          </List>
        )}
      </Flex>

      <Flex
        bg={block}
        borderRadius={"34px"}
        w={"fit-content"}
        h={{ base: "36px", md: "56px" }}
        gap={"0.5rem"}
      >
        <Circle
          onClick={toggleTheme}
          bg={theme === "light" ? "light.block2" : "transparent"}
          size={{ base: "36px", md: "56px" }}
          cursor={"pointer"}
        >
          <Icon
            as={FaSun}
            color={theme === "light" ? "light.text1" : "grey"}
            fontSize={"20px"}
          />
        </Circle>

        <Circle
          onClick={toggleTheme}
          bg={theme === "dark" ? "dark.block2" : "transparent"}
          size={{ base: "36px", md: "56px" }}
          cursor={"pointer"}
        >
          <Icon
            as={FaMoon}
            color={theme === "dark" ? "dark.text" : "grey"}
            fontSize={"20px"}
          />
        </Circle>
      </Flex>
    </Flex>
  );
};

export default Topbar;
