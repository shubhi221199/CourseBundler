import { Button, Container, Heading, VStack , Input} from '@chakra-ui/react'
import{ React, useState} from 'react'
import { useParams } from 'react-router-dom'

const Resetpassword = () => {
    const [password,setPassword] =  useState('')

    const params = useParams()
    console.log(params.token)
  return (
    <Container py={'50'} h='90vh'>
        <form>

            <Heading
            children='Reset Password'
            my='16'
            textTransform={'uppercase'}
            textAlign={['center','left']}
            />

<VStack spacing={'8'}>
     <Input
            required
           type='password'
           focusBorderColor='yellow.500'
            value={password}
            placeholder="New Password"
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
          <Button type='submit' colorScheme='yellow' w={'full'}>Reset Password</Button>
</VStack>
        

        </form>
    </Container>
  )
}

export default Resetpassword
