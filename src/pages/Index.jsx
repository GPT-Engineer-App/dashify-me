import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Stack, useToast, VStack, Heading, Text } from "@chakra-ui/react";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const toast = useToast();

  const handleLogin = async (e) => {
    e.preventDefault();
    // API call to /login would happen here
    toast({
      title: "Logged In",
      description: "You've successfully logged in.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    // API call to /signup would happen here
    toast({
      title: "Signed Up",
      description: "You've successfully signed up.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent>
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <VStack spacing={4} align="flex-start">
          <Heading>{isLogin ? "Login" : "Signup"}</Heading>
          <form onSubmit={isLogin ? handleLogin : handleSignup}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl isRequired mt={6}>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Button width="full" mt={4} type="submit" leftIcon={isLogin ? <FaSignInAlt /> : <FaUserPlus />}>
              {isLogin ? "Login" : "Signup"}
            </Button>
          </form>
          <Stack pt={6}>
            <Text align="center">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <Button variant="link" colorScheme="blue" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Signup" : "Login"}
              </Button>
            </Text>
          </Stack>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
