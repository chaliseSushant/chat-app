import {
  Box,
  Center,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Center
        d="flex"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontFamily="Work sans" fontSize="4xl" color="black">
          Chat-App
        </Text>
      </Center>
      <Box
        bg="white"
        w="100%"
        p={4}
        textColor="black"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
