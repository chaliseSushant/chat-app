import { FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setshow] = useState(false);
  return (
    <VStack spacing="5px">
      <FormControl>
        <FormLabel id="name">Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          placeholder="Enter Password"
          onChange={(e) => setName(e.target.value)}
          type="password"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Confirm Password</FormLabel>
        <Input
          placeholder="Enter Confirmation Password"
          onChange={(e) => setName(e.target.value)}
          type="password"
        />
      </FormControl>
    </VStack>
  );
};

export default Signup;
