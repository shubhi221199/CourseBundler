import React from 'react'
import {Box, Button, HStack, Heading, Stack, VStack} from '@chakra-ui/react'
import { Text, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import vg from '../../assets/images/logo.png'
import {CgGoogle, CgYoutube} from 'react-icons/cg'
import {SiCoursera, SiUdemy} from 'react-icons/si'
import {DiAws} from 'react-icons/di'
import './home.css'
import introvideo from '../../assets/videos/introvideo.mp4'

const Home = () => {
  return (
   <section className='home'>
      <div className='container'>
        <Stack
         direction={['column', 'row']}
         height="100%"
         justifyContent={['center','space-between']} 
         alignItems={'center'}
         spacing={['16','56']}
        >
            <VStack width={'full'} alignItems={['center', 'flex-end']} spacing={'8'} >

                <Heading children='LEARN FROM THE EXPERTS' size={'2xl'} textAlign={'end'}/>
                <Text 
                fontFamily={'cursive'}
                fontSize={'2xl'}
                children='Find Valuable Content At Reasonable Price' />
                <Link to='/courses'>
                <Button colorScheme='yellow' size={'lg'}>Explore Now</Button>
                </Link>

            </VStack>


            <Image 
            className='vectorgraphimg' boxSize={'sm'} src={vg} objectFit={"contain"} />
              
        </Stack>
      </div>

    <Box padding={'5'} bg={'blackAlpha.900'}>
        <Heading  marginBottom={'5'}
        fontFamily='body' 
        children="OUR BRANS"
        textAlign={'center'}
        color={'yellow.400'}

        />
        <HStack className='brandbanner' justifyContent={'space-evenly'}>
          
          <CgGoogle/>
          <CgYoutube/>
          <SiCoursera/>
          <SiUdemy/>
          <DiAws/>
        </HStack>
    </Box>
   
   <div className='container2'>
    <video autoPlay controls controlsList='nodownload nofullscreen noremoteplayback'
    disablePictureInPicture
    disableRemotePlayback src={introvideo}>

    </video>
   </div>
     
   </section>
  )
}

export default Home
