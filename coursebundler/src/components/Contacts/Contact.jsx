import { Box, Button, Container, FormLabel, Heading, VStack,Input, Textarea } from '@chakra-ui/react'
import {React, useState
} from 'react'
import { Link } from 'react-router-dom';
const Contact = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  return (
  <Container h={'90vh'}>
      
    
      
       
  
        <VStack h={'full'} justifyContent={'center'} spacing={'7'}>
      <Heading children={'Contact Us'}/>

        <form style={{ width: '100%' }}>

        <Box my={'4'}>
          <FormLabel htmlFor="name" children={'Name'} />
          <Input
          focusBorderColor='yellow.500'
            required
            id="email"
            value={name}
            placeholder="Abc"
            onChange={e => {
              setName(e.target.value);
            }}
          />
          </Box>


          <Box my={'4'}>
          <FormLabel htmlFor="email" children={'Email Address'} />
          <Input
          focusBorderColor='yellow.500'
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
          <FormLabel htmlFor="message" children={'Message '} />
          <Textarea
            required
            id="message"
            type='password'
            value={message}
            placeholder="Type your Messaage"
            onChange={e => {
              setMessage(e.target.value);
            
            }}
              focusBorderColor='yellow.500'
          />
          </Box>

          <Button
          my='4' colorScheme='yellow' type='submit'>Sent Mail</Button>
      
         
      <Box my='4' >
         Request for a Course? <Link to='/request'><Button variant={'link'} colorScheme='yellow'>Click</Button>{' '}
         here</Link>
          </Box>
    
        </form>
      </VStack>



   
  </Container>
  )
}

export default Contact
