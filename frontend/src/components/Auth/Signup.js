import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pic, setPic] = useState();
  const toast = useToast();
  const navigate = useNavigate();
  const handleClick = () => {
    setShow(!show);
  };

  const postDetails = (pics) => {
    setLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "do3qr05ry");
      fetch("https://api.cloudinary.com/v1_1/do3qr05ry/image/upload", {
        method: "Post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast({
        title: "Please Select an Image!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "botton",
      });
      setLoading(false);
      return;
    }
  };
  const submitHandler = async () => {
    if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "Please Enter in all the fields",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
    if (password !== confirmpassword) {
      toast({
        title: "Passwords Do Not Match",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const { data } = await axios.post(
          "/api/user",
          { name, email, password, pic },
          config
        );
        toast({
          title: "Registration is Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        localStorage.setItem("userInfo", JSON.stringify(data));
        setLoading(false);
        navigate("/chat");
      } catch (err) {}
    }
  };
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
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            type={show ? "text" : "password"}
          />
          <InputRightElement width="4.5rem" cursor="pointer">
            {show ? (
              <ViewIcon onClick={handleClick} />
            ) : (
              <ViewOffIcon onClick={handleClick} />
            )}
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Enter Confirmation Password"
            onChange={(e) => setConfirmpassword(e.target.value)}
            type="password"
          />
          <InputRightElement width="4.5rem" cursor="pointer">
            {show ? (
              <ViewIcon onClick={handleClick} />
            ) : (
              <ViewOffIcon onClick={handleClick} />
            )}
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="picture">
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          type="file"
          p="1.5"
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        color="white"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
