import {Box, Container, FormLabel, Heading, VStack ,Input, Button, } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children={'Welcome to CourseBundler'} />

        <form style={{ width: '100%' }}>

          <Box my={'4'}>
          <FormLabel htmlFor="email" children={'Email Address'} />
          <Input
            required
            id="email"
            value={email}
            placeholder="abc@gmail.com"
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
          </Box>

          <Box my={'4'}>
          <FormLabel htmlFor="password" children={'Password '} />
          <Input
            required
            id="password"
            type='password'
            value={password}
            placeholder="Enter your Password"
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
          </Box>

          <Box>
            <Link to='/forgetpassword'>
                <Button fontSize={'sm'} variant={'link'}>Forgot Password</Button>
            </Link>
          </Box>

          <Button my='4' colorScheme='yellow' type='submit'>Login</Button>

          <Box my='4' >
         New user? <Link to='/register'><Button variant={'link'} colorScheme='yellow'>Sign Up</Button>{' '}
         here</Link>
          </Box>

        </form>
      </VStack>
    </Container>
  );
};

export default Login;
