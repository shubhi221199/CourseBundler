import {
  Box,
  Container,
  FormLabel,
  Heading,
  VStack,
  Input,
  Button,
  Avatar,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const fileuploadCss = {
  cursor: 'pointer',
  marginLeft: '-5%',
  width: '110%',
  height:"40px",
  border: 'none',
  color: '#ECC94B',
  backgroundColor: 'white',
};

const fileuploadstyl = {
  '&::file-selector-button': fileuploadCss,
};

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [imgprev, setImgprev] = useState('');
  const [image, setImage] = useState('');

const changeImgHandler = e =>{
    const file =e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend =()=>{
        setImgprev(reader.result);
        setImage(file);
    }
}

  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children={'Sign up'} textTransform={'uppercase'} />

        <form style={{ width: '100%' }}>
          <Box my="4" display={'flex'} justifyContent={'center'}>
            <Avatar src={imgprev} size={'2xl'} />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="" children={'Name'} />
            <Input
              required
              id="name"
              value={name}
              placeholder="abc"
              onChange={e => {
                setName(e.target.value);
              }}
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="" children={'Email Address'} />
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
              type="password"
              value={password}
              placeholder="Enter your Password"
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="ChooseAvatar" children={'Choose Avatar'} />
            <Input
              required
              id="ChooseAvatar"
              type={'file'}
              accept="image/*"
              focusBorderColor="yellow.500"
              css={fileuploadstyl}
              onChange={changeImgHandler}
            />
          </Box>

          <Button my="4" colorScheme="yellow" type="submit">
            Sign Up{' '}
          </Button>

          <Box my="4">
            Already Signed Up?{' '}
            <Link to="/login">
              <Button variant={'link'} colorScheme="yellow">
                Login
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
