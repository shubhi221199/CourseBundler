
import { Box, Button, Container, FormLabel, Heading, VStack,Input, Textarea } from '@chakra-ui/react'
import {React, useState
} from 'react'
import { Link } from 'react-router-dom';
const Request = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  return (
  <Container h={'90vh'}>
      
    
      
       
  
        <VStack h={'full'} justifyContent={'center'} spacing={'7'}>
      <Heading children={'Request New Course'}/>

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
          <FormLabel htmlFor="course" children={'Course '} />
          <Textarea
            required
            id="course"
            type='course'
            value={course}
            placeholder="Request for course..."
            onChange={e => {
              setCourse(e.target.value);
            
            }}
              focusBorderColor='yellow.500'
          />
          </Box>

          <Button
          my='4' colorScheme='yellow' type='submit'>Sent Mail</Button>
      
         
      <Box my='4' >
        See Available Courses! <Link to='/courses'><Button variant={'link'} colorScheme='yellow'>Click</Button>{' '}
         here</Link>
          </Box>
    
        </form>
      </VStack>



   
  </Container>
  )
}

export default Request
