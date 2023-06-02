import { Button, Container, Heading, VStack,Input } from '@chakra-ui/react'
import{ React, useState} from 'react'

const Forgetpassword = () => {
    const [email,setEmail] =  useState('')
  return (
    <Container py={'50'} h='90vh'>
        <form>

            <Heading
            children='Forget Password'
            my='16'
            textTransform={'uppercase'}
            textAlign={['center','left']}
            />

<VStack spacing={'8'}>
     <Input
            required
            id="email"
            value={email}
            placeholder="abc@gmail.com"
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
          <Button type='submit' colorScheme='yellow' w={'full'}>Send Reset Link</Button>
</VStack>
        

        </form>
    </Container>
  )
}

export default Forgetpassword
